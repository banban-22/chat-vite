import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan'; 
import { Configuration, OpenAIApi } from "openai";


// configurations
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet())

app.use(helmet.crossOriginResourcePolicy({policy: "cross-origin"}));
app.use(morgan("common"))
app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors())

// open ai configuration
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
export const openai = new OpenAIApi(configuration);

// server setup
const PORT = process.env.port || 9000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
