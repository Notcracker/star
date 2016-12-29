import { Injectable } from '@angular/core';

@Injectable()
export class KaskoService {
  getTemplateData() {
    return {
      options:
      {
        "Транспортное средство": {
          "model": {
            "title": "Alfa Romeo",
            "type": "select",
            "clean": true
          },
          "rightWheel": {
            "title": "Расположение руля",
            "type": "select"
          }
        },
        "Базовые параметры": {
          "owner": {
            "title": "Страхователь",
            "type": "select",
            "clean": true
          },
          "region": {
            "title": "Регион",
            "type": "select",
            "clean": true
          },
          "program": {
            "title": "Программа",
            "type": "select"
          },
          "service": {
            "title": "Сопровождение",
            "type": "select"
          }
        },
        "Условия страхования": {
          "sto": {
            "title": "Форма выплаты",
            "type": "radio"
          },
          "paymentOrder": {
            "title": "Порядок оплаты",
            "type": "radio"
          },
          "insurancePeriod": {
            "title": "Срок страхования",
            "type": "select"
          }
        },
        "Противоугонные системы": {
          "antiHijackSystemAlarm": {
            "title": "Сигнализация",
            "type": "select",
            "params": {
              "stretched": true
            }
          },
          "antiHijackSystemMechanic": {
            "title": "Механическое ПУ",
            "type": "select",
            "params": {
              "stretched": true
            }
          },
          "antiHijackSystemSatellite": {
            "title": "Спутниковая ПС",
            "type": "select",
            "params": {
              "stretched": true
            }
          }
        },
        "Лица, допущенные к управлению": {
          "multidrive": {
            "title": "Мультидрайв",
            "type": "select"
          }
        },
        "Дополнительные условия": {
          "compensationLimit": {
            "title": "Тип страховой суммы",
            "type": "select"
          },
          "insurancePark": {
            "title": "Парк ТС",
            "type": "select"
          },
          "transitionFromCompany": {
            "title": "История страхования",
            "type": "select"
          }
        },
        "Франшиза": {
          "franchise": {
            "title": "Франшиза",
            "type": "select",
            "clean": true
          },
          "franchiseType": {
            "title": "Тип франшизы",
            "type": "select"
          }
        },
        "Несчастный случай": {
          "ns": {
            "title": "Страхование от НС в результате ДТП",
            "type": "checkbox"
          },
          "nsSum": {
            "title": "Страховая сумма",
            "type": "input",
            "params": {
              "extension": "руб."
            }
          },
          "nsSystem": {
            "title": "Тип системы",
            "type": "select"
          },
          "nsSeats": {
            "title": "Количество мест",
            "type": "input"
          },
          "dateTest": {
            "title": "Тест Дата-инпута",
            "type": "date"
          }
        },
      },
      data:
      {
        "make": "Alfa Romeo",
        "model": "147",
        "year": "2016",
        "power": "3456",
        "drivers": [
          {
            "sex": "m",
            "age": 18,
            "experience": 0
          }
        ],
        "price": 456456,
        "source": {
          "make": "Alfa Romeo",
          "model": "147",
          "year": "2016",
          "power": "3456",
          "drivers": [
            {
              "sex": "m",
              "age": "",
              "experience": ""
            }
          ],
          "price": "456456"
        },
        "meta": {
          "issue": {
            "can": false,
            "partners": {
              "owner": {
                "is": [
                  "insurant",
                  ""
                ]
              },
              "beneficiary": {
                "is": [
                  "insurant",
                  "owner",
                  ""
                ]
              }
            },
            "error": {
              "message": "Не настроен аккаунт для онлайн оформления в данной СК. Чтобы иметь возможность оформлять полис онлайн, свяжитесь с нашей службой поддержки по телефону 8-800-555-39-56 или напишите на почту mail@pkasko.ru"
            },
            "draftRecalc": false
          },
          "contractPeriod": 12,
          "territory": {
            "kladr": {
              "kladr": "7800000000000",
              "calc": "7800000000000",
              "region": "7800000000000"
            },
            "regionKladr": {
              "name": "Санкт-Петербург",
              "type": "г",
              "code_region": "78",
              "code_area": "000",
              "code_city": "000",
              "code_town": "000",
              "post_code": "190000",
              "level": "0",
              "id": "78",
              "code": "region",
              "title": "г. Санкт-Петербург",
              "title_full": "г. Санкт-Петербург",
              "title_select": "г. Санкт-Петербург",
              "kladr": "7800000000000"
            },
            "townKladr": ""
          },
          "minDriverAge": 18,
          "minDriverExperience": 0,
          "drivers": {
            "minAge": 18,
            "minExperience": 0
          },
          "carAge": 0,
          "car": {
            "age": 0,
            "guarantee": true,
            "domestic": false,
            "sport": false,
            "power": "0",
            "weight": "0",
            "price": "0"
          },
          "carGuarantee": true,
          "explAge": 0,
          "carDomestic": false,
          "carSport": false
        },
        "region": "Санкт-Петербург",
        "multidrive": "Без ограничений",
        "owner": "Физическое лицо",
        "program": "Нет",
        "service": "Стандарт",
        "antiHijackSystemAlarm": "штатная",
        "antiHijackSystemMechanic": "нет",
        "antiHijackSystemSatellite": "нет",
        "sto": "Ремонт на СТОА по направлению Страховщика",
        "compensationLimit": "Неагрегатная",
        "paymentOrder": "Единовременно",
        "insurancePeriod": "1 год",
        "insurancePark": "Нет",
        "transitionFromCompany": "Новый договор",
        "rightWheel": "Слева",
        "franchiseType": "Безусловная",
        "franchise": 0,
        "ns": false,
        "nsSystem": "По паушальной системе",
        "equipmentSum": 0,
        "nsSum": 0,
        "nsSeats": 1,
        "orig": {
          "make": "Alfa Romeo",
          "model": "147"
        }
      },
      values:
      {
        "make": [
          "Acura",
          "Alfa Romeo",
          "Aston Martin",
          "Audi",
          "Bentley",
          "BMW",
          "Brilliance",
          "Buick",
          "BYD",
          "Cadillac",
          "Changan",
          "ChangFeng",
          "Chery",
          "Chevrolet",
          "Chrysler",
          "Citroen",
          "Dacia",
          "Dadi",
          "Daewoo",
          "Daihatsu",
          "Datsun",
          "Derways",
          "Dodge",
          "Dongfeng",
          "Doninvest",
          "FAW",
          "Ferrari",
          "Fiat",
          "Ford",
          "Geely",
          "GMC",
          "Great Wall",
          "Hafei",
          "Haima",
          "Haval",
          "Honda",
          "Huanghai",
          "Hummer",
          "Hyundai",
          "Infiniti",
          "Iran Khodro",
          "Isuzu",
          "JAC",
          "Jaguar",
          "Jeep",
          "Jiang Ling",
          "Kia",
          "Lamborghini",
          "Lancia",
          "Land Rover",
          "Lexus",
          "Lifan",
          "Lincoln",
          "Mahindra",
          "Mazda",
          "Mercedes-Benz",
          "Mercury",
          "Mini",
          "Mitsubishi",
          "Nissan",
          "Opel",
          "Peugeot",
          "Pontiac",
          "Porsche",
          "Ravon",
          "Renault",
          "Saab",
          "Scania",
          "Seat",
          "Skoda",
          "Smart",
          "Ssang Yong",
          "Subaru",
          "Suzuki",
          "Tianma",
          "Tianye",
          "Tonggong",
          "Toyota",
          "Volkswagen",
          "Volvo",
          "Xin Kai",
          "Автобусы (иные марки)",
          "ВАЗ/LADA",
          "ГАЗ",
          "Грузовые ТС (иные марки)",
          "ЗАЗ",
          "ИЖ",
          "Микроавтобусы (иные марки)",
          "Прицепы, полуприцепы (все марки)",
          "Спецтехника",
          "ТаГаз",
          "УАЗ"
        ],
        "model": [
          "147",
          "156",
          "159",
          "166",
          "8C Competizione",
          "Brera",
          "Giulietta",
          "GT",
          "GTV",
          "MiTo",
          "Spider"
        ],
        "owner": [
          "Физическое лицо",
          "Юридическое лицо"
        ],
        "region": [
          "Казань",
          "Санкт-Петербург",
          "Москва"
        ],
        "program": [
          "Нет",
          "Большая разница"
        ],
        "service": [
          "Стандарт"
        ],
        // "login": [],
        "antiHijackSystemAlarm": [
          "штатная",
          "A.P.S.",
          "Alligator",
          "Audiovox",
          "Black Bug",
          "Bruin",
          "Cenmax",
          "Centurion",
          "Challenger",
          "Clifford",
          "Cyclon",
          "DF",
          "Excellent",
          "Fighter",
          "Gorgon",
          "Guard",
          "Inspector",
          "Jaguar",
          "KGB",
          "Kopel",
          "Leopard",
          "MED",
          "Meritec",
          "Mongoose",
          "MS",
          "Mystery",
          "Pandora",
          "Pantera",
          "Partisan",
          "Phantom",
          "Pharaon",
          "Quasar",
          "Red Scorpio",
          "Reef",
          "Scher-Khan",
          "Sheriff",
          "SOBR",
          "StarLine",
          "Terminator",
          "Tomahawk",
          "Zorro",
          "ДИАЛОГ"
        ],
        "antiHijackSystemMechanic": [
          "нет",
          "на КПП",
          "на капот"
        ],
        "antiHijackSystemSatellite": [
          "нет",
          "Audi",
          "AutoConnex",
          "BMW",
          "Cesar Satellite",
          "GoldenEye",
          "Porsche",
          "SpaceGuard",
          "SputnikAuto",
          "Starcom",
          "UniSat",
          "Автолокатор",
          "Андромеда",
          "ЛоДжек",
          "Эшелон"
        ],
        "sto": [
          "Ремонт на СТОА по направлению Страховщика",
          "Ремонт на СТОА официального дилера (для гарантийных ТС)",
          "Ремонт на СТОА официального дилера (для негарантийных ТС)"
        ],
        "multidrive": [
          "Поименный список",
          "Без ограничений"
        ],
        "compensationLimit": [
          "Неагрегатная",
          "Агрегатная"
        ],
        "paymentOrder": [
          "Единовременно",
          "2 взноса (50% / 50%) до 4-х мес.",
          "3 взноса (40% / 30% / 30%) до 4-х мес.",
          "Ежеквартально"
        ],
        "insurancePeriod": [
          "1 год",
          "11 месяцев",
          "10 месяцев",
          "9 месяцев",
          "8 месяцев",
          "7 месяцев",
          "6 месяцев",
          "5 месяцев",
          "4 месяца",
          "3 месяца",
          "2 месяца",
          "1 месяц"
        ],
        "insurancePark": [
          "Нет",
          "Застраховано 1 ТС",
          "Застраховано 2 ТС",
          "Застраховано 3 ТС",
          "Застраховано 4 ТС"
        ],
        "transitionFromCompany": [
          "Новый договор",
          "Безубыточный переход из другой СК",
          "Безубыт. пролонгация на 2-й год",
          "Безубыт. пролонгация на 3-й год",
          "Безубыт. пролонгация на 4-й год"
        ],
        "rightWheel": [
          "Слева",
          "Справа"
        ],
        "franchiseType": [
          "Безусловная",
          "Условная"
        ],
        "franchise": [
          0,
          4564,
          13693,
          22822
        ],
        "ns": [
          false,
          true
        ],
        "nsSystem": [
          "По паушальной системе"
        ],
        // "nsSeats": [],
        // "nsSum": []
      },
    };
  }
}
