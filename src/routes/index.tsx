import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { MainLayout } from "../lib/components/main-layout";
import { PrintUsers } from "../views";

export default () => {
    return (
        <Router>
            <MainLayout>
                <Switch>
                    <Redirect exact from="/" to="/home" />
                    <Route path="/home">
                        <PrintUsers />
                    </Route>

                    <Route path="/test">
                        <h1>TESTING!!!</h1>
                    </Route>
                    <Route path="/error">
                        <div>ERROR de servidor !!!!¿¿¿¿</div>
                    </Route>
                    <Route>
                        <h1>PAGE NOT FOUND</h1>
                    </Route>
                </Switch>
            </MainLayout>
        </Router>
    );
};
