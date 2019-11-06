// Object containing menu options for the Meal Maker program.
const menu = {
  _courses: {
    _appetizers: [],
    _mains: [],
    _desserts: [],
  
  get appetizers() {
    return this._appetizers;
  },
  set appetizers(appetizersIn) {
    this._appetizers.push(appetizersIn);
  },
  get mains() {
    return this._mains;
  },
  set mains(mainsIn) {
    this._mains.push(mainsIn);
  },
  get desserts() {
    return this._desserts;
  }, 
  set desserts(dessertsIn) {
    this._desserts.push(dessertsIn);
    },
  },
  
  get courses() {
  return {
    appetizers: this._courses.appetizers,
    mains: this._courses.mains,
    desserts: this._courses.desserts
    }
  },
  
  // Function for adding additional courses, dishes, and prices.
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice,
    };
       return this.courses[courseName].push(dish);
},
  
  // Randomizes the courses using the ones added to the object.
  getRandomDishFromCourse: function (courseName) {
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },
  
  // Generates the meals and returns them.
   generateRandomMeal: function () {
    const appetizer = this.getRandomDishFromCourse("appetizers");
    const main = this.getRandomDishFromCourse("mains");
    const dessert = this.getRandomDishFromCourse("desserts");
    const totalPrice = appetizer.price + main.price + dessert.price;

    return `Your appetizer is ${appetizer.name}, your main course is ${main.name} and your dessert is ${dessert.name}. The price total is $${totalPrice}.`;
  }
};

// Added dishes.
menu.addDishToCourse("appetizers", "Macaroni Bites", 4.00);
menu.addDishToCourse("appetizers", "Avacado Toast", 6.00);
menu.addDishToCourse("appetizers", "Stuffed Mushrooms", 8.00);

menu.addDishToCourse("mains", "Alfredo Primavera", 14.00);
menu.addDishToCourse("mains", "Filet Mignot", 23.00);
menu.addDishToCourse("mains", "Salmon Dinner", 18.00);

menu.addDishToCourse("desserts", "Rice Pudding", 4.00);
menu.addDishToCourse("desserts", "Cheesecake", 4.00)

let meal = menu.generateRandomMeal();
console.log(meal);


