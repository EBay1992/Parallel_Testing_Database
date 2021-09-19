const app = require("./src/app");
const pool = require("./src/pool");

pool
  .connect({
    host: "localhost",
    port: "5432",
    user: "Your_User",
    password: "Your_Password",
    database: "YourDatabase",
  })
  .then(() => {
    app().listen(3005, () => {
      console.log("Listening on port 3050");
    });
  })
  .catch((err) => {
    console.log(err);
  });
