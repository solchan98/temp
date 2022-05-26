# 원티드 프리온보딩 매드업 과제 백엔드
원티드 프리온보딩 프론트엔드 매드업 과제를 위해 간단한 용도로 사용하기 위해 제작되었습니다.  

- SSL 인증을 통해 HTTPS를 지원합니다.
- 도메인을 적용하였습니다. `madup.shop`
- 전체적으로 CUD를 진행하는 API는 없습니다.

## Project Info
- Platform: NestJs
- ORM: TypeORM
- Typescript
- DataBase: Postgresql  


## API Docs

`BASE_URL: https://madup.shop/api/v1`

### Ad-List
**Request**  
`GET BASE_URL/advertising`

**Response**
```json
{
    "count": 1,
    "ads": [
        {
            "id": 1,
            "adType": "web",
            "title": "매드업 레버 광고 1234",
            "budget": 500000,
            "status": "active",
            "startDate": "2020-10-19",
            "endDate": null,
            "report": {
                "cost": 267144117,
                "convValue": 1157942685,
                "roas": 433
            }
        }
    ]
}
```

### Daily-Report
**Request**  
`GET BASE_URL/daily-report?startDate=2022-04-01&endDate=2022-04-02`

**Response**
```json
{
    "curData": {
        "report": {
            "daily": [
                {
                    "id": 60,
                    "imp": 456878,
                    "click": 814,
                    "cost": 516446,
                    "conv": 27,
                    "convValue": 1879220,
                    "ctr": 0.18,
                    "cvr": 3.32,
                    "cpc": 634.45,
                    "cpa": 19127.63,
                    "roas": 363.88,
                    "date": "2022-04-01"
                },
                {
                    "id": 61,
                    "imp": 341632,
                    "click": 738,
                    "cost": 608475,
                    "conv": 52,
                    "convValue": 3771222,
                    "ctr": 0.22,
                    "cvr": 7.05,
                    "cpc": 824.49,
                    "cpa": 11701.44,
                    "roas": 619.78,
                    "date": "2022-04-02"
                }
            ]
        }
    },
    "prevData": {
        "report": {
            "daily": [
                {
                    "id": 58,
                    "imp": 296170,
                    "click": 839,
                    "cost": 467813,
                    "conv": 34,
                    "convValue": 2284260,
                    "ctr": 0.28,
                    "cvr": 4.05,
                    "cpc": 557.58,
                    "cpa": 13759.21,
                    "roas": 488.28,
                    "date": "2022-03-30"
                },
                {
                    "id": 59,
                    "imp": 110391,
                    "click": 640,
                    "cost": 427658,
                    "conv": 39,
                    "convValue": 1898187,
                    "ctr": 0.58,
                    "cvr": 6.09,
                    "cpc": 668.22,
                    "cpa": 10965.59,
                    "roas": 443.86,
                    "date": "2022-03-31"
                }
            ]
        }
    }
}
```

### Media-Report
**Request**  
`GET BASE_URL/media-report?startDate=2022-04-01&endDate=2022-04-02`

**Response**
```json
[
    {
        "id": "4",
        "channel": "google",
        "date": "2022-02-04",
        "imp": 109,
        "click": 25,
        "cost": 2566,
        "convValue": 0,
        "ctr": 22.9358,
        "cvr": 0,
        "cpc": 102.64,
        "cpa": 0,
        "roas": 0
    },
    {
        "id": "5",
        "channel": "google",
        "date": "2022-02-05",
        "imp": 62,
        "click": 12,
        "cost": 3006,
        "convValue": 9,
        "ctr": 19.3548,
        "cvr": 75,
        "cpc": 250.5,
        "cpa": 334,
        "roas": 5619.7272
    },
    {
        "id": "6",
        "channel": "google",
        "date": "2022-02-06",
        "imp": 66,
        "click": 10,
        "cost": 1373,
        "convValue": 0,
        "ctr": 15.1515,
        "cvr": 0,
        "cpc": 137.3,
        "cpa": 0,
        "roas": 0
    },
    {
        "id": "83",
        "channel": "naver",
        "date": "2022-02-04",
        "imp": 13179,
        "click": 352,
        "cost": 153290,
        "convValue": 24,
        "ctr": 2.6709,
        "cvr": 6.8182,
        "cpc": 435.483,
        "cpa": 6387.0833,
        "roas": 1458.4643
    },
    {
        "id": "84",
        "channel": "naver",
        "date": "2022-02-05",
        "imp": 10944,
        "click": 328,
        "cost": 140180,
        "convValue": 12,
        "ctr": 2.9971,
        "cvr": 3.6585,
        "cpc": 427.378,
        "cpa": 11681.6667,
        "roas": 515.0164
    },
    {
        "id": "85",
        "channel": "naver",
        "date": "2022-02-06",
        "imp": 11712,
        "click": 338,
        "cost": 150340,
        "convValue": 28,
        "ctr": 2.8859,
        "cvr": 8.284,
        "cpc": 444.7929,
        "cpa": 5369.2857,
        "roas": 1322.1431
    },
    {
        "id": "161",
        "channel": "facebook",
        "date": "2022-02-04",
        "imp": 16879,
        "click": 225,
        "cost": 242896,
        "convValue": 26,
        "ctr": 1.333,
        "cvr": 11.5556,
        "cpc": 1079.5378,
        "cpa": 9342.1538,
        "roas": 804.8177
    },
    {
        "id": "162",
        "channel": "facebook",
        "date": "2022-02-05",
        "imp": 15075,
        "click": 228,
        "cost": 254908,
        "convValue": 6,
        "ctr": 1.5124,
        "cvr": 2.6316,
        "cpc": 1118.0175,
        "cpa": 42484.6667,
        "roas": 193.9092
    },
    {
        "id": "163",
        "channel": "facebook",
        "date": "2022-02-06",
        "imp": 14946,
        "click": 267,
        "cost": 261042,
        "convValue": 7,
        "ctr": 1.7864,
        "cvr": 2.6217,
        "cpc": 977.6854,
        "cpa": 37291.7143,
        "roas": 181.5034
    },
    {
        "id": "240",
        "channel": "kakao",
        "date": "2022-02-04",
        "imp": 40843,
        "click": 91,
        "cost": 30305,
        "convValue": 0,
        "ctr": 0.2228,
        "cvr": 0,
        "cpc": 333.022,
        "cpa": 0,
        "roas": 0
    },
    {
        "id": "241",
        "channel": "kakao",
        "date": "2022-02-05",
        "imp": 29804,
        "click": 86,
        "cost": 29997,
        "convValue": 0,
        "ctr": 0.2886,
        "cvr": 0,
        "cpc": 348.8023,
        "cpa": 0,
        "roas": 0
    },
    {
        "id": "242",
        "channel": "kakao",
        "date": "2022-02-06",
        "imp": 21930,
        "click": 93,
        "cost": 30349,
        "convValue": 0,
        "ctr": 0.4241,
        "cvr": 0,
        "cpc": 326.3333,
        "cpa": 0,
        "roas": 0
    }
]
```
