const resolvers = {
  Query:{
    async getOneLink(parent, args){
        console.log(args)
        return{ url:'test get url', slug:'test get slug' } 
    }
  },

  Mutation:{
      async createLink(parent, args){
          console.log(args)
          return {url:'test url', slug:'test slug'}
      }
  }
}

module.exports = {resolvers}