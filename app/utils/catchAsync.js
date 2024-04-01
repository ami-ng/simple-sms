function catchAsync(catchError){
  return (req, res, next) => {
    catchError(req, res, next).catch((err) => {
      console.error(err);
      res.status(500).json({ message: "Internal server error" });
    });
  };
}

module.exports = { catchAsync };