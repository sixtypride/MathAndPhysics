QUnit.test("기울기 구하기", function(assert)
{
    var a = slopeBetweenPoints({x:1,y:1}, {x:2,y:2});
    assert.equal(1, a);
});

QUnit.test("두 직선의 교점", function(assert)
{
    var a = lineIntersect({x:8/3, y:0}, {x:0, y:8/5}, {x:0, y:4/3}, {x:4, y:0});

    assert.deepEqual({x:1, y:1}, a);
});
