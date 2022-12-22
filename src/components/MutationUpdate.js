 import React from 'react'
import gql from "graphql-tag";
import ProductCard from './cards/ProductCard';





   const GET_PRODUCT_QUERY = gql`{ products {_id, title, category, imageURL, description, price, tag, rating}}`
const UPDATE_PRODUCT = gql`
mutation UpdateProduct($id: String!, $title: String!, imageURL: String!, category: String!, description: String, price: String!, rating: String!, tag: String) {
  udpdateProduct(id: $id, title: $title), imageURL: $imageURL, category: $category, description: $description, price: $price, rating: $rating, tag: $tag {
    id
    title
    imageURL
    category
    description
    price
    rating 
    tag
  }
}
`; 

  let input; 

/* 
export const sdasdasd = () => {
<Query query={GET_TODOS}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :</p>;

      const populateProducts = () => {
      return data.todos.map(({ id, type }) => {
        let input;
      )}
        return (
            <>
          <Mutation mutation={UPDATE_TODO} key={id}>
            {updateTodo => (
              <div>
                <p>{type}</p>
                <form
                  onSubmit={e => {
                    e.preventDefault();
                    updateTodo({ variables: { id, type: input.value } });

                    input.value = "";
                  }}
                >
                  <input
                    ref={node => {
                      input = node;
                    }}
                  />
                  <button type="submit">Update Todo</button>
                </form>
              </div>
            )}
          </Mutation>
          </>
        );
      });
    }}
  </Query>
}
 */