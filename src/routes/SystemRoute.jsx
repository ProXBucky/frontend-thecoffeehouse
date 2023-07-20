import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";
import ManageAdmin from "../containers/System/ManageAdmin/ManageAdmin";
import ManageProduct from "../containers/System/ManageProduct/ManageProduct";
import ManageStore from "../containers/System/ManageStore/ManageStore";

export default function SystemRoute() {
    return (
        <Switch>
            <Route path="/system/manage-admin" component={withRouter(ManageAdmin)} />
            <Route path="/system/manage-product" component={withRouter(ManageProduct)} />
            <Route path="/system/manage-store" component={withRouter(ManageStore)} />
        </Switch>
    )
}