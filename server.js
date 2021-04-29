// application dependensies
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv  = require('dotenv');
const courseRoute = require('./routes/courseRoute');
const reviewRoute = require('./routes/reviewRoute');
const admissionRoute = require('./routes/admissionRoute');
const userRoute = require('./routes/userRoute');


// application middleware
const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

// application configuration
const port  = process.env.PORT || 5000 ;
const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;
const dbName = process.env.DB_NAME;

// database connections
mongoose.connect(`mongodb+srv://${dbUser}:${dbPass}@cluster0.pa04j.mongodb.net/${dbName}?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log('Database Connection'))
.catch(err => console.log(err))


// applicatin  routes
app.use('/dashboard/course', courseRoute);
app.use('/dashboard/reviews', reviewRoute);
app.use('/dashboard/admission', admissionRoute);
app.use('/dashboard/user', userRoute);

// application server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});