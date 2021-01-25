import React from "react";
import {BrowserRouter, Switch,Route} from "react-router-dom";

import Main from "./pages/Main";
import Testa from "./pages/Testa";
import Teste from "./pages/Teste";

function Routes(){
    return (
        <BrowserRouter>
            <Switch >
                <Route path="/" exact component={Main}/>
                <Route path="/testa" component={Testa}/>
                <Route path="/teste" component={Teste}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;