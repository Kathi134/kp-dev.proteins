import {v4 as uuidv4} from 'uuid';

class User {
    constructor() {
        this.id = uuidv4();
        this.name = "Katy"
    }

    static update(user, properties) {
        return {...user, ...properties};
    }
}

export {User};