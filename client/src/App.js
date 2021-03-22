import './App.css';
import React, {useState,useEffect} from "react"
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import axios from "axios";
import {Alert} from "react-bootstrap"

import DashboardPage from "./components/dashboard/DashboardPage";
import LoginPage from "./components/login/LoginPage";
import SignupPage from "./components/signup/SignupPage";
import CreateBugPage from "./components/create-bug/CreateBugPage";
import BugDetailsPage from "./components/bug-details/BugDetailsPage";
import EditAccountPage from "./components/edit-account/EditAccountPage";


function App() {
    const [isSignedUp, setSignedUp] = useState(false)
    const [isAuth, setAuth] = useState(false)
    const [user, setUser] = useState({})
    const [errorMessage, setErrorMessage] = useState("")
    const [successMessage, setSuccessMessage] = useState("")

    const [ projectData, setProjectData ] = useState({})

    useEffect(()=>{
        loadUser()
        loadProjectData()
    },[])


    async function loadProjectData() {
        // console.log(projectMockData[0])
        // setProjectData(projectMockData[0])
        let res = await axios.get('http://localhost:8080/bug/all', {
            headers: {
                'x-auth-token': `Bearer ${localStorage.getItem('token')}`
            }
        })
        // console.log(res)
        setProjectData(res.data)
    }

    async function login(values) {
        try{
            let res = await axios.post("http://localhost:8080/auth/login", values)
            setAuth(true)
            setUser(res.data.user)
            localStorage.setItem("token",res.data.token)
        }catch(e){
            setErrorMessage(e.response.data.message)
            setTimeout(() => {
                setErrorMessage("")
            }, 2000)
        }
    }

    async function signUp(userInfo) {
        try{
            let res = await axios.post("http://localhost:8080/auth/signup", userInfo)
            console.log("signup success")
            setSignedUp(true)

            // setAuth(true)
            // console.log("signup success")
            // localStorage.setItem("token",res.data.token)
        }catch(e){
            console.log(e.response.data.message)
            setErrorMessage(e.response.data.message)
            setTimeout(() => {
                setErrorMessage("")
            }, 2000)
        }
    }

    async function loadUser() {
        try{
            let res = await axios.get("http://localhost:8080/user",{
                headers:{
                    "x-auth-token" : `Bearer ${localStorage.token}`
                }
            })
            console.log("loading user",res.data.user)
            setUser(res.data.user)
            setAuth(true)
        }catch(e){
            // setErrorMessage(e.response.data.message)
            setAuth(false)
            localStorage.removeItem("token")
        }

    }

    function logOut() {
        setAuth(false)
        localStorage.removeItem("token")
    }



    // console.log(errorMessage)
    // console.log(isAuth)
    // console.log(user)
  return (
    <div className="App">
        <BrowserRouter>
            {errorMessage&& <Alert variant="danger">{errorMessage}</Alert>}
            {successMessage&& <Alert variant="success">{successMessage}</Alert>}
            <Switch>

                <Route path="/login">

                    <LoginPage isAuth={isAuth} login={login}/>
                </Route>

                <Route path="/signup">
                    <SignupPage isSignedUp={isSignedUp} signUp={signUp} setSuccessMessage={setSuccessMessage} />
                </Route>

                <Route path="/bug/create" exact>

                    <CreateBugPage />
                </Route>

                <Route path="/bug/:id">
                    <BugDetailsPage
                        projectData={projectData}
                        user={user}
                        loadProjectData={loadProjectData}
                    />
                </Route>

                <Route path="/user/edit">
                    <EditAccountPage user={user} />
                </Route>
                <Route>
                    {isAuth?
                        <DashboardPage isAuth={isAuth} logOut={logOut} user={user} projectData={projectData} path="/" exact />
                        :
                        <Redirect to="/login"/>
                    }

                </Route>


            </Switch>

        </BrowserRouter>

    </div>
  );
}

export default App;
