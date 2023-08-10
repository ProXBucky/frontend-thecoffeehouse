import { Fragment } from 'react';
import './App.css'
import {
  BrowserRouter as Router, Switch, Route, withRouter
} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './containers/Authentication/Login'
import HomePage from './containers/HomePage/HomePage';
import Header from './containers/HomePage/Header/Header';
import SystemHeader from "./containers/System/SystemHeader"
import Register from './containers/Authentication/Register';
import System from './containers/System/System';
import { useSelector } from "react-redux"
import { isLoginedSelector } from './redux/selector';
import ErrorPage from './containers/404Page';
import Collection from "./containers/Collection/Collection"
import DetailProduct from './containers/DetailPage/DetailProduct';
import StoreList from './containers/StoreList/StoreList';
import DetailStore from './containers/DetailPage/DetailStore';
import ShoppingCart from './containers/DetailPage/ShoppingCart';



function App() {
  const isLogin = useSelector(isLoginedSelector)
  return (
    <Fragment>
      <div className='app-container w-full h-screen'>
        <Router>
          {
            !isLogin ? <Header /> : <SystemHeader />
          }
          <Switch>
            <Route exact path="/" component={withRouter(HomePage)} />
            <Route path="/login" component={withRouter(Login)} />
            <Route path="/register" component={withRouter(Register)} />
            <Route path="/404-error" component={withRouter(ErrorPage)} />
            <Route path="/system" component={isLogin ? withRouter(System) : withRouter(ErrorPage)} />
            <Route path="/collections" component={withRouter(Collection)} />
            <Route path="/products/:category/:id" component={withRouter(DetailProduct)} />
            <Route path="/stores" component={withRouter(StoreList)} />
            <Route path="/detail-store/:id" component={withRouter(DetailStore)} />
            <Route path="/shopping-cart" component={withRouter(ShoppingCart)} />


          </Switch>
        </Router>
      </div>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </Fragment>
  )
}

export default App
