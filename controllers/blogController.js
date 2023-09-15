// controllers/blogController.js
const express = require('express');
const router = express.Router();
const BlogPost = require('../models/blog');

// Define your blog-related routes and controller actions here
// Display a list of all blog posts
router.get('/', async (req,res) => {
    try { 
        const blogPosts = await BlogPost.findAll();

        // Render a view to display a list of blog posts
        res.render('blogPosts', { blogPosts});
    } catch (error) {
        console.error(error);
        // Handle error and respond appropriately
    }
});

// Display a specific blog post by ID
router.get('/:postId', async (req, res) => {
    try {
        const postId = req.params.postId;
        const blogPost = await BlogPost.findByPk(postId);

        // Render a view to display the specific blog post
        res.render('blogPosts/show', { blogPost });
    } catch (error) {
        console.error(error);
        // Handle error and respond appropriately
    }
});

// Create a new blog post
router.post('/create', async (req,res) => {
    try {
        const { title, content } = req.body;

        // Create a new blog post in the database
        const newBlogPost = await BlogPost.create({
            title,
            content,
            userId: req.user.id,
        });

        // redirect to the newly created blog post or respond as needed
    } catch (error) {
        console.error(error);
    }
});

// Update a specific blog post
router.put('/:postId', async (req, res) => {
    try {
        const postId = req.params.postId;
        const { title, content } = req.body;

        // Find the blog post by ID and ensure the user has permission to update
        const blogPost = await BlogPost.findByPk(postId);
        if(!blogPost) {
            // Blog post not found
            // Handle and respond as needed
            return;
        }

        // Check if the user is the owner of the blog post
        if (blogPost.userId !== req.user.id) {
            // User is not the authorized to update this blog post
            // Handle and respond as needed
            return;
        }

        // Update the blog post in the database
        await blogPost.update({
            title,
            content,
        });
        
        // Redirect to the updated blog post or respond as needed
    } catch(error) {
        console.error(error)
    }
});

// Delete a specific blog post
router.delete('/:postId', async (req, res) => {
    try {
        const postId = req.params.postId;

        // Find the blog post by ID and ensure the user has the permission to delete
        const blogPost = await BlogPost.findByPk(postId);
        if (!blogPost) {
            // Blog post not found
            // handle and respond as needed
            return;
        }
        
        // Check if user is the owner of the blog post
        if (blogPost.userId !== req.user.id) {
            // User is not authorized to delete this blog post
            // Handle and respond
            return;
        }

        // Delete the blog post from the database
        await blogPost.destroy();

    } catch (error) {
        console.error(error);
    }
});

module.exports = router;