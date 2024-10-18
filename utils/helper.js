const catchAsync = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};

const sendResponse = (res, data) => {
  res.status(200).json({
    data,
  });
};

module.exports = { catchAsync, sendResponse };
