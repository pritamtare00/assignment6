import logo from './logo.svg';
import './App.css';
import Home from './pages/home';
import {Switch,Route} from "react-router-dom"
import AddComment from './pages/Assignment3/addComment';
import EditComment from './pages/Assignment3/editComment';
import ViewComment from './pages/Assignment3/viewComment';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/add" component={AddComment}/>
        <Route exact path="/edit/:id" component={EditComment}/>
        <Route exact path="/view/:id" component={ViewComment}/>
        <Route exact path="/" component={Home}/>
        </Switch>
  <Home/>
    </div>
  );
}

export default App;
