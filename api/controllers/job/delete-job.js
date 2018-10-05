module.exports = {


  friendlyName: 'Delete job',


  description: 'Delete job.',

  inputs:{
    id:{type:'number',required:true},
  },

  exits: {
  },


  fn: async function (inputs, exits){
    await Job.destroy({id:inputs.id});
    return exits.success();
  }


};
