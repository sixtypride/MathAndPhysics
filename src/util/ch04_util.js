//-p:1-

/*
    크기/방향 형식의 벡터를 성분 형식으로 변환

    입력 : 크기/방향 형식의 벡터
    출력 : 성분 형식의 벡터
 */
function polarToCompConversion2D(vec)
{
    var value = { };

    value.x = vec.mag * Math.cos(degreeToRadian(vec.dir));
    value.y = vec.mag * Math.sin(degreeToRadian(vec.dir));

    return value;
}

/*
     성분 형식의 벡터를 크기/방향 형식으로 변환

     입력 : 성분 형식의 벡터
     출력 : 크기/방향 형식의 벡터
 */
function compToPolarConversion2D(vec)
{
    var value = { };

    value.mag = Math.sqrt(vec.x * vec.x + vec.y * vec.y);
    value.dir = Math.round(radianToDegree(Math.atan2(vec.y, vec.x)));

    return value;
}

/*
     벡터 정규화

     입력 : 성분 형식 벡터
     출력 : 성분 형식 벡터
 */
function normalization(vec)
{
    var value = { };
    var mag = Math.sqrt(vec.x * vec.x + vec.y * vec.y + vec.z * vec.z);

    value.x = vec.x / mag;
    value.y = vec.y / mag;
    value.z = vec.z / mag;

    return value;
}

/*
     두 벡터의 내적

     입력 : 성분 형식 벡터
     출력 : 성분 형식 벡터
 */
function innerProduct(vec1, vec2)
{
    var value;

    value = vec1.x * vec2.x + vec1.y * vec2.y + vec1.z * vec2.z;

    return value;
}

/*
     두 벡터의 직교 여부

     입력 : 성분 형식 벡터
     출력 : 성분 형식 벡터
 */
function isOrthogonal(vec1, vec2)
{
    var value = innerProduct(vec1, vec2);

    return value == 0;
}

/*
     두 벡터의 사이각

     입력 : 성분 형식 벡터
     출력 : 도
 */
function angleBetweenVector(vec1, vec2)
{
    var value = innerProduct(vec1, vec2);

    var mag1 = Math.sqrt(vec1.x * vec1.x + vec1.y * vec1.y + vec1.z * vec1.z);
    var mag2 = Math.sqrt(vec2.x * vec2.x + vec2.y * vec2.y + vec2.z * vec2.z);

    var angle = Math.acos(value / (mag1 * mag2));

    return radianToDegree(angle);
}

/*
     두 벡터의 외적

     입력 : 성분 형식 벡터
     출력 : 성분 형식 벡터
 */
function outerProduct(vec1, vec2)
{
    var value = { };

    value.x = vec1.y * vec2.z - vec1.z * vec2.y;
    value.y = vec1.z * vec2.x - vec1.x * vec2.z;
    value.z = vec1.x * vec2.y - vec1.y * vec2.x;

    return value;
}