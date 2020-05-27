const mongoose =require('mongoose');
const Schema =mongoose.Schema;
const currency=require('mongoose-currency');
const promotionSchema = new Schema({
    name:{
        type: String,
        required:true,
        unique:true
    },
    image:{
        type: String,
        required:true
    },
    label:{
        type:String,
        default:'',
        required:false
    },
    price:{
        type:currency,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    featured:{
        type:Boolean,
        required:true
    }
},{
    timestamps: true
});

var Promotions =mongoose.model('Promotions',promotionSchema);

module.exports= Promotions;