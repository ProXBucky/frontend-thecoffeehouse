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
import Register from './containers/Authentication/Register';
import System from './containers/System/System';
import { useSelector } from "react-redux"
import { isLoginedSelector } from './redux/selector';
import ErrorPage from './containers/404Page';



function App() {
  const isLogin = useSelector(isLoginedSelector)
  return (
    <Fragment>
      <div className='app-container w-full h-screen'>
        <Router>
          {
            !isLogin && <Header />
          }
          <Switch>
            <Route exact path="/" component={withRouter(HomePage)} />
            <Route path="/login" component={withRouter(Login)} />
            <Route path="/register" component={withRouter(Register)} />
            <Route path="/404-error" component={withRouter(ErrorPage)} />
            <Route path="/system" component={isLogin ? withRouter(System) : withRouter(ErrorPage)} />
            {/* <Route path="/system" component={withRouter(System)} /> */}

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
