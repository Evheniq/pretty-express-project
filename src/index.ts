import express from 'express';
import router from './router';
import config from 'config';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

// Get config data
const environment = process.env.NODE_ENV || '';
const appPort = Number(process.env.PORT) || config.get('app.port') || 0;
const appHostname = process.env.HOSTNAME || config.get('app.hostname') || '';

const dbUsername = process.env.DB_USERNAME || config.get('db.username');
const dbPassword = process.env.DB_PASSWROD || config.get('db.password');
const dbName = process.env.DB_NAME || config.get('db.name');

// Create app and connect middlewares
const app = express();
app.use(bodyParser.json());
app.use(router);

// Bootstrap function
async function startApp() {
  try {
    await mongoose.connect(
      `mongodb+srv://${dbUsername}:${dbPassword}@superherodb.zpmtfv9.mongodb.net/${dbName}`,
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      }
    );
    app.listen(appPort, appHostname, () => {
      console.log(
        `App running at http://${appHostname}:${appPort}/ in ${environment}`
      );
      console.log('Hit CTRL-C CTRL-C to stop');
    });
  } catch (e) {
    console.log(e);
  }
}

// Start
startApp();
