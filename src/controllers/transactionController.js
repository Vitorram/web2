import * as model from '../model/transactionModel.js';

export async function create(req, res) {
  try {
    const result = await model.create(req.body);
    res.status(201).json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

export async function update(req, res) {
  try {
    const result = await model.update(Number(req.params.id), req.body);
    res.json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

export async function remove(req, res) {
  try {
    const result = await model.remove(Number(req.params.id));
    res.json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

export async function getList(req, res) {
  const result = await model.getList();
  res.json(result);
}

export async function getById(req, res) {
  const result = await model.getById(Number(req.params.id));
  res.json(result);
}
