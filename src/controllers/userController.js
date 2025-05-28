import * as userModel from '../models/userModel.js';

export async function getUsers(req, res) {
  const users = await userModel.getAllUsers();
  res.json(users);
}

export async function createUser(req, res) {
  const user = await userModel.createUser(req.body);
  res.status(201).json(user);
}

export async function updateUser(req, res) {
  const user = await userModel.updateUser(req.params.id, req.body);
  res.json(user);
}

export async function deleteUser(req, res) {
  await userModel.deleteUser(req.params.id);
  res.status(204).send();
}