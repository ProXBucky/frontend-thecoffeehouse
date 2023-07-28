import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter,
    Redirect
} from "react-router-dom";
import ManageAdmin from "../containers/System/ManageAdmin/ManageAdmin";
import ManageProduct from "../containers/System/ManageProduct/ManageProduct";
import ManageStore from "../containers/System/ManageStore/ManageStore";
import { useSelector } from "react-redux"
import { isLoginedSelector } from "../redux/selector"

export default function SystemRoute() {
    const isLogin = useSelector(isLoginedSelector)
    return (
        <div>
            {
                isLogin ?
                    <Switch>
                        <Route path="/system/manage-admin" component={withRouter(ManageAdmin)} />
                        <Route path="/system/manage-product" component={withRouter(ManageProduct)} />
                        <Route path="/system/manage-store" component={withRouter(ManageStore)} />
                    </Switch >
                    :
                    <Redirect to="/404-error"></Redirect>
            }
        </div>
    )
}