export class GoodData {
  createDb() {
    let goods = [
      { "id": "1", "name": "Apple", "pirce": 12.3, "change": 0.2 },
      { "id": "2", "name": "Banana", "pirce": 6.3, "change": 0 },
      { "id": "3", "name": "Orange", "pirce": 3.3, "change": -0.2 },
      { "id": "4", "name": "cherry", "pirce": 19.3, "change": -0.8 }
    ];
    return { goods };
  }
}
