module.exports = {


  friendlyName: 'View job list',


  description: 'Display "Job List" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/job/job-list'
    }

  },


  fn: async function (inputs, exits){
    var jobs = await Job.find();
    return exits.success({jobs:jobs});
  }


};
