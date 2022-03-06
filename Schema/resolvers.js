const crypto = require('crypto');
const { link } = require('fs');
const Link = require('../Models/Link')
const resolvers = {
  Query:{
    async getOneLink(parent, args){
        console.log(args)
        return{ url:'test get url', slug:'test get slug' } 
    }
  },

  Mutation:{
      async createLink(parent, args){
          let linkCreated
          if(args.url && args.slug){
              try{
                linkCreated = await Link.create(args)
                return linkCreated
              }catch(err){
                 createLink
              }
          }else if(args.url){
            try{
              const randomSlug = crypto.randomBytes(4).toString('hex').slice(4);
              linkCreated = await Link.create({url:args.url, slug: randomSlug})
              return linkCreated
              }catch(err){
                this.createLink(parent, args)
              }
          }else{
            console.log('Incomplete request')
            return {url:'error', slug:'slug must be unique'}
          }
      }
  }
}

module.exports = {resolvers}