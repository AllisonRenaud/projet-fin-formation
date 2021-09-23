const CoreModel = require('./coreModel');

class Offer extends CoreModel {
    static tableName = "offer";

    constructor(obj={}) {
        super(obj);
        for(const propName in obj) {
            this[propName] = obj[propName];
        }
    }
}

module.exports = Offer;
