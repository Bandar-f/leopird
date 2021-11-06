import logo from './logo.svg';
import './App.css';
import Navbar from './Components/navbar/Navbar';
import Firstsec from './Components/firstsec/Firstsec';
import {
  Switch,
  Route,
} from "react-router-dom";
import Data from './Components/pages/data/Data';
import Findlep from './Components/pages/findlep/Findlep';

function App() {
  return (
    <div className="App">

      <Navbar/>
      <Switch>
        <Route exact path="/">

        <Firstsec/>


          </Route>

          <Route exact path="/data">

           <Data/>


          </Route>

          <Route exact path="/report">

           <Findlep/>


          </Route>


      </Switch>
  
    </div>
  );
}

export default App;
