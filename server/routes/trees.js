const express = require('express');
const router = express.Router();

const tree_controller = require('../controllers/treeController');

// //view all posts
// router.get('/', post_controller.posts_get);

// create new post
router.get('/', tree_controller.tree_get)
router.post('/', tree_controller.tree_save_post);
router.put('/', tree_controller.tree_update_put)
router.delete('/', tree_controller.tree_delete)


// //view comments
// router.get('/:postid/comments', post_controller.comments_get);

//create comment
// router.post('/:postid/comments', post_controller.comment_create_post);


// //view comment details
// router.get('/:postid/comments/:commentid', post_controller.comment_get);

module.exports = router;