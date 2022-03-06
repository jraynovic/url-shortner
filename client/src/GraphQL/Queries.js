import {gql} from '@apollo/client'

export const CREATE_LINK = gql`
  mutation createLink($url: String! $slug: String){
      createLink(url:$url slug:$slug){
          url
          slug
      }
  }
`