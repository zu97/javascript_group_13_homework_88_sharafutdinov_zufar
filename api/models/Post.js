const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        validate: {
            validator: function (value) {
                if (!value && !this.image) {
                    return false;
                }
            },
            message: 'You must fill in the description field or the image field'
        },
    },
    image: {
        type: String,
        validate: {
            validator: function (value) {
                if (!value && !this.description) {
                    return false;
                }
            },
            message: 'You must fill in the description field or the image field'
        },
    }
});

const Post = mongoose.model('Post', PostSchema);
module.exports = Post;