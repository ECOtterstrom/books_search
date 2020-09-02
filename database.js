const mongoose = require('mongoose');
const connection = "mongodb+srv://hapiotter@gmail.com:secretpassword1@cluster0-shard-00-01.8cw7z.gcp.mongodb.net:27017/booksearch?retryWrites=true&w=majority";
mongoose.connect(connection,{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
    .then(() => console.log("Database Connected Successfully"))
    .catch(err => console.log(err));