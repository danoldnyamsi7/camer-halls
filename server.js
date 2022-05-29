const express = require("express");
const app = express();
const dotenv = require("dotenv")
dotenv.config();
const cors = require("cors");
const PORT = process.env.PORT || process.env.APP_PORT ;
const path = require("path");
const helmet = require("helmet");
const { db_conn } = require("./configurations/database");

// middlewares
app.use(cors({
      origin: "*"
}));
app.use(express.json({limit:'100mb'}));
// app.use(helmet());
app.use(
      helmet.contentSecurityPolicy({
        useDefaults: true,
        directives: {
          "script-src": 'http://localhost:5050',
          "style-src": null,
          "img-src": '*',
          "default-src": '*'
        },
      }),
      
     );

// connect to mongo atlas
db_conn();

// api routes
const agentRoute = require("./routes/agent");
const hallRoute = require("./routes/hall");
const organizerRoute = require("./routes/organizer")

// api middlewares
app.use('/hall', hallRoute);
app.use('/agent', agentRoute);
app.use('/organizer', organizerRoute);

// root
if(process.env.NODE_ENV === 'production'){
      // set static folder
      app.use(express.static('/client/build'));
      app.get('/*', (req, res)=>{
            res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
      })
}

const port = process.env.PORT || 5050;

app.listen(port, ()=>{console.log(`http://localhost:${port}`)})