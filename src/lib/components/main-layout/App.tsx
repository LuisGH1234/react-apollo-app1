import React from "react";
import { Link } from "react-router-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import "./App.scss";

const client = new ApolloClient({
    uri: "http://localhost:3001/graphql"
});

const App: React.FC = props => {
    return (
        <ApolloProvider client={client}>
            <div className="App container">
                <header>
                    <Link to="/">Song</Link>
                    <br />
                    <Link to="/test">test</Link>
                </header>
                {props.children}
            </div>
        </ApolloProvider>
    );
};

export default App;
