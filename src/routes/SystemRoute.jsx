import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter,
    Redirect
} from "react-router-dom";
import { useSelector } from "react-redux"
import { isLoginedSelector } from "../redux/selector"


import ManageAdmin from "../containers/System/ManageAdmin/ManageAdmin";
import ManageProduct from "../containers/System/ManageProduct/ManageProduct";
import ManageStore from "../containers/System/ManageStore/ManageStore";
import ManageOrder from "../containers/System/ManageOrder/ManageOrder";
import HistoryOrder from "../containers/System/ManageOrder/HistoryOrder";
import { Suspense, lazy } from "react";


// const ManageAdmin = lazy(() => import("../containers/System/ManageAdmin/ManageAdmin"));
// const ManageProduct = lazy(() => import("../containers/System/ManageProduct/ManageProduct"));
// const ManageStore = lazy(() => import("../containers/System/ManageStore/ManageStore"));
// const ManageOrder = lazy(() => import("../containers/System/ManageOrder/ManageOrder"));
// const HistoryOrder = lazy(() => import("../containers/System/ManageOrder/HistoryOrder"));
import Loading from "../components/Loading";

export default function SystemRoute() {
    const isLogin = useSelector(isLoginedSelector)
    return (
        <div>
            {/* <Suspense fallback={<Loading />}> */}
            {
                isLogin ?
                    <Switch>
                        <Route path="/system/manage-admin" component={withRouter(ManageAdmin)} />
                        <Route path="/system/manage-product" component={withRouter(ManageProduct)} />
                        <Route path="/system/manage-store" component={withRouter(ManageStore)} />
                        <Route path="/system/manage-order" component={withRouter(ManageOrder)} />
                        <Route path="/system/history-order" component={withRouter(HistoryOrder)} />
                    </Switch >
                    :
                    <Redirect to="/404-error"></Redirect>
            }
            {/* </Suspense> */}
        </div>
    )
}