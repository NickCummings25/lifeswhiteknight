import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";

function App() {
    
    return (
        <DefaultLayout>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path={["/dashboard", "/teams/:teamName"]} exact component={Dashboard} />
                <Route path="/teams" exact component={Teams} />
                <Route path="/allDeployments" exact component={AllDeployments} />
            </Switch>
        </DefaultLayout>
    );
}

export default App;