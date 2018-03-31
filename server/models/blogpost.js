import mongoose  from '../routes/config/mongoose';

var blogpostSchema = mongoose.Schema({
    imgUrl: String,
    title: {
        type: String
    },
    category: {
        type: String
    },
    description: {
        type: String
    },
    date: {
        type: String
    },
    slug:{
        type:String
    },
    views: {
        type: Number,
        default: 0
    }
});
blogpostSchema.index({ title: 'text' });

var Blogpost = mongoose.model('blogpost', blogpostSchema);
module.exports = Blogpost;
