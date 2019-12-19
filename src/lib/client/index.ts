import ApolloClient from "apollo-boost";

const client = new ApolloClient({
    uri: "http://localhost:3001/graphql"
    // onError: err => {
    //     <Redirect to="/error" />;
    //     return err;
    // }
});

export default client;
