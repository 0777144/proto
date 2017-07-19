import {Router} from 'express';
import * as PostController from './controllers/post';

const router = new Router();

// Get all Posts
router.route('/posts').get(PostController.getPosts);

// Get one post by cuid
router.route('/posts/:slug').get(PostController.getPost);

// Add a new Post
router.route('/posts').post(PostController.addPost);

// Delete a post by slug
router.route('/posts/:slug').delete(PostController.deletePost);

export default router;
