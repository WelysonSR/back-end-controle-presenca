module.exports = (err, _req, res, _next) => {
  const [code, message] = err.message.split('|');
  if (code) {
    return res.status(Number(code)).json({ message });
  }
  res.status(500).json({ message: `Algo deu errado! Mensagem: ${err.message}` });
}