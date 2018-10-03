module.exports = {


  friendlyName: 'Add job',


  description: 'Add job.',

  inputs:{
    title:{type:'string'},
    description:{type:'string'},
    language:{type:'string'},
    location:{type:'string'},
    published:{type:'number'},
  },

  exits: {
  },


  fn: async function (inputs, exits){
    await Job.create({
      title: inputs.title,
      description: inputs.description,
      language: inputs.language,
      location: inputs.location,
      published: inputs.published
    });
    return exits.success();
  }


};
