const temperature = result.list[0].main.temp;

// api.openweathermap.org/data/2.5/weather?q={city name}
const result_london = {
    "coord": {
        "lon": -0.13,
        "lat": 51.51
    },
    "weather": [{
        "id": 300,
        "main": "Drizzle",
        "description": "light intensity drizzle",
        "icon": "09d"
    }],
    "base": "stations",
    "main": {
        "temp": 280.32,
        "pressure": 1012,
        "humidity": 81,
        "temp_min": 279.15,
        "temp_max": 281.15
    },
    "visibility": 10000,
    "wind": {
        "speed": 4.1,
        "deg": 80
    },
    "clouds": {
        "all": 90
    },
    "dt": 1485789600,
    "sys": {
        "type": 1,
        "id": 5091,
        "message": 0.0103,
        "country": "GB",
        "sunrise": 1485762037,
        "sunset": 1485794875
    },
    "id": 2643743,
    "name": "London",
    "cod": 200
}


const result = {
    {
        "cod": "200",
        "message": 0.0385,
        "cnt": 38,
        "list": [{
                "dt": 1547618400,
                "main": {
                    "temp": 48.69,
                    "temp_min": 47.25,
                    "temp_max": 48.69,
                    "pressure": 1014.19,
                    "sea_level": 1039.16,
                    "grnd_level": 1014.19,
                    "humidity": 74,
                    "temp_kf": 0.8
                },
                "weather": [{
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }],
                "clouds": {
                    "all": 92
                },
                "wind": {
                    "speed": 4.74,
                    "deg": 179.502
                },
                "rain": {
                    "3h": 0.01
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-01-16 06:00:00"
            },
            {
                "dt": 1547629200,
                "main": {
                    "temp": 48.58,
                    "temp_min": 47.5,
                    "temp_max": 48.58,
                    "pressure": 1013.21,
                    "sea_level": 1038.2,
                    "grnd_level": 1013.21,
                    "humidity": 78,
                    "temp_kf": 0.6
                },
                "weather": [{
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }],
                "clouds": {
                    "all": 80
                },
                "wind": {
                    "speed": 4.5,
                    "deg": 181.501
                },
                "rain": {
                    "3h": 0.05
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-01-16 09:00:00"
            },
            {
                "dt": 1547640000,
                "main": {
                    "temp": 47.21,
                    "temp_min": 46.48,
                    "temp_max": 47.21,
                    "pressure": 1012.58,
                    "sea_level": 1037.57,
                    "grnd_level": 1012.58,
                    "humidity": 84,
                    "temp_kf": 0.4
                },
                "weather": [{
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }],
                "clouds": {
                    "all": 88
                },
                "wind": {
                    "speed": 2.59,
                    "deg": 182.003
                },
                "rain": {
                    "3h": 0.03
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-01-16 12:00:00"
            },
            {
                "dt": 1547650800,
                "main": {
                    "temp": 49.21,
                    "temp_min": 48.84,
                    "temp_max": 49.21,
                    "pressure": 1013.57,
                    "sea_level": 1038.39,
                    "grnd_level": 1013.57,
                    "humidity": 92,
                    "temp_kf": 0.2
                },
                "weather": [{
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }],
                "clouds": {
                    "all": 88
                },
                "wind": {
                    "speed": 3.38,
                    "deg": 300.002
                },
                "rain": {
                    "3h": 0.31
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-01-16 15:00:00"
            },
            {
                "dt": 1547661600,
                "main": {
                    "temp": 54.1,
                    "temp_min": 54.1,
                    "temp_max": 54.1,
                    "pressure": 1012.94,
                    "sea_level": 1037.44,
                    "grnd_level": 1012.94,
                    "humidity": 86,
                    "temp_kf": 0
                },
                "weather": [{
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }],
                "clouds": {
                    "all": 92
                },
                "wind": {
                    "speed": 3.94,
                    "deg": 132.501
                },
                "rain": {
                    "3h": 0.225
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-01-16 18:00:00"
            },
            {
                "dt": 1547672400,
                "main": {
                    "temp": 58.57,
                    "temp_min": 58.57,
                    "temp_max": 58.57,
                    "pressure": 1010.4,
                    "sea_level": 1034.49,
                    "grnd_level": 1010.4,
                    "humidity": 84,
                    "temp_kf": 0
                },
                "weather": [{
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }],
                "clouds": {
                    "all": 92
                },
                "wind": {
                    "speed": 4.59,
                    "deg": 164.008
                },
                "rain": {
                    "3h": 0.23
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-01-16 21:00:00"
            },
            {
                "dt": 1547683200,
                "main": {
                    "temp": 57.7,
                    "temp_min": 57.7,
                    "temp_max": 57.7,
                    "pressure": 1009.73,
                    "sea_level": 1033.9,
                    "grnd_level": 1009.73,
                    "humidity": 88,
                    "temp_kf": 0
                },
                "weather": [{
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }],
                "clouds": {
                    "all": 76
                },
                "wind": {
                    "speed": 3.04,
                    "deg": 175.502
                },
                "rain": {
                    "3h": 0.075
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-01-17 00:00:00"
            },
            {
                "dt": 1547694000,
                "main": {
                    "temp": 52.24,
                    "temp_min": 52.24,
                    "temp_max": 52.24,
                    "pressure": 1010.07,
                    "sea_level": 1034.45,
                    "grnd_level": 1010.07,
                    "humidity": 93,
                    "temp_kf": 0
                },
                "weather": [{
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }],
                "clouds": {
                    "all": 32
                },
                "wind": {
                    "speed": 4.5,
                    "deg": 182.001
                },
                "rain": {
                    "3h": 0.02
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-01-17 03:00:00"
            },
            {
                "dt": 1547704800,
                "main": {
                    "temp": 50.36,
                    "temp_min": 50.36,
                    "temp_max": 50.36,
                    "pressure": 1009.99,
                    "sea_level": 1034.51,
                    "grnd_level": 1009.99,
                    "humidity": 90,
                    "temp_kf": 0
                },
                "weather": [{
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 7.4,
                    "deg": 218.5
                },
                "rain": {},
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-01-17 06:00:00"
            },
            {
                "dt": 1547715600,
                "main": {
                    "temp": 46.98,
                    "temp_min": 46.98,
                    "temp_max": 46.98,
                    "pressure": 1009.47,
                    "sea_level": 1034.06,
                    "grnd_level": 1009.47,
                    "humidity": 84,
                    "temp_kf": 0
                },
                "weather": [{
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "02n"
                }],
                "clouds": {
                    "all": 8
                },
                "wind": {
                    "speed": 6.13,
                    "deg": 215.001
                },
                "rain": {},
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-01-17 09:00:00"
            },
            {
                "dt": 1547726400,
                "main": {
                    "temp": 44.14,
                    "temp_min": 44.14,
                    "temp_max": 44.14,
                    "pressure": 1009.37,
                    "sea_level": 1033.97,
                    "grnd_level": 1009.37,
                    "humidity": 88,
                    "temp_kf": 0
                },
                "weather": [{
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "02n"
                }],
                "clouds": {
                    "all": 8
                },
                "wind": {
                    "speed": 3.74,
                    "deg": 227.501
                },
                "rain": {},
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-01-17 12:00:00"
            },
            {
                "dt": 1547737200,
                "main": {
                    "temp": 52.39,
                    "temp_min": 52.39,
                    "temp_max": 52.39,
                    "pressure": 1010.95,
                    "sea_level": 1035.48,
                    "grnd_level": 1010.95,
                    "humidity": 91,
                    "temp_kf": 0
                },
                "weather": [{
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02d"
                }],
                "clouds": {
                    "all": 24
                },
                "wind": {
                    "speed": 7.25,
                    "deg": 259.503
                },
                "rain": {},
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-01-17 15:00:00"
            },
            {
                "dt": 1547748000,
                "main": {
                    "temp": 68.5,
                    "temp_min": 68.5,
                    "temp_max": 68.5,
                    "pressure": 1010.72,
                    "sea_level": 1034.82,
                    "grnd_level": 1010.72,
                    "humidity": 70,
                    "temp_kf": 0
                },
                "weather": [{
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }],
                "clouds": {
                    "all": 32
                },
                "wind": {
                    "speed": 5.99,
                    "deg": 267.502
                },
                "rain": {
                    "3h": 0.0050000000000001
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-01-17 18:00:00"
            },
            {
                "dt": 1547758800,
                "main": {
                    "temp": 72.83,
                    "temp_min": 72.83,
                    "temp_max": 72.83,
                    "pressure": 1008.76,
                    "sea_level": 1032.61,
                    "grnd_level": 1008.76,
                    "humidity": 58,
                    "temp_kf": 0
                },
                "weather": [{
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02d"
                }],
                "clouds": {
                    "all": 24
                },
                "wind": {
                    "speed": 4.47,
                    "deg": 322.001
                },
                "rain": {},
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-01-17 21:00:00"
            },
            {
                "dt": 1547769600,
                "main": {
                    "temp": 64.32,
                    "temp_min": 64.32,
                    "temp_max": 64.32,
                    "pressure": 1008.92,
                    "sea_level": 1032.89,
                    "grnd_level": 1008.92,
                    "humidity": 59,
                    "temp_kf": 0
                },
                "weather": [{
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03n"
                }],
                "clouds": {
                    "all": 48
                },
                "wind": {
                    "speed": 2.86,
                    "deg": 356
                },
                "rain": {},
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-01-18 00:00:00"
            },
            {
                "dt": 1547780400,
                "main": {
                    "temp": 54.78,
                    "temp_min": 54.78,
                    "temp_max": 54.78,
                    "pressure": 1009.6,
                    "sea_level": 1033.97,
                    "grnd_level": 1009.6,
                    "humidity": 70,
                    "temp_kf": 0
                },
                "weather": [{
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                }],
                "clouds": {
                    "all": 76
                },
                "wind": {
                    "speed": 6.2,
                    "deg": 34.5035
                },
                "rain": {},
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-01-18 03:00:00"
            },
            {
                "dt": 1547791200,
                "main": {
                    "temp": 50.54,
                    "temp_min": 50.54,
                    "temp_max": 50.54,
                    "pressure": 1009.28,
                    "sea_level": 1033.83,
                    "grnd_level": 1009.28,
                    "humidity": 83,
                    "temp_kf": 0
                },
                "weather": [{
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }],
                "clouds": {
                    "all": 88
                },
                "wind": {
                    "speed": 3.04,
                    "deg": 51.5009
                },
                "rain": {},
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-01-18 06:00:00"
            },
            {
                "dt": 1547802000,
                "main": {
                    "temp": 49.2,
                    "temp_min": 49.2,
                    "temp_max": 49.2,
                    "pressure": 1008.41,
                    "sea_level": 1032.91,
                    "grnd_level": 1008.41,
                    "humidity": 87,
                    "temp_kf": 0
                },
                "weather": [{
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }],
                "clouds": {
                    "all": 92
                },
                "wind": {
                    "speed": 2.48,
                    "deg": 109.505
                },
                "rain": {},
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-01-18 09:00:00"
            },
            {
                "dt": 1547812800,
                "main": {
                    "temp": 53.18,
                    "temp_min": 53.18,
                    "temp_max": 53.18,
                    "pressure": 1007.23,
                    "sea_level": 1031.54,
                    "grnd_level": 1007.23,
                    "humidity": 91,
                    "temp_kf": 0
                },
                "weather": [{
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }],
                "clouds": {
                    "all": 92
                },
                "wind": {
                    "speed": 2.82,
                    "deg": 124.003
                },
                "rain": {
                    "3h": 0.1
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-01-18 12:00:00"
            },
            {
                "dt": 1547823600,
                "main": {
                    "temp": 57.03,
                    "temp_min": 57.03,
                    "temp_max": 57.03,
                    "pressure": 1007.23,
                    "sea_level": 1031.39,
                    "grnd_level": 1007.23,
                    "humidity": 98,
                    "temp_kf": 0
                },
                "weather": [{
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }],
                "clouds": {
                    "all": 92
                },
                "wind": {
                    "speed": 4.63,
                    "deg": 143.502
                },
                "rain": {
                    "3h": 0.59
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-01-18 15:00:00"
            },
            {
                "dt": 1547834400,
                "main": {
                    "temp": 64.88,
                    "temp_min": 64.88,
                    "temp_max": 64.88,
                    "pressure": 1005.51,
                    "sea_level": 1029.42,
                    "grnd_level": 1005.51,
                    "humidity": 93,
                    "temp_kf": 0
                },
                "weather": [{
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }],
                "clouds": {
                    "all": 88
                },
                "wind": {
                    "speed": 11.43,
                    "deg": 176.002
                },
                "rain": {
                    "3h": 0.5
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-01-18 18:00:00"
            },
            {
                "dt": 1547845200,
                "main": {
                    "temp": 69.94,
                    "temp_min": 69.94,
                    "temp_max": 69.94,
                    "pressure": 1001.37,
                    "sea_level": 1025.12,
                    "grnd_level": 1001.37,
                    "humidity": 80,
                    "temp_kf": 0
                },
                "weather": [{
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }],
                "clouds": {
                    "all": 92
                },
                "wind": {
                    "speed": 15.35,
                    "deg": 178.501
                },
                "rain": {
                    "3h": 0.2
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-01-18 21:00:00"
            },
            {
                "dt": 1547856000,
                "main": {
                    "temp": 67.36,
                    "temp_min": 67.36,
                    "temp_max": 67.36,
                    "pressure": 999.8,
                    "sea_level": 1023.5,
                    "grnd_level": 999.8,
                    "humidity": 88,
                    "temp_kf": 0
                },
                "weather": [{
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }],
                "clouds": {
                    "all": 92
                },
                "wind": {
                    "speed": 15.66,
                    "deg": 179
                },
                "rain": {
                    "3h": 0.25
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-01-19 00:00:00"
            },
            {
                "dt": 1547866800,
                "main": {
                    "temp": 62.69,
                    "temp_min": 62.69,
                    "temp_max": 62.69,
                    "pressure": 999.47,
                    "sea_level": 1023.23,
                    "grnd_level": 999.47,
                    "humidity": 96,
                    "temp_kf": 0
                },
                "weather": [{
                    "id": 501,
                    "main": "Rain",
                    "description": "moderate rain",
                    "icon": "10n"
                }],
                "clouds": {
                    "all": 92
                },
                "wind": {
                    "speed": 12.01,
                    "deg": 181.503
                },
                "rain": {
                    "3h": 3.16
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-01-19 03:00:00"
            },
            {
                "dt": 1547877600,
                "main": {
                    "temp": 65.57,
                    "temp_min": 65.57,
                    "temp_max": 65.57,
                    "pressure": 998.78,
                    "sea_level": 1022.5,
                    "grnd_level": 998.78,
                    "humidity": 96,
                    "temp_kf": 0
                },
                "weather": [{
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }],
                "clouds": {
                    "all": 92
                },
                "wind": {
                    "speed": 13.47,
                    "deg": 187.502
                },
                "rain": {
                    "3h": 0.58
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-01-19 06:00:00"
            },
            {
                "dt": 1547888400,
                "main": {
                    "temp": 64.05,
                    "temp_min": 64.05,
                    "temp_max": 64.05,
                    "pressure": 997.95,
                    "sea_level": 1022,
                    "grnd_level": 997.95,
                    "humidity": 96,
                    "temp_kf": 0
                },
                "weather": [{
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }],
                "clouds": {
                    "all": 92
                },
                "wind": {
                    "speed": 12.66,
                    "deg": 217.012
                },
                "rain": {
                    "3h": 1.27
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-01-19 09:00:00"
            },
            {
                "dt": 1547899200,
                "main": {
                    "temp": 56.38,
                    "temp_min": 56.38,
                    "temp_max": 56.38,
                    "pressure": 999.81,
                    "sea_level": 1024.11,
                    "grnd_level": 999.81,
                    "humidity": 94,
                    "temp_kf": 0
                },
                "weather": [{
                    "id": 501,
                    "main": "Rain",
                    "description": "moderate rain",
                    "icon": "10n"
                }],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 9.42,
                    "deg": 306.005
                },
                "rain": {
                    "3h": 5.55
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-01-19 12:00:00"
            },
            {
                "dt": 1547910000,
                "main": {
                    "temp": 49.2,
                    "temp_min": 49.2,
                    "temp_max": 49.2,
                    "pressure": 1004.95,
                    "sea_level": 1029.52,
                    "grnd_level": 1004.95,
                    "humidity": 91,
                    "temp_kf": 0
                },
                "weather": [{
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 22.08,
                    "deg": 334.5
                },
                "rain": {
                    "3h": 0.0099999999999998
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-01-19 15:00:00"
            },
            {
                "dt": 1547920800,
                "main": {
                    "temp": 41.63,
                    "temp_min": 41.63,
                    "temp_max": 41.63,
                    "pressure": 1009.87,
                    "sea_level": 1034.87,
                    "grnd_level": 1009.87,
                    "humidity": 92,
                    "temp_kf": 0
                },
                "weather": [{
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02d"
                }],
                "clouds": {
                    "all": 24
                },
                "wind": {
                    "speed": 25.08,
                    "deg": 337
                },
                "rain": {},
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-01-19 18:00:00"
            },
            {
                "dt": 1547931600,
                "main": {
                    "temp": 40.41,
                    "temp_min": 40.41,
                    "temp_max": 40.41,
                    "pressure": 1010.98,
                    "sea_level": 1036.21,
                    "grnd_level": 1010.98,
                    "humidity": 87,
                    "temp_kf": 0
                },
                "weather": [{
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 25.39,
                    "deg": 339.501
                },
                "rain": {},
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-01-19 21:00:00"
            },
            {
                "dt": 1547942400,
                "main": {
                    "temp": 36.69,
                    "temp_min": 36.69,
                    "temp_max": 36.69,
                    "pressure": 1014.53,
                    "sea_level": 1040.12,
                    "grnd_level": 1014.53,
                    "humidity": 75,
                    "temp_kf": 0
                },
                "weather": [{
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 21.94,
                    "deg": 342.001
                },
                "rain": {},
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-01-20 00:00:00"
            },
            {
                "dt": 1547953200,
                "main": {
                    "temp": 33.55,
                    "temp_min": 33.55,
                    "temp_max": 33.55,
                    "pressure": 1018.23,
                    "sea_level": 1044.09,
                    "grnd_level": 1018.23,
                    "humidity": 72,
                    "temp_kf": 0
                },
                "weather": [{
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 20.29,
                    "deg": 347.003
                },
                "rain": {},
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-01-20 03:00:00"
            },
            {
                "dt": 1547964000,
                "main": {
                    "temp": 30.92,
                    "temp_min": 30.92,
                    "temp_max": 30.92,
                    "pressure": 1020,
                    "sea_level": 1046.13,
                    "grnd_level": 1020,
                    "humidity": 73,
                    "temp_kf": 0
                },
                "weather": [{
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 19.8,
                    "deg": 350.5
                },
                "rain": {},
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-01-20 06:00:00"
            },
            {
                "dt": 1547974800,
                "main": {
                    "temp": 28.26,
                    "temp_min": 28.26,
                    "temp_max": 28.26,
                    "pressure": 1021.48,
                    "sea_level": 1047.63,
                    "grnd_level": 1021.48,
                    "humidity": 72,
                    "temp_kf": 0
                },
                "weather": [{
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 18.72,
                    "deg": 355.001
                },
                "rain": {},
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-01-20 09:00:00"
            },
            {
                "dt": 1547985600,
                "main": {
                    "temp": 25.17,
                    "temp_min": 25.17,
                    "temp_max": 25.17,
                    "pressure": 1022.73,
                    "sea_level": 1049.06,
                    "grnd_level": 1022.73,
                    "humidity": 67,
                    "temp_kf": 0
                },
                "weather": [{
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 16.02,
                    "deg": 359
                },
                "rain": {},
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2019-01-20 12:00:00"
            },
            {
                "dt": 1547996400,
                "main": {
                    "temp": 25.57,
                    "temp_min": 25.57,
                    "temp_max": 25.57,
                    "pressure": 1025.7,
                    "sea_level": 1052.14,
                    "grnd_level": 1025.7,
                    "humidity": 70,
                    "temp_kf": 0
                },
                "weather": [{
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 15.12,
                    "deg": 357.5
                },
                "rain": {},
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-01-20 15:00:00"
            },
            {
                "dt": 1548007200,
                "main": {
                    "temp": 33.21,
                    "temp_min": 33.21,
                    "temp_max": 33.21,
                    "pressure": 1026.07,
                    "sea_level": 1052.16,
                    "grnd_level": 1026.07,
                    "humidity": 72,
                    "temp_kf": 0
                },
                "weather": [{
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 13.56,
                    "deg": 358.507
                },
                "rain": {},
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-01-20 18:00:00"
            },
            {
                "dt": 1548018000,
                "main": {
                    "temp": 39.11,
                    "temp_min": 39.11,
                    "temp_max": 39.11,
                    "pressure": 1023.47,
                    "sea_level": 1049.11,
                    "grnd_level": 1023.47,
                    "humidity": 67,
                    "temp_kf": 0
                },
                "weather": [{
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 9.86,
                    "deg": 1.00119
                },
                "rain": {},
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2019-01-20 21:00:00"
            }
        ],
        "city": {
            "id": 4671654,
            "name": "Austin",
            "coord": {
                "lat": 30.2711,
                "lon": -97.7437
            },
            "country": "US",
            "population": 790390
        }
    }
}

