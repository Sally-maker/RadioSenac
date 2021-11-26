import mongoose from "mongoose";

const {
  REACT_APP_DB_DATABASE,
  REACT_APP_DB_HOSTNAME,
  REACT_APP_DB_PORT,
} = process.env

mongoose.connect(
  `mongodb://${REACT_APP_DB_HOSTNAME}:${REACT_APP_DB_PORT}/${REACT_APP_DB_DATABASE}`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
).then(() => console.log("connected with successfully 🎃🍁"))