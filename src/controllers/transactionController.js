import * as model from '../model/transactionModel.js';

export async function create(req, res) {
  try {
    const result = await model.create(req.body);
    return res.status(201).json(result);
  } catch (err) {
    // Erro de validação com Zod
    if (err.format) {
      return res.status(400).json({ errors: err.format() });
    }

    // Outros erros
    return res.status(500).json({ error: 'Erro ao criar transação.' });
  }
}

export async function update(req, res) {
  try {
    const result = await model.update(Number(req.params.id), req.body);
    return res.json(result);
  } catch (err) {
    if (err.format) {
      return res.status(400).json({ errors: err.format() });
    }
    return res.status(400).json({ error: err.message });
  }
}

export async function remove(req, res) {
  try {
    const result = await model.remove(Number(req.params.id));
    return res.json(result);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
}

export async function getList(req, res) {
  try {
    const result = await model.getList();
    return res.json(result);
  } catch (err) {
    return res.status(500).json({ error: 'Erro ao buscar transações.' });
  }
}

export async function getById(req, res) {
  try {
    const result = await model.getById(Number(req.params.id));
    return res.json(result);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
}
