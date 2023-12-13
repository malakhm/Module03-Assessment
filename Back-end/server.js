import dotenv from 'dotenv'
import express, { urlencoded }  from 'express'
import cors from 'cors'
import sequelize from './Config/conn.js'
import articleRouter from './Routers/ArticleRouter.js'
await sequelize.sync()
dotenv.config()
// initialize express app
const app = express();
app.use(express.urlencoded({ extended: true })); // Use built-in express.urlencoded middleware
app.use(express.json()); // Use built-in express.json middleware
app.use(cors())


// middleware
app.use(express.urlencoded({ extended: true })); // Use built-in express.urlencoded middleware
app.use(express.json()); // Use built-in express.json middleware
app.use(cors())

//routers
app.use('/api/articles', articleRouter)

// port
const PORT = process.env.PORT || 8090;

//Listen to port

app.listen(PORT, () => {
    try{
        console.log(`server is running on port: ${PORT}`);
    }
    catch(e){
        console.log(`server is facing an error: ${e.message}`);
    }
  });
  