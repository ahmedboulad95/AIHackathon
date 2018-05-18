var needle = require('needle');

exports.getStoreBarInfo(store) {
  needle.get('http://ec2-13-59-161-205.us-east-2.compute.amazonaws.com:3000/api/topFiveCities?brand=%22Home%20Depot%22', function(error, response) {
    if (!error) {
      console.log(response);
      return response.body;
    }
  });
};
