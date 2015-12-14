// html async 테스트

QUnit.module('Example', {
    setup : function(){
        document.body.innerHTML = __html__['test/htmlTest.html'];
    },

    teardown : function(){
    }
});


QUnit.test("html 테스트", function(assert)
{
    var done = assert.async();
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");

    context.fillStyle = 'blue';
    context.fillRect(20, 20, 150, 100);

    canvas.addEventListener('mousedown', function() {
        assert.ok(true);
        done();
    })

});
QUnit.test("html 테스트2", function(assert)
{
    var done = assert.async();
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");

    context.fillStyle = 'red';
    context.fillRect(20, 20, 150, 100);

    canvas.addEventListener('mousedown', function() {
        assert.ok(true);
        done();
    })
});

// ch01
QUnit.test("기울기 구하기", function(assert)
{
    var value = slopeBetweenPoints({x:1,y:1}, {x:2,y:2});
    assert.equal(1, value);
});

QUnit.test("직교하는 기울기 구하기", function(assert)
{
    var value = perpSlop(1/2);
    assert.equal(-2, value);
});

QUnit.test("두 기울기는 직교하는가", function(assert)
{
    var value = arePerp(1/2, -2);
    assert.ok(value);
});

QUnit.test("Y절편 구하기", function(assert)
{
    var value = interceptBetweenPoints(1/2, {x:3, y:5});
    assert.equal(3.5, value);
});

QUnit.test("두 직선 사이에 교차하는 점이 있는가", function(assert)
{
    var value = getRoot({x:8/3, y:0}, {x:0, y:8/5}, {x:0, y:4/3}, {x:4, y:0});
    assert.equal("one root", value);
});

QUnit.test("두 직선의 교점", function(assert)
{
    var value = lineIntersect({x:8/3, y:0}, {x:0, y:8/5}, {x:0, y:4/3}, {x:4, y:0});
    assert.deepEqual({x:1, y:1}, value);
});

// ch02
QUnit.test("두 점 사이의 거리", function(assert)
{
    var value = distanceBetweenPoint({x:25, y:80}, {x:55, y:40});
    assert.deepEqual(50, value);
});

QUnit.test("3차원 상의 두 점 사이의 거리", function(assert)
{
    var value = distanceBetweenPointFor3D({x:25, y:80, z:30}, {x:55, y:40, z:100});
    assert.deepEqual(86, Math.round(value));
});

QUnit.test("두 점 사이의 중점", function(assert)
{
    var value = find2DMidPoint({x:25, y:80}, {x:55, y:40});
    assert.deepEqual({x:40, y:60}, value);
});

QUnit.test("3차원 상의 두 점 사이의 중점", function(assert)
{
    var value = find3DMidPoint({x:25, y:80, z:30}, {x:55, y:40, z:100});
    assert.deepEqual({x:40, y:60, z:65}, value);
});

// ch03

QUnit.test("도를 라디언으로 변환", function(assert)
{
    var value = degreeToRadian(90);
    assert.deepEqual(Math.PI/2, value);
});

QUnit.test("라디언를 도로 변환", function(assert)
{
    var value = radianToDegree(Math.PI/2);
    assert.deepEqual(90, value);
});

QUnit.test("좌표가 주어졌을 때 각도 구하기", function(assert)
{
    var value = calcAngle2D({x:0, y:0}, {x:100, y:400});
    assert.deepEqual(76, Math.round(value));
});

// ch04
QUnit.test("크기/방향 형식의 벡터를 성분 형식으로 반환", function(assert)
{
    var value = polarToCompConversion2D({mag:10, dir:30});
    assert.deepEqual({x:8.660254037844387, y:4.999999999999999}, value);
});

QUnit.test("성분 형식의 벡터를 크기/방향 형식으로 반환", function(assert)
{
    var value = compToPolarConversion2D({x:8.660254037844387, y:4.999999999999999});
    assert.deepEqual({mag:10, dir:30}, value);
});

QUnit.test("벡터 정규화", function(assert)
{
    var value = normalization({x:20, y:20, z:0});
    assert.deepEqual({x:0.7071067811865475, y:0.7071067811865475, z:0}, value);
});

QUnit.test("두 벡터의 내적", function(assert)
{
    var value = innerProduct({x:0, y:1, z:0}, {x:1, y:0, z:0});
    assert.deepEqual(0, value);
});

QUnit.test("두 벡터가 직교하는가", function(assert)
{
    var value = isOrthogonal({x:0, y:1, z:0}, {x:1, y:0, z:0});
    assert.ok(value);
});

QUnit.test("두 벡터의 각 구하기", function(assert)
{
    var value = angleBetweenVector({x:5, y:2, z:-3}, {x:8, y:1, z:-4});
    assert.deepEqual(13.262676008304837, value);
});

QUnit.test("두 벡터의 외적", function(assert)
{
    var value = outerProduct({x:5, y:-6, z:0}, {x:1, y:2, z:3});
    assert.deepEqual({x:-18, y:-15, z:16}, value);
});