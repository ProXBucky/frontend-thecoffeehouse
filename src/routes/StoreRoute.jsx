import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter,
    Redirect
} from "react-router-dom";
import HNStore from "../containers/StoreList/HNStore";
import HCMStore from "../containers/StoreList/HCMStore";
import DNStore from "../containers/StoreList/DNStore";


export default function StoreRoute() {
    return (
        <div>
            {
                <Switch>
                    <Route path="/stores/HCM" component={withRouter(HCMStore)} />
                    <Route path="/stores/HN" component={withRouter(HNStore)} />
                    <Route path="/stores/DN" component={withRouter(DNStore)} />
                </Switch >
            }
        </div>
    )
}