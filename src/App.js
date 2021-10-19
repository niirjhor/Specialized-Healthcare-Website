
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Services from './components/Services/Services';
import Error from './components/Error/Error';
import Appoinment from './components/Appoinment/Appoinment/Appoinment';
import AuthProvider from './components/context/AuthProvider';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';




function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/services'>
              <Services></Services>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <PrivateRoute path='/appointment/:appointmentId'>
              <Appoinment></Appoinment>
            </PrivateRoute>
            <Route path='*'>
              <Error> </Error>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
