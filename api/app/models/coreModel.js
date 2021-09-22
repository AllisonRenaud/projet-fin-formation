const db = require('../databases/postgres.js');

class CoreModel {
    static async findAll() {
        try {
            const {rows} = await db.query(`SELECT * FROM "${this.tableName}"`);
            const instances = [];
                for(const instance of rows) {
                    instances.push(new this(instance));
                }
            return instances
        } catch (error) {
            console.log(error)
        }
    }

    static async findById(id) {
      try {
        const {rows} = await db.query(`SELECT * FROM "${this.tableName}" WHERE id = $1`, [id]);
        return new this(rows[0]);
      } catch(error) {
        if(error.detail) throw new Error(error.detail);
        throw error;
      }
    }

    async save() {
        try {
            if (this.id) {
                await db.query(`SELECT update_${this.constructor.tableName}($1)`, [this]);
            } else {
                const {rows} = await db.query(`SELECT new_${this.constructor.tableName}($1) AS id`, [this]);
                this.id = rows[0].id;
                return this;
            }
            return this;
        } catch(error) {
            if(error.detail) {
                throw new Error(error.detail)
            } else {
                throw error;
            }
        }
    }

    static async delete(id) {
      try {
        await db.query(`DELETE FROM "${this.constructor.tableName}" WHERE id = $1`, [id]);
      } catch(error) {
        if(error.detail) {
          throw new Error(error.detail)
        } else {
            throw error;
        }
      }
    }
}

module.exports = CoreModel;
