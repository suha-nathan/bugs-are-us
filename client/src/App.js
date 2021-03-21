import './App.css';
import React, {useState,useEffect} from "react"
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import DashboardPage from "./components/DashboardPage";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage"
import axios from "axios";

function App() {
    const [isAuth,setAuth] = useState(false)
    const [user,setUser] = useState({})

    useEffect(()=>{
        loadUser()
    },[])

    async function login(email,password){
        try{
            let res = await axios.post("http://localhost:8080/auth/signin",{email,password})
            setAuth(true)
            // console.log(res.data)
            localStorage.setItem("token",res.data.token)
        }catch(e){
            console.log(e)
        }
    }

    async function signUp(userInfo){
        try{
            let res = await axios.post("http://localhost:8080/auth/signup",userInfo)
            setAuth(true)
            // console.log("signup success")
            localStorage.setItem("token",res.data.token)
        }catch(e){
            console.log(e)
        }

    }

    async function loadUser(){
        try{
            // need a user get route to load user
            let res = await axios.get("http://localhost:8080/user",{
                headers:{
                    "x-auth-token" : `Bearer ${localStorage.token}`

                }
            })
            console.log(res.data.user)
            setUser(res.data.user)
            setAuth(true)
        }catch(e){
            setAuth(false)
            localStorage.removeItem("token")
        }

    }

    function logOut(){
        setAuth(false)
        localStorage.removeItem("token")
    }

    console.log(isAuth)
  return (
    <div className="App">
        <BrowserRouter>
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
