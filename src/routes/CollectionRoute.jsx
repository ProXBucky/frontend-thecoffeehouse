import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter,
    Redirect
} from "react-router-dom";
import AllCollection from "../containers/Collection/AllCollection";
import CoffeeCollection from "../containers/Collection/CoffeeCollection";
import TeaCollection from "../containers/Collection/TeaCollection";
import FrostyCollection from "../containers/Collection/FrostyCollection";
import CakeSnackCollection from "../containers/Collection/CakeSnackCollection";


export default function CollectionRoute() {
    return (
        <div>
            {
                <Switch>
                    <Route path="/collections/all" component={withRouter(AllCollection)} />
                    <Route path="/collections/coffee" component={withRouter(CoffeeCollection)} />
                    <Route path="/collections/tea" component={withRouter(TeaCollection)} />
                    <Route path="/collections/frosty" component={withRouter(FrostyCollection)} />
                    <Route path="/collections/cakesnack" component={withRouter(CakeSnackCollection)} />
                </Switch >
            }
        </div>
    )
}