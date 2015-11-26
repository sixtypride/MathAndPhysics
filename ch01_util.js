var canvas = document.getElementById('canvas'),
    context = canvas.getContext('2d');

/*
    두점의 좌표가 주어졌을 때 기울기

    입력 : 직선 상의 두점
    출력 : 직선의 기울기
 */

function slopeBetweenPoints(pt1, pt2)
{
    return (pt2.y - pt1.y) / (pt2.x - pt1.x);
}

/*
    두 직선의 기울기를 곱했을 때 1이 나오면 그 결과는 1이다

    입력 : slope - 직선의 기울기
    출력 : 주어진 직선에 직교하는 기울기
 */

function perpSlop(slope)
{
    return -1 / slope;
}

/*
    두직선이 직교하면 true 아니라면 false

    입력 : 기울기1, 기울기2
    출력 : 직교 여부
 */

function arePerp(slope1, slope2)
{
    return slope1 * slope2 == -1;
}

/*
    기울기가 m일 때 Y절편 구하기

    입력 : m - 기울기, pt - 평면 상의 점
    출력 : y절편
 */
function interceptBetweenPoints(m, pt)
{
    return pt.y - ( m * pt.x);
}

/*
    두 직선의 기울기가 서로 다르면 유일한 해
    기울기와 y절편이 모두 같으면 무한히 많은 해
    기울기는 같지만 y절편이 다르면 해는 없음

    입력 : pt1, pt2 - 첫번째 직선위의 두 점
          pt11, pt22 - 두번째 직선위의 두 점
    출력 : 해의 갯수 (교차하는 두 직선인지 확인)
 */
function getRoot(pt1, pt2, pt11, pt22)
{
    var intercept1, intercept2;

    var slope1 = slopeBetweenPoints(pt1, pt2);
    var slope2 = slopeBetweenPoints(pt11, pt22);

    if(slope1 !== slope2)
    {
        return "one root"
    }
    else
    {
        intercept1 = interceptBetweenPoints(slope1, pt1);
        intercept2 = interceptBetweenPoints(slope2, pt11);

        if(intercept1 === intercept2)
        {
            return "much root"
        }
        else
        {
            return "no root"
        }
    }
}

console.log(getRoot({x:1, y:1}, {x:2, y:2}, {x:2, y:3}, {x:4, y:5}));