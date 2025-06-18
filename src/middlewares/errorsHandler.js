export const errorHandler = (err, req, res, next) => {
  console.error('Erro capturado:', err);

    //erro no json bala HAHAHAHA
  if (err?.type === 'entity.parse.failed' && err.message.includes('JSON')) {
    return res.status(400).json({
      error: 'JSON inválido. Por favor, verifique a formatação dos dados enviados.'
    });
  }

  
  if (err.status && err.message) {
    return res.status(err.status).json({ error: err.message });
  }
  return res.status(500).json({
    error: 'Erro inesperado no servidor. Tente novamente mais tarde.'
  });
};
