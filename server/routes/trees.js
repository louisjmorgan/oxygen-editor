const express = require('express');
const router = express.Router();

const tree_controller = require('../controllers/treeController');

// //view all posts
// router.get('/', post_controller.posts_get);

// create new post
router.post('/', tree_controller.tree_save_post);
router.post('/update', tree_controller.tree_update_post)

// //view comments
// router.get('/:postid/comments', post_controller.comments_get);

//create comment
// router.post('/:postid/comments', post_controller.comment_create_post);


// //view comment details
// router.get('/:postid/comments/:commentid', post_controller.comment_get);

module.exports = router;