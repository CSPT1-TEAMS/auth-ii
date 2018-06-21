const mongoose = require('mongoose');

module.exports = {
  connectTo: function(database = 'sandbox', host = 'localhost') {
    return mongoose.connect(`mongodb://${host}/${database}`);
  },
};

//?? db.js4-5: using `database = 'sandbox'` do we change this to the name of our database i.e. `authii`?