var mongoose = require('mongoose'),
    DB_URL = 'mongodb://mongo:27017/koumili';

/**
  * 连接成功
  */
mongoose.connection.on('connected', function () {
    console.log('Mongoose connection open to ' + DB_URL);
});

/**
 * 连接异常
 */
mongoose.connection.on('error', function (err) {
    console.log('Mongoose connection error: ' + err);
});

/**
 * 连接断开
 */
mongoose.connection.on('disconnected', function () {
    console.log('Mongoose connection disconnected');
});

/**
 * 连接
 */
mongoose.connect(DB_URL);

module.exports = mongoose;