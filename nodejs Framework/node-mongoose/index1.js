const mongoose =require('mongoose');
const Dishes =require('./modals/dishes');

const url ='mongodb://localhost:27017/conFusion';
const connect =mongoose.connect(url);

connect.then((db)=>{
    console.log('Connected correctly to server');

    var newDish=Dishes({
        name: 'Uthapizza',
        description: 'Test'
    });
    newDish.save()
        .then((dish)=>{
            console.log(dish);

            Dishes.find({}).exec();
        })
        .then((dishes)=>{
            console.log(dishes);

            return Dishes.remove({});
        })
        .then(()=>{
            return mongoose.connection.close();
        })
        .catch((err)=>{
            console.log(err);
        });
});