// controllers/commentController.js
const express = require('express');
const router = express.Router();
const Comment = require("../models/comments");

// Define your comment-related routes and controller actions here
// Display comments for a specific blog post
router.get('/post/:postId', async (req, res) => {
    try {
        const postId = req.params.postId;
        const comments = await Comment.findAll ({
            where: { postId },
        });
        // render a view to display comments
        res.render('comments', {comments});
    } catch (error) {
        console.error(error);
        // Handle error and respond appropriately
    }
});
// Add a new comment to a blog post
router.post('/post/:postId', async (req, res) => {
    try {
        const postId = req.params.postId;
        const { text } = req.body;

        // Create a new comment in the database
        const newComment = await Comment.create({
            text,
            postId,
            userId: req.user.id,
        });
        // Redirect back to the blog post or respond as needed
    } catch (error) {
        console.error(error);
        // Handle error and respond appropriately
    }
});

// Delete a comment
router.delete('/:commentId', async (req, res) => {
    try {
        const commentId = req.params.commentId;

        // Find the comment by ID and ensure the user has permission to delete it 
        const comment = await Comment.findByPk(commentId);
        if(!comment) {
            // Comment not found
            // Handle and respond as needed
            return;
        }

        // Check if the user is the owner of the comment or has appropriate permission
        if (comment.userId !== req.user.id) {
            // User is not authorized to delete this comment
            // Handle and respond as needed
            return;
        }

        // Delete the comment from the database
        await comment.destroy();
        // Respond with success message or redirect as needed
    } catch (error) {
        console.error(error);
        // Handle error and respond appropriately
    }
});
module.exports = router;