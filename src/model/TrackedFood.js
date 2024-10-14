import {v4 as uuidv4} from 'uuid';
import {DISH_COMPONENT_DUMP} from "./Dish";
import {PORTION_DUMP} from "./Portion";

class TrackedFood {
    constructor(food, portion) {
        this.id = uuidv4();
        this.food = food;
        this.portion = portion ?? food.portionSize;
    }

    static update(user, properties) {
        return {...user, ...properties};
    }

    getProteins() {
        return this.food.getProteinsForPortion(this.portion);
    }
}

const TRACKED_FOOD_DUMP = [
    new TrackedFood(DISH_COMPONENT_DUMP[0], PORTION_DUMP[1]),
    new TrackedFood(DISH_COMPONENT_DUMP[2], PORTION_DUMP[0]),
    new TrackedFood(DISH_COMPONENT_DUMP[3], PORTION_DUMP[1]),
    new TrackedFood(DISH_COMPONENT_DUMP[1], PORTION_DUMP[2]),
    new TrackedFood(DISH_COMPONENT_DUMP[2], PORTION_DUMP[1]),
    new TrackedFood(DISH_COMPONENT_DUMP[0], PORTION_DUMP[0]),
]

export {TRACKED_FOOD_DUMP};

