import './App.css';
import React, {useState,useEffect} from "react"
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import axios from "axios";
import { Alert } from "react-bootstrap"

import DashboardPage from "./components/dashboard/DashboardPage";
import LoginPage from "./components/login/LoginPage";
import SignupPage from "./components/signup/SignupPage";
import CreateBugPage from "./components/create-bug/CreateBugPage";
import EditBugPage from "./components/create-bug/EditBugPage"
import BugDetailsPage from "./components/bug-details/BugDetailsPage";
import EditAccountPage from "./components/edit-account/EditAccountPage";
import ProjectsPage from "./components/projects-page/ProjectsPage";
import Layout from "./components/layout/Layout";
import CreateProjectPage from "./components/create-project/CreateProjectPage";
import ViewProjectPage from "./components/view-projects-page/ViewProjectPage"

function App() {
    const [isSignedUp, setSignedUp] = useState(false)
    const [isAuth, setAuth] = useState(false)
    const [user, setUser] = useState({})
    const [errorMessage, setErrorMessage] = useState("")
    const [successMessage, setSuccessMessage] = useState("")

    const [ projectData, setProjectData ] = useState([])
    const [allProjects, setAllProjects] = useState([])

    useEffect(()=>{
        loadUser()
        loadProjectData()
        loadAllProjects()
    },[])

    async function loadProjectData() {

        try {
            let res = await axios.get('/api/bug/all', {
                headers: {
                    'x-auth-token': `Bearer ${localStorage.getItem('token')}`
                }
            })
            console.log(res.data.data)
            console.log([...res.data.data])
            console.log('still running')
            setProjectData([...res.data.data])

        } catch (e) {
            console.log(e)
        }

    }

    async function loadAllProjects() {
        const res = await axios.get('/api/project/all', {
            headers: {
                'x-auth-token': `Bearer ${localStorage.getItem('token')}`
            }
        })

        setAllProjects([...res.data.data])
    }

    async function login(values) {
        try{
            let res = await axios.post(`/api/auth/login`, values)
            setAuth(true)
            setUser(res.data.user)
            localStorage.setItem("token",res.data.token)
        }catch(e){
            setErrorMessage(e.response.data.message)
            setTimeout(() => {
                setErrorMessage("")
            }, 4000)
        }
    }

    async function signUp(userInfo) {
        try{

            let res = await axios.post("/auth/signup", userInfo, {
                    headers: {
                        "content-type": "multipart/form-data"
                    }
                }
            )
            setAuth(true)

            console.log("signup success")
            // console.log(res.data)
            setSuccessMessage("signup success")
            setTimeout(() => {
                setSuccessMessage("")
            }, 4000)
            setUser(res.data.user)
            localStorage.setItem("token",res.data.token)
        }catch(e){
            // console.log(e.response.data.message)
            setErrorMessage("Sign up failure, please try again")
            setTimeout(() => {
                setErrorMessage("")
            }, 4000)
        }
    }

    async function loadUser() {
        try{
            let res = await axios.get("/api/user",{
                headers:{
                    "x-auth-token" : `Bearer ${localStorage.token}`
                }
            })
            // console.log("loading user",res.data.user)
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

  return (
    <div className="App">
        <BrowserRouter>
            {errorMessage && <Alert variant="danger" className="error-alert">{errorMessage}</Alert>}
            {successMessage && <Alert variant="success" className="error-alert">{successMessage}</Alert>}

            <Switch>

                <Route path="/login">
                    <LoginPage isAuth={isAuth} login={login}/>
                </Route>

                <Route path="/signup">
                    <SignupPage isAuth={isAuth} isSignedUp={isSignedUp} setSignedUp={setSignedUp} signUp={signUp} setSuccessMessage={setSuccessMessage} />
                </Route>


                <Route path="/projects" exact>
                    {isAuth?
                    <Layout user={user} isAuth={isAuth} logOut={logOut} projectData={projectData} allProjects={allProjects}>
                        <ProjectsPage user={user} allProjects={allProjects} />
                    </Layout>
                        :
                        <Redirect to="/login"/>
                    }
                </Route>

                <Route path="/project/create">
                    <Layout isAuth={isAuth} logOut={logOut} projectData={projectData} allProjects={allProjects} >
                        <CreateProjectPage user={user} loadProjectData={loadProjectData} loadAllProjects={loadAllProjects}/>
                    </Layout>
                </Route>

                <Route path="/project/:id/view">
                    <Layout isAuth={isAuth} logOut={logOut} projectData={projectData} allProjects={allProjects}>
                        <ViewProjectPage user={user}/>
                    </Layout>
                </Route>

                <Route path="/project/:id/view">
                    <Layout isAuth={isAuth} logOut={logOut} projectData={projectData} allProjects={allProjects}>
                        <ViewProjectPage user={user}/>
                    </Layout>
                </Route>

                <Route path="/bug/create" exact>
                    {isAuth?
                    <Layout user={user} isAuth={isAuth} logOut={logOut} projectData={projectData} allProjects={allProjects}>
                        <CreateBugPage user={user} loadProjectData={loadProjectData} />
                    </Layout>
                        :
                        <Redirect to="/login"/>
                    }
                </Route>

                <Route path="/bug/edit" exact>
                    {isAuth?
                        <Layout user={user} isAuth={isAuth} logOut={logOut}>
                            <EditBugPage user={user} loadProjectData={loadProjectData} />
                        </Layout>
                        :
                        <Redirect to="/login"/>
                    }
                </Route>

                <Route path="/bug/:id">
                    {isAuth?
                    <Layout user={user} isAuth={isAuth} logOut={logOut}>
                        <BugDetailsPage
                            projectData={projectData}
                            user={user}
                            loadProjectData={loadProjectData}
                        />
                    </Layout>
                    :
                    <Redirect to="/login"/>
                    }
                </Route>

                <Route path="/user/edit">
                    {isAuth?
                    <Layout user={user} isAuth={isAuth} logOut={logOut}>
                        <EditAccountPage setSuccessMessage={setSuccessMessage} user={user} />
                    </Layout>
                        :
                        <Redirect to="/login"/>
                    }

                </Route>

                <Route>
                    {isAuth?
                        <Layout user={user} isAuth={isAuth} logOut={logOut} projectData={projectData} allProjects={allProjects}>
                            <DashboardPage
                                user={user}
                                projectData={projectData}
                                loadProjectData={loadProjectData}
                                path="/dashboard"
                                exact
                            />
                        </Layout>

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
