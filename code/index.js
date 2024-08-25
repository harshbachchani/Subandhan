require('dotenv').config();

require('./system/space')().listen(
  process.env.PORT, function () {
    console.info('Server Started....'); 
  }
);