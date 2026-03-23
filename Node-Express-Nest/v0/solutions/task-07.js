// Express.js error handler middleware for ToDo API
// TODO: 

function ErrorHandler(err, req, res, next) {
    res.status(err.status || 500).json({ error: err.message });

}
module.exports = ErrorHandler; 