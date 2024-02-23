import { Fragment, useEffect } from 'react';
import './App.css'
import {
  BrowserRouter as Router, Switch, Route, withRouter, Redirect
} from "react-router-dom";
import Loading from './components/Loading';
import { lazy, Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector, useDispatch } from 'react-redux';
import { userInfoSelector } from './redux/selector';
import Login from './containers/Authentication/Login'
import HomePage from './containers/HomePage/HomePage';
import Header from './containers/HomePage/Header/Header';
import Register from './containers/Authentication/Register';
import ErrorPage from './containers/404Page';
import Collection from "./containers/Collection/Collection"
import StoreList from './containers/StoreList/StoreList';
import ShoppingCart from './containers/DetailPage/ShoppingCart/ShoppingCart';
import CloudFee from './containers/CloudFee/CloudFee';
import SystemHeader from "./containers/System/SystemHeader"
import DetailProduct from './containers/DetailPage/DetailProduct';
import DetailStore from './containers/DetailPage/DetailStore';
import Recruit from './containers/Recruit/Recruit';
const System = lazy(() => import('./containers/System/System'));
// import Cookies from 'js-cookie';
// import { setToken } from "./redux/Slice/CookieSlice"

function App() {
  // const dispatch = useDispatch();
  // const cookieValue = Cookies.get('accessToken');

  // useEffect(() => {
  //   Cookies.set('accessToken', '');
  // }, [])


  // const isLogin = useSelector(isLoginedSelector)
  // const userInfo = useSelector(userInfoSelector)
  const userInfo = useSelector(userInfoSelector)
  return (
    <Fragment>
      <div className='max-w-full h-full w-full'>
        <Router>
          <div className='mb-[35px]'>
            {!userInfo ? <Header /> : <SystemHeader userInfo={userInfo} />}
          </div>
          <Switch>
            <Route exact path="/" component={withRouter(HomePage)} />
            <Route path="/register" component={withRouter(Register)} />
            <Route path="/collections" component={withRouter(Collection)} />
            <Route path="/stores" component={withRouter(StoreList)} />
            <Route path="/shopping-cart" component={withRouter(ShoppingCart)} />
            <Route path="/login" component={withRouter(Login)} />
            <Route path="/cloudfee" component={withRouter(CloudFee)} />
            <Route path="/recruit" component={withRouter(Recruit)} />
            <Route path="/products/:category/:id" component={withRouter(DetailProduct)} />
            <Route path="/detail-store/:id" component={withRouter(DetailStore)} />
            <Route path="/404-error" component={withRouter(ErrorPage)} />
            <Suspense fallback={<Loading />}>
              <Route path="/system" component={userInfo ? withRouter(System) : withRouter(ErrorPage)} />
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
