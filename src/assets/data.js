
export default 
  {
    "resultCode": "1000",
    "resultMsg": "操作成功",
    "tn": "120oxuw",
    "data": {
      "totalNumber": 30,
      "pageNumber": 1,
      "monthBills": {
        "2018-05-14": [
          {
            "billId": "201805140000000000000000000001",
            "billMonth": "2018-05-14",
            "billType": "03",
            "billTypeDesc": "酒店",
            "billAmt": "20000.00",
            "billState": "待支付",
            "billStateCode": "H03",
            "billContent": "{\"bookDays\":1,\"checkInPerson\":\"test1,test2,test3\",\"cityName\":\"深圳\",\"hotelId\":\"201805140000000000000000000001\",\"hotelName\":\"维也纳\",\"inTime\":\"2018-05-15 00:00:00\",\"leaveTime\":\"2018-05-24 00:00:00\",\"roomCount\":3}"
          },
          {
            "billId": "201805140000000000000000000002",
            "billMonth": "2018-05-14",
            "billType": "02",
            "billTypeDesc": "机票",
            "billAmt": "1000000",
            "billState": "已出票",
            "billStateCode": "T02",
            "billContent": "{\"airBasicFlights\":[{\"arrivalDate\":\"2018-05-20\",\"arrivalTime\":\"18:00:23\",\"boardCityName\":\"深圳\",\"boardPointAT\":\"T2\",\"boardPointName\":\"福田\",\"carrierName\":\"中国东方航空公司\",\"carrierShortName\":\"东航\",\"departureDate\":\"2018-05-18\",\"departureTime\":\"23:00:23\",\"flightDirection\":\"OUT\",\"flightNo\":\"CA1130\",\"offCityName\":\"上海\",\"offPointAT\":\"T2\",\"offPointName\":\"浦东机场\"}],\"passengers\":\"张三\"}"
          },
          {
            "billId": "201805140000000000000000000003",
            "billMonth": "2018-05-14",
            "billType": "02",
            "billTypeDesc": "机票",
            "billAmt": "10000.00",
            "billState": "退票中",
            "billStateCode": "T06",
            "billContent": "{\"airBasicFlights\":[{\"arrivalDate\":\"2018-05-20\",\"arrivalTime\":\"18:00:23\",\"boardCityName\":\"深圳\",\"boardPointAT\":\"T2\",\"boardPointName\":\"福田\",\"carrierName\":\"中国东方航空公司\",\"carrierShortName\":\"东航\",\"departureDate\":\"2018-05-18\",\"departureTime\":\"23:00:23\",\"flightDirection\":\"OUT\",\"flightNo\":\"CA1130\",\"offCityName\":\"上海\",\"offPointAT\":\"T2\",\"offPointName\":\"浦东机场\"}],\"passengers\":\"张三\"}"
          },
          {
            "billId": "201805140000000000000000000003",
            "billMonth": "2018-05-14",
            "billType": "02",
            "billTypeDesc": "机票",
            "billAmt": "10000.00",
            "billState": "出票失败",
            "billStateCode": "T03",
            "billContent": "{\"airBasicFlights\":[{\"arrivalDate\":\"2018-06-21\",\"arrivalTime\":\"20:15:00\",\"boardCityName\":\"北京\",\"boardPointAT\":\"T2\",\"boardPointName\":\"北京首都\",\"carrierName\":\"中国东方航空公司\",\"carrierShortName\":\"中国东方航空\",\"departureDate\":\"2018-06-21\",\"departureTime\":\"18:00:00\",\"flightDirection\":\"OUT\",\"flightNo\":\"MU5122\",\"offCityName\":\"上海\",\"offPointAT\":\"T2\",\"offPointName\":\"上海虹桥\"},{\"arrivalDate\":\"2018-07-06\",\"arrivalTime\":\"09:15:00\",\"boardCityName\":\"上海\",\"boardPointAT\":\"T2\",\"boardPointName\":\"上海虹桥\",\"carrierName\":\"中国东方航空公司\",\"carrierShortName\":\"中国东方航空\",\"departureDate\":\"2018-07-06\",\"departureTime\":\"07:00:00\",\"flightDirection\":\"IN\",\"flightNo\":\"MU5137\",\"offCityName\":\"北京\",\"offPointAT\":\"T2\",\"offPointName\":\"北京首都\"}],\"bizOrderId\":\"AO201806210000000650\",\"passengers\":\"Ni/ZiJiaa,测试巴拉巴拉\"}"
          }
        ],
        "2018-05-15": [
          {
            "billId": "201805150000000000000000000002",
            "billMonth": "2018-05-15",
            "billType": "03",
            "billTypeDesc": "酒店",
            "billAmt": "2000000",
            "billState": "已确认",
            "billStateCode": "H05",
            "billContent": "{\"bookDays\":3,\"checkInPerson\":\"张三、李四\",\"cityName\":\"深圳\",\"hotelId\":\"201805150000000000000000000002\",\"hotelName\":\"维也纳\",\"inTime\":\"2018-05-17 00:00:00\",\"leaveTime\":\"2018-05-31 00:00:00\",\"roomCount\":3}"
          },
          {
            "billAmt": "6000000",
            "billContent": "{\"bookTime\":\"2018-05-16 00:00:00\",\"carId\":\"201805160000000000000000000003\",\"departurePlace\":\"深圳北\",\"destination\":\"福田\",\"useReason\":\"03\"}",
            "billId": "201805160000000000000000000003",
            "billMonth": "2018-05-16",
            "billState": "待支付",
            "billStateCode": "C02",
            "billType": "04",
            "billTypeDesc": "用车"
          },
          {
            "billAmt": "6000000",
            "billContent": "{\"bookTime\":\"2018-05-16 00:00:00\",\"carId\":\"201805160000000000000000000003\",\"departurePlace\":\"深圳北\",\"destination\":\"福田\",\"useReason\":\"03\"}",
            "billId": "201805160000000000000000000003",
            "billMonth": "2018-05-16",
            "billState": "已完成",
            "billStateCode": "C03",
            "billType": "04",
            "billTypeDesc": "用车"
          },
          {
            "billAmt": "6000000",
            "billContent": "{\"bookTime\":\"2018-05-16 00:00:00\",\"carId\":\"201805160000000000000000000003\",\"departurePlace\":\"深圳北\",\"destination\":\"福田\",\"useReason\":\"03\"}",
            "billId": "201805160000000000000000000003",
            "billMonth": "2018-05-16",
            "billState": "已取消",
            "billStateCode": "C04",
            "billType": "04",
            "billTypeDesc": "用车"
          }
        ]
      }
    }
  }

