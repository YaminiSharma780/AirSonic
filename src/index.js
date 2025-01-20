const express = require('express');

const {ServerConfig, Logger} = require('./config');

// const {AboutController, HomeController} = require('./controllers')

const apiRoutes = require('./routes');

const app = express();

app.use(express.json()); // used so that express read the body of api
app.use(express.urlencoded({
    extended: true // library choice
}));

app.use('/api', apiRoutes);

app.listen(ServerConfig.PORT, ()=>{
    console.log(`server is listening at port : ${ServerConfig.PORT}`);
    // Logger.info("successfully started the server", {});
});