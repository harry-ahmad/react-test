import { Route, Switch, Redirect } from "react-router-dom";
import Repositories from './components/Repositories/Repositories';
import Developers from './components/Developers/Developers';

function Routes() {  

  return (
   
    <main className="mt-4">
        <Switch>
            <Route path="/repositories" component={Repositories} exact />
            <Route path="/developers" component={Developers} exact />
            <Redirect from="/" to="/repositories" exact />
        </Switch>
    </main>
  );
}

export default Routes;
