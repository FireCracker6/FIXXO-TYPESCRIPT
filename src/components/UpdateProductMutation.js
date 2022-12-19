import gql from "graphql-tag";
import { useMutation }   from '@apollo/client';
import { Query } from "react-query";

const GET_PRODUCTS_QUERY = gql`{ products {_id, title, category, imageURL, description, price, tag, rating}}`
const UPDATE_PRODUCT_QUERY = gql
`
   mutation UpdateProduct($title: String!, $category: String!, $vendorId: ID!, $imageURL: String!, $description: String, $tag: String!, $price: String, $rating: String) {
   addProduct(title: $title, category: $category, vendorId: $vendorId, imageURL: $imageURL, description: $description, tag: $tag, price: $price, rating: $rating) {
     title
   }
 }

 `

   export const UpdateProductMutation = () => (
    <Query query={GET_PRODUCTS_QUERY}>
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;
  
        return data.products.map(({ _id, title }) => {
          let input;
  
          return (
            <useMutation mutation={UPDATE_PRODUCT_QUERY} key={_id}>
              {updateTodo => (
                <div>
                  <p>{title}</p>
                  <form
                    onSubmit={e => {
                      e.preventDefault();
                      updateTodo({ variables: { _id, title: input.value } });
  
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
            </useMutation>
          );
        });
      }}
    </Query>
  );
  export default UpdateProductMutation