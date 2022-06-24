import logo from './logo.svg';
import './App.css';
import Home from './container/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import { Route, Switch } from 'react-router-dom';
import About from './container/About';
import Contact from './container/Contact';
import Departments from './container/Departments';
import Doctors from './container/Doctors';
import Appointment from './container/Appoinment/Appointment';
import Login from './container/Login';
import PublicRoute from './container/Route/PublicRoute';
import PrivateRoute from './container/Route/PrivateRoute';
import Listappoinment from './container/Appoinment/Listappoinment';

function App() {
  return (
    <>
      <Header/>
      <Switch>
        <PublicRoute exact path={"/"} component={Home} />
        <PublicRoute exact path={"/about"} component={About}/>
        <PublicRoute exact path={"/contact"} component={Contact}/>
        <PublicRoute exact path={"/departments"} component={Departments}/>
        <PublicRoute exact path={"/doctors"} component={Doctors}/>
        <PrivateRoute exact path={"/appointment"} component={Appointment}/>
        <PublicRoute exact path={"/Listappointment"} component={Listappoinment}/>
        <PublicRoute restricted={true} exact path={"/Login"} component={Login}/>
      </Switch>
      <Footer/>
    </>
  );
}

export default App;
