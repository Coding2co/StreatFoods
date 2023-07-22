const mongoose = require("mongoose");
// const mongoURI ='mongodb+srv://Coding2co:%23Impossible4@cluster0.z1tm7uf.mongodb.net/streatfood?retryWrites=true&w=majority' ---facing issues while connecting.----
const mongoURI =
  "mongodb://Coding2co:%23Impossible4@ac-zbyzhf2-shard-00-00.z1tm7uf.mongodb.net:27017,ac-zbyzhf2-shard-00-01.z1tm7uf.mongodb.net:27017,ac-zbyzhf2-shard-00-02.z1tm7uf.mongodb.net:27017/streatfood?ssl=true&replicaSet=atlas-p5me2l-shard-0&authSource=admin&retryWrites=true&w=majority";
  mongoose.set('strictQuery', true);



const mongoDB = () => {
  mongoose.connect(mongoURI, { useNewUrlParser: true }, async (err, result) => {
    if (err) console.log("--", err);
    else {
      console.log("connected successfully");
      const feteched_data = await mongoose.connection.db.collection( "food_items");
        feteched_data.find({}).toArray(async function (err, data) {
           const feteched_category =  await mongoose.connection.db.collection("foodCategory")
              feteched_category.find({}).toArray( function (err,catData){
                if (err) console.log(err);
                else {
                  global.food_items=data;
                  global.foodCategory=catData;
                }
              })
           
    
      })
    }
  });
};
module.exports = mongoDB;
