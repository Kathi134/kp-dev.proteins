import {v4 as uuidv4} from "uuid";

class Portion {
    constructor(amount, descriptor="") {
        this.id = uuidv4();
        this.amount = amount;
        this.descriptor = descriptor;
    }
}

const PORTION_DUMP = [
    new Portion(24, "ein Brot"),
    new Portion(12),
    new Portion(200, "für eine Mahlzeit"),
]

export {Portion, PORTION_DUMP};