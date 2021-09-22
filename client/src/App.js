import { useState } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import './App.css';
import Layout from './components/layout/Layout';
import SignUp from './screens/user/SignUp';
import SignIn from './screens/user/SignIn';
import { registerUser, loginUser, removeToken } from './services/auth';
import Home from './screens/home/Home';

function App() {
  const [ currentUser, setCurrentUser ] = useState(null);
  const [ toggle, setToggle ] = useState(false)
  const history = useHistory();

  console.log(currentUser)
  const handleRegister = async (registerData) => {
    console.log("this is register data " + registerData)
    const userData = await registerUser(registerData);
    setCurrentUser(userData);
    history.push("/");
  }

  const handleLogin = async (loginData) => {
    console.log(loginData)
    const userData = await loginUser(loginData);
    console.log(userData)
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
        >
          <Switch>
            <Route path="/sign-up">
              <SignUp 
                handleRegister={handleRegister}
              />
            </Route>
            <Route path="/sign-in">
              <SignIn 
                handleLogin={handleLogin}
              />
            </Route>
            <Route>
              <Home 
                currentUser={currentUser}
                setToggle={setToggle}
                toggle={toggle}
              />
            </Route>
          </Switch>
        </Layout>
      </div>
  );
}

export default App;
