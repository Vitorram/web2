import * as postModel from '../models/postModel.js';

export async function getPosts(req, res) {
  const posts = await postModel.getAllPosts();
  res.json(posts);
}

export async function createPost(req, res) {
  const post = await postModel.createPost(req.body);
  res.status(201).json(post);
}

export async function updatePost(req, res) {
  const post = await postModel.updatePost(req.params.id, req.body);
  res.json(post);
}

export async function deletePost(req, res) {
  await postModel.deletePost(req.params.id);
  res.status(204).send();
}