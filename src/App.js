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
import Appointment from './container/Appointment';

function App() {
  return (
    <>
      <Header/>
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route exact path={"/about"} component={About}/>
        <Route exact path={"/contact"} component={Contact}/>
        <Route exact path={"/departments"} component={Departments}/>
        <Route exact path={"/doctors"} component={Doctors}/>
        <Route exact path={"/Appointment"} component={Appointment}/>
      </Switch>
      <Home/>
      <Footer/>
    </>
  );
}

export default App;
