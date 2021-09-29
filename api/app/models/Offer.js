const CoreModel = require('./coreModel');
const db = require('../databases/postgres.js');

class Offer extends CoreModel {
    static tableName = "offer";

    constructor(obj={}) {
        super(obj);
        for(const propName in obj) {
            this[propName] = obj[propName];
        }
    }

    static async findByTitle(title) {
      try {

        title = title.split(" ").map(word => `(${word}?[ ]?)`).join("")
        
        
        const {rows} = await db.query('SELECT * FROM "offer" WHERE "title" ~* $1', [title]);
        return rows[0]

      } catch(error) {
        if(error.detail) throw new Error(error.detail);
        throw error;
      }
  }
}

module.exports = Offer;
