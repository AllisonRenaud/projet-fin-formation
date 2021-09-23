const CoreModel = require('./coreModel');

class Comment extends CoreModel {
    static tableName = "comment";

    constructor(obj={}) {
        super(obj);
        for(const propName in obj) {
            this[propName] = obj[propName];
        }
    }
}

module.exports = Comment;
