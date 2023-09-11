const {callback} = require("pg");
const { Pool } = require('pg')

let dbConnection = null

async function connect() {
  const connectionString = 'postgresql://charliecb:OXpBTRtdJqCZVAYHGkZPDA@free-tier14.aws-us-east-1.cockroachlabs.cloud:26257/onlypaws?sslmode=verify-full&options=--cluster%3Donly-paws-5009';
  const pool = new Pool({
    connectionString,
    application_name: "$ only-paws",
  });

  await pool.connect()
      .then(db => dbConnection = db)
      .then(() => console.log('Successfully connected to DB'));
}

async function createNewUser(new_user) {
  let repo
  const insertUserStatement =
      'INSERT INTO public.users (nickname, pet_name, name, user_type, pet_type, days, password) VALUES ($1, $2, $3, $4, $5, $6, $7);';
  try {
    await dbConnection.query(insertUserStatement, new_user);
  } catch (error) {
    return error.detail.toString()
  }
}

async function getUserPassword(username, password) {
  let response
  const selectUserStatement =
      'SELECT * FROM public.users WHERE nickname = $1;';
  try {
    response = await dbConnection.query(selectUserStatement, [username]);
  } catch (error) {
    return "username does not exists"
  }
  return response.rows
}

async function createNewSession(session_information) {
  const insertSessionStatement =
      'INSERT INTO public.session (id, nickname) VALUES ($1, $2);';
  try {
    await dbConnection.query(insertSessionStatement, session_information, callback);
  } catch (error) {
    return error.detail.toString()
  }
}


module.exports = {
  connect: connect,
  createNewUser: createNewUser,
  getUserPassword: getUserPassword,
  createNewSession: createNewSession
}
