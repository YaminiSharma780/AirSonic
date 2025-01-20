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

app.listen(ServerConfig.PORT, async()=>{
    console.log(`server is listening at port : ${ServerConfig.PORT}`);
    // Logger.info("successfully started the server", {});

    // TEST CODE
    const { City, Airport } = require('./models');
    // BELOW CODE DELETED record from cities table & associated airport with that city from airports table where id=11
    // await City.destroy({
    //     where: {
    //         id: 11
    //     }
    // });
    // BELOW CODE INSERTED record in airports table & associated it with cities table where id=11
    // const city = await City.findByPk(11);
    // await city.createAirport({
    //     name: 'Sardar Vallabhbhai Patel International Airport',
    //     code: 'AMD'
    // });
});