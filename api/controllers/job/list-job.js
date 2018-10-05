module.exports = {


  friendlyName: 'Json job list',


  description: 'Job list to JSON.',


  exits: {

  },


  fn: async function (inputs, exits){
    var jobs = await Job.find();
    return exits.success({jobs:jobs});
  }


};
