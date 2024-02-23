import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter,
    Redirect
} from "react-router-dom";
import { useSelector } from "react-redux"
// import { userInfoSelector } from "../redux/selector"
// import { useEffect } from "react";


import ManageAdmin from "../containers/System/ManageAdmin/ManageAdmin";
import ManageProduct from "../containers/System/ManageProduct/ManageProduct";
import ManageStore from "../containers/System/ManageStore/ManageStore";
import ManageOrder from "../containers/System/ManageOrder/ManageOrder";
import HistoryOrder from "../containers/System/ManageOrder/HistoryOrder";
import DashBoard from "../containers/System/Dashboard";
// import StartScreen from "../containers/System/StartScreen";
import { cookieSelector } from "../redux/selector"
import ErrorPage from "../containers/404Page";



export default function SystemRoute() {
    let cookieValue = useSelector(cookieSelector)

    return (
        <div className="bg-[#f5f2f0]">
            {
                cookieValue ?
                    <Switch>
                        <Route path="/system/dashboard">
                            <DashBoard />
                        </Route>
                        <Route path="/system/manage-admin">
                            <ManageAdmin />
                        </Route>
                        <Route path="/system/manage-product">
                            <ManageProduct />
                        </Route>
                        <Route path="/system/manage-store">
                            <ManageStore />
                        </Route>
                        <Route path="/system/manage-order">
                            <ManageOrder />
                        </Route>
                        <Route path="/system/history-order">
                            <HistoryOrder />
                        </Route>
                    </Switch >
                    :
                    <Switch>
                        <Route path="*">
                            <ErrorPage />
                        </Route>
                    </Switch >


            }
        </div>
    )
}