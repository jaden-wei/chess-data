import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DataOrganizer from "./components/data/DataOrganizer";
import Login from "./components/Login";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const [username, setUsername] = useLocalStorage("");

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Login username={username} setUsername={setUsername} />
          </Route>
          <Route path="/data">
            <DataOrganizer username={username} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
