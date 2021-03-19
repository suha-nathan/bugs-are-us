import './App.css';
import BugCard from "./components/BugCard";
import Header from './components/Header'
import {Row, Col, Container} from 'react-bootstrap'
import {BrowserRouter, Route, Switch} from "react-router-dom";
import BugList from './components/BugList'

function App() {
  return (
    <div className="App">


        <BrowserRouter>
            <Switch>
                <Route>
                    <Header />
                    <Container className="w-75">
                        <BugList />
                    </Container>
                </Route>
            </Switch>

        </BrowserRouter>




    </div>
  );
}

export default App;
