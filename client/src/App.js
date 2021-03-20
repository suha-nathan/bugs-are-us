import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import DashboardPage from "./components/DashboardPage";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage"

function App() {
  return (
    <div className="App">


        <BrowserRouter>
            <Switch>



                <Route path="/login">
                    <LoginPage />
                </Route>

                <Route path="/signup">
                    <SignupPage />
                </Route>

                <Route>
                    <DashboardPage path="/" exact />
                </Route>
            </Switch>cd

        </BrowserRouter>




    </div>
  );
}

export default App;
