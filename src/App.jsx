import { Fragment } from 'react';
import './App.css'
import {
  BrowserRouter as Router, Switch, Route, withRouter
} from "react-router-dom";
import Loading from './components/Loading';
import { lazy, Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from "react-redux"
import { isLoginedSelector, userInfoSelector } from './redux/selector';

import Login from './containers/Authentication/Login'
import HomePage from './containers/HomePage/HomePage';
import Header from './containers/HomePage/Header/Header';
import Register from './containers/Authentication/Register';
import ErrorPage from './containers/404Page';
import Collection from "./containers/Collection/Collection"
import StoreList from './containers/StoreList/StoreList';
import ShoppingCart from './containers/DetailPage/ShoppingCart/ShoppingCart';
import CloudFee from './containers/CloudFee/CloudFee';


// import System from './containers/System/System';
import SystemHeader from "./containers/System/SystemHeader"
import DetailProduct from './containers/DetailPage/DetailProduct';
import DetailStore from './containers/DetailPage/DetailStore';
import Recruit from './containers/Recruit/Recruit';

// const Login = lazy(() => import('./containers/Authentication/Login'));
// const HomePage = lazy(() => import('./containers/HomePage/HomePage'));
// const Header = lazy(() => import('./containers/HomePage/Header/Header'));
// const Register = lazy(() => import('./containers/Authentication/Register'));
// const ErrorPage = lazy(() => import('./containers/404Page'));
// const Collection = lazy(() => import('./containers/Collection/Collection'));
// const StoreList = lazy(() => import('./containers/StoreList/StoreList'));
// const ShoppingCart = lazy(() => import('./containers/DetailPage/ShoppingCart/ShoppingCart'));


// const SystemHeader = lazy(() => import('./containers/System/SystemHeader'));
const System = lazy(() => import('./containers/System/System'));
// const DetailProduct = lazy(() => import('./containers/DetailPage/DetailProduct'));
// const DetailStore = lazy(() => import('./containers/DetailPage/DetailStore'));


function App() {
  const isLogin = useSelector(isLoginedSelector)
  const userInfo = useSelector(userInfoSelector)
  return (
    <Fragment>
      <div className='app-container w-full h-screen'>
        <Router>
          <div className='mb-[35px]'>
            {!isLogin ? <Header /> : <SystemHeader userInfo={userInfo} />}
          </div>
          <Switch>
            <Route exact path="/" component={withRouter(HomePage)} />
            <Route path="/register" component={withRouter(Register)} />
            <Route path="/404-error" component={withRouter(ErrorPage)} />
            <Route path="/collections" component={withRouter(Collection)} />
            <Route path="/stores" component={withRouter(StoreList)} />
            <Route path="/shopping-cart" component={withRouter(ShoppingCart)} />
            <Route path="/login" component={withRouter(Login)} />
            <Route path="/cloudfee" component={withRouter(CloudFee)} />
            <Route path="/recruit" component={withRouter(Recruit)} />
            <Route path="/products/:category/:id" component={withRouter(DetailProduct)} />
            <Route path="/detail-store/:id" component={withRouter(DetailStore)} />
            <Suspense fallback={<Loading />}>
              <Route path="/system" component={isLogin ? withRouter(System) : withRouter(ErrorPage)} />
            </Suspense>
          </Switch>
        </Router>
      </div>

      <ToastContainer
        position="top-right"
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
