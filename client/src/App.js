import MainComponent from "./components/MainComponent";
import {ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from} from '@apollo/client'
import { onError } from '@apollo/client/link/error'

const errorLink = onError(({graphqlErrors, networkError})=>{
  if(graphqlErrors){
    graphqlErrors.map(({message, location})=> console.log(alert(`Graphql error ${message} \n Location: ${location}`)))
  }
})

const link = from([
  errorLink,
  new HttpLink({uri:'http://localhost:5001/graphql'})
])

const client = new ApolloClient({
  cache: new InMemoryCache,
  link 
})

function App() {
  return (
    <ApolloProvider client={client}>
      <MainComponent/>
    </ApolloProvider>
  );
}

export default App;
