import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { MainLayout } from "../lib/components/main-layout";
import { PrintUsers } from "../views";

export default () => {
    return (
        <Router>
            <MainLayout>
                <Switch>
                    <Route exac path="/test">
                        <h1>TESTING!!!</h1>
                    </Route>
                    <Route path="/">
                        <PrintUsers />
                    </Route>
                </Switch>
            </MainLayout>
        </Router>
    );
};
