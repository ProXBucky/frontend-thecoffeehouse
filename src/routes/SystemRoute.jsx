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
import DashBoard from "../containers/System/Dashboard";
import StartScreen from "../containers/System/StartScreen";


export default function SystemRoute({ authorNavbar }) {
    const isLogin = useSelector(isLoginedSelector)
    return (
        <div className="bg-[#f5f2f0]">
            {
                isLogin ?
                    <Switch>
                        <Route path="/system" exact>
                            <StartScreen authorNavbar={authorNavbar} />
                        </Route>
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
                    <Redirect to="/404-error"></Redirect>
            }
        </div>
    )
}