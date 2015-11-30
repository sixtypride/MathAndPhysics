/*
    두 점 사이의 거리 구하기

    입력 : 두점
    출력 : 거리
 */
function distanceBetweenPoint(pt1, pt2)
{
    return Math.sqrt((pt2.x - pt1.x) * (pt2.x - pt1.x) + (pt2.y - pt1.y) * (pt2.y - pt1.y));
}

/*
     3차원 상의 두 점 사이의 거리 구하기

     입력 : 두점
     출력 : 거리
 */
function distanceBetweenPointFor3D(pt1, pt2)
{
    return Math.sqrt((pt2.x - pt1.x) * (pt2.x - pt1.x) + (pt2.y - pt1.y) * (pt2.y - pt1.y) + (pt2.z - pt1.z) * (pt2.z - pt1.z));
}

/*
     두 점 사이의 중점 구하기

     입력 : 두점
     출력 : 점
 */
function find2DMidPoint(pt1, pt2)
{
    var value = { };

    value.x = (pt1.x + pt2.x) / 2;
    value.y = (pt1.y + pt2.y) / 2;

    return value;
}

/*
     3차원 상의 두 점 사이의 중점 구하기

     입력 : 두점
     출력 : 점
 */
function find3DMidPoint(pt1, pt2)
{
    var value = { };

    value.x = (pt1.x + pt2.x) / 2;
    value.y = (pt1.y + pt2.y) / 2;
    value.z = (pt1.z + pt2.z) / 2;

    return value;
}