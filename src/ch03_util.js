/*
     라디언을 도로 변환

     입력 : 라디언
     출력 : 도
 */
function radianToDegree(radian)
{
    return radian * 180 / Math.PI;
}

/*
     도을 라디언로 변환

     입력 : 도
     출력 : 라디언
 */
function degreeToRadian(degree)
{
    return degree * Math.PI / 180;
}

/*
     2차원 공간에서 두물체 사이의 각을 계산

     입력 : 첫번째 위치, 두번째 위치
     출력 : 도
 */
function calcAngle2D(pt1, pt2)
{
    var a = Math.atan2(pt2.y - pt1.y, pt2.x - pt1.x);
    return radianToDegree(a);
}