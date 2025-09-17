const notFoundHandler = (req, res) => {
  res.status(404).json({ error: "Page not found" });
};

const errorHandler = (err, req, res, next) => {
  console.log(err);
  res
    .status(err.status || 500)
    .json({ error: err.message || "An unhandled error occurs" });
};

module.exports = {
  notFoundHandler,
  errorHandler,
};
