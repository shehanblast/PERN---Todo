//connect db
const Process = require("process");
const Pool = require("pg").Pool;
require("dotenv").config();

const devConfig = {
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    database: process.env.PG_DATABASE
}

const proConfig = {
    connectionString: process.env.DATABASE_URL, //heroku addons
}

const pool = new Pool(
    process.env.NODE_ENV === "production" ? proConfig : devConfig
);

module.exports = pool;

// const Pool = require("pg").Pool;

// const pool = new Pool({
//     user: "postgres",
//     password: "Binuka123#",
//     host: "localhost",
//     port: 5432,
//     database: "perntodo"
// });
//
// module.exports = pool;