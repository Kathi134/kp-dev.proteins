import {v4 as uuidv4} from 'uuid';
import {Portion} from "./Portion";

class DishComponent {
    getProteinsPer100g() {}
    getCaloriesPer100g() {}

    getProteinCaloriesRatio() {
        return (this.getProteinsPer100g() / this.getCaloriesPer100g());
    }

    getProteinsForPortion(portion) {
         return ((this.getProteinsPer100g() / 100.0) * portion.amount);
    }
}

class Dish extends DishComponent {
    constructor(name, components) {
        super();
        this.id = uuidv4();
        this.name = name;
        this.components = components;
    }

    static update(user, properties) {
        return {...user, ...properties};
    }

    getProteinsPer100g() {
        return this.components.map((c) => c.getProteinsPer100g()).reduce((a,b) => a+b, 0);
    }

    getCaloriesPer100g() {
        return this.components.map((c) => c.getCaloriesPer100g()).reduce((a,b) => a+b, 0);
    }
}

class Grocery extends DishComponent {
    constructor(name, proteins, calories, barcode, portionSize) {
        super();
        this.id = uuidv4();
        this.name = name;
        this.proteinsPer100g = proteins;
        this.caloriesPer100g = calories;
        this.barcode = barcode;
        this.portion = new Portion(portionSize);
    }

    getProteinsPer100g() {
        return this.proteinsPer100g;
    }

    getCaloriesPer100g() {
        return this.caloriesPer100g;
    }
}

const GROCERY_DUMP = [
    new Grocery("Gurke", 1, 12, "4388844234680", 40),
    new Grocery("Proteinbrot", 23, 244,"20065553", 42),
    new Grocery("Leberwurst Schnittlauch", 4.5, 262,"4000405002100", 15),
    new Grocery("Proteinpudding", 10,76, "4002971243901", 200),
]

const DISH_DUMP = [
    new Dish("Proteinbrot mit Leberwurst und Gurke", [...GROCERY_DUMP].filter(g => g.name !== "Proteinpudding"))
]

const DISH_COMPONENT_DUMP = [...GROCERY_DUMP, ...DISH_DUMP];

export {DISH_DUMP, GROCERY_DUMP, DISH_COMPONENT_DUMP};