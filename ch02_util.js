/*
    두점 사이의 거리

    입력 : 점1, 점2
    출력 : 거리
 */

function distanceBetweenTwoPoint(pt1, pt2)
{
    return Math.sqrt((pt2.x - pt1.x) * (pt2.x - pt1.x) + (pt2.y - pt1.y) * (pt2.y - pt1.y));
}

