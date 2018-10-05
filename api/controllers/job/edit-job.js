module.exports = {


  friendlyName: 'Edit job',


  description: 'Edit job.',

  inputs:{
    id:{type:'number'},
    title:{type:'string'},
    description:{type:'string'},
    language:{type:'string'},
    location:{type:'string',required:false},
  },

  exits: {
  },


  fn: async function (inputs, exits){
    await Job.update({id:inputs.id},{
      title: inputs.title,
      description: inputs.description,
      language: inputs.language,
      location: inputs.location
    });
    return exits.success();
  }


};
