db.users.update(

  {
    'purchased.plan.customerId':null
  },

  {
    $set: {
      'purchased.plan':{
        planId: 'basic',
        customerId: 'habitrpg',
        dateCreated: new Date,
        dateUpdated: new Date,
        gemsBought: 0
      }
    }
  },

  {multi:true}

)
