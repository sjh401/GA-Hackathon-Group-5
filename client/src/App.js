import { useState } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import './App.css';
import Layout from './components/layout/Layout';
import SignUp from './screens/user/SignUp';
import SignIn from './screens/user/SignIn';
import { registerUser, loginUser, removeToken } from './services/auth';
import Home from './screens/home/Home';
import Services from './screens/services/Services';
import Schedule from './screens/schedule/Schedule';
import UserAccount from './screens/user/UserAccount';

function App() {
  const [ currentUser, setCurrentUser ] = useState(null);
  const [ toggle, setToggle ] = useState(false)
  const [ service, setService ] = useState("")
  const history = useHistory();

  console.log(currentUser)
  const handleRegister = async (registerData) => {
    const userData = await registerUser(registerData);
    setCurrentUser(userData);
    history.push("/");
  }

  const handleLogin = async (loginData) => {
    console.log(loginData)
    const userData = await loginUser(loginData);
    setCurrentUser(userData);
    history.push('/');
  }

  const handleLogout = () => {
    setCurrentUser(null);
    setToggle(false)
    localStorage.removeItem('authToken');
    removeToken();
  }

  return (
      <div className="App">
        <Layout
          handleLogout={handleLogout}
          currentUser={currentUser}
          toggle={toggle}
        >
          <Switch>
            <Route path="/schedule"> 
              <Schedule 
                currentUser={currentUser}
              />
            </Route>
            <Route path="/services">
              <Services 
                currentUser={currentUser}
                toggle={toggle}
                service={service}
              />
            </Route>
            <Route path="/sign-in">
              <SignIn 
                handleLogin={handleLogin}
              />
            </Route>
            <Route path="/sign-up">
              <SignUp 
                handleRegister={handleRegister}
              />
            </Route>
            <Route path="/account">
                <UserAccount 
                  currentUser={currentUser}
                  toggle={toggle}
                />
            </Route>
            <Route>
              <Home 
                currentUser={currentUser}
                setToggle={setToggle}
                toggle={toggle}
                setService={setService}
                service={service}
              />
            </Route>
          </Switch>
        </Layout>
      </div>
  );
}

export default App;
