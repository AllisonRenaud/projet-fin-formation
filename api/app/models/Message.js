const CoreModel = require('./coreModel');

class Message extends CoreModel {
    static tableName = "message";

    constructor(obj={}) {
        super(obj);
        for(const propName in obj) {
            this[propName] = obj[propName];
        }
    }
}

module.exports = Message;
