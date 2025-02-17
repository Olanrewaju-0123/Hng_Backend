require("dotenv").config();
const Express = require("express");
const cors = require("cors");
const displayRoutes = require("express-routemap");
const app = Express();
const port = process.env.APP_PORT;
const profileRoutes = require('./routes/route')

app.use(cors()); 

app.use(Express.json());
app.use(profileRoutes)

app.listen(port, () => {
    displayRoutes(app);
    console.log(`Server running at http://localhost:${port}`);
  });
