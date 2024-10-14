import {v4 as uuidv4} from "uuid";
import {TRACKED_FOOD_DUMP} from "./TrackedFood";

class Day {
    constructor(trackedFood) {
        this.id = uuidv4();
        this.date = new Date();
        this.trackedFood = trackedFood;
    }

    static update(user, properties) {
        return {...user, ...properties};
    }

    getProteins() {
        return this.trackedFood.map(f => f.getProteins()).reduce((a,b) => a+b);
    }
}

const DAY_DUMP = [
    new Day(TRACKED_FOOD_DUMP)
]

export {DAY_DUMP};