import mongoose from "mongoose";

mongoose.connect(
  "mongodb://localhost:27017",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
).then(() => console.log("connected with succesful 🎃🍁"))