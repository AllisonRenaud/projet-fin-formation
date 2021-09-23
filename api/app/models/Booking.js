const CoreModel = require('./coreModel');

class Booking extends CoreModel {
    static tableName = "booking";

    constructor(obj={}) {
        super(obj);
        for(const propName in obj) {
            this[propName] = obj[propName];
        }
    }
}

module.exports = Booking;
