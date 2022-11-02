module.exports = (err, _req, res, _next) => {
  const [code, message] = err.message.split('|');
  if (code && message) {
    return res.status(Number(code)).json({ message });
  }
  res.status(500).json({ message: err.message });
}