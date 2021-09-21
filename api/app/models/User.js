const CoreModel = require('./coreModel');

class User extends CoreModel {
    static tableName = "user";

    constructor(obj={}) {
        super(obj);
        for(const propName in obj) {
            this[propName] = obj[propName];
        }
    }
}

module.exports = User;