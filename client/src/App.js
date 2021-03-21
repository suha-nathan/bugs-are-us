import './App.css';
import React, {useState,useEffect} from "react"
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import axios from "axios";
import {Alert} from "react-bootstrap"
import DashboardPage from "./components/DashboardPage";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage"

function App() {
    const [isAuth,setAuth] = useState(false)
    const [user,setUser] = useState({})
    const [errorMessage,setErrorMessage] = useState("")

    useEffect(()=>{
        loadUser()
    },[])

    async function login(email,password){
        try{
            let res = await axios.post("http://localhost:8080/auth/signin",{email,password})
            setAuth(true)
            localStorage.setItem("token",res.data.token)
        }catch(e){
            console.log(e.response.data.message)
            setErrorMessage(e.response.data.message)
        }
    }

    async function signUp(userInfo){
        try{
            let res = await axios.post("http://localhost:8080/auth/signup",userInfo)
            setAuth(true)
            // console.log("signup success")
            localStorage.setItem("token",res.data.token)
        }catch(e){
            setErrorMessage(e.response.data.message)
        }

    }

    async function loadUser(){
        try{
            let res = await axios.get("http://localhost:8080/user",{
                headers:{
                    "x-auth-token" : `Bearer ${localStorage.token}`
                }
            })
            setUser(res.data.user)
            setAuth(true)
        }catch(e){
            // setErrorMessage(e.response.data.message)
            setAuth(false)
            localStorage.removeItem("token")
        }

    }

    function logOut(){
        setAuth(false)
        localStorage.removeItem("token")
    }

    // console.log(errorMessage)
    // console.log(isAuth)
    // console.log(user)
  return (
    <div className="App">
        <BrowserRouter>
            {errorMessage&& <Alert variant={"danger"}>{errorMessage}</Alert>}
            <Switch>
                <Route path="/login">
                    <LoginPage isAuth={isAuth} login={login}/>
                </Route>

                <Route path="/signup">
                    <SignupPage isAuth={isAuth} signUp={signUp} />
                </Route>

                <Route>
                    {isAuth?
                        <DashboardPage isAuth={isAuth} logOut={logOut} path="/" exact />
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
