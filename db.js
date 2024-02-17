const { Model, Connection, FIELD_TYPE } = require("@bucky24/database");

const testModel = Model.create({
    table: 'test',
    fields: {
        name: {
            type: FIELD_TYPE.STRING,
        },
    },
    version: 1,
});

async function init() {
    const connection = await Connection.mysqlConnection({
        host: process.env.HOST,
        username: process.env.USERNAME,
        password: process.env.PASS,
        database: process.env.DB,
    });

    Connection.setDefaultConnection(connection);

    await testModel.init();
}

module.exports = {
    init,
    testModel,
};