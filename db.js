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
        host: process.env.RDS_HOSTNAME,
        username: process.env.RDS_USERNAME,
        password: process.env.RDS_PASSWORD,
        database: process.env.RDS_DB_NAME,
    });

    Connection.setDefaultConnection(connection);

    await testModel.init();
}

module.exports = {
    init,
    testModel,
};