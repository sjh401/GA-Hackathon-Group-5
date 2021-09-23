import { useState } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import './App.css';
import Layout from './components/layout/Layout';
import SignUp from './screens/user/SignUp';
import SignIn from './screens/user/SignIn';
import { registerUser, loginUser, removeToken } from './services/auth';
import Container from './container/container';

function App() {
  const [ currentUser, setCurrentUser ] = useState(null);
  const [ toggle, setToggle ] = useState(false)
  const [ service, setService ] = useState("")
  const history = useHistory();


  const handleRegister = async (registerData) => {
    const userData = await registerUser(registerData);
    setCurrentUser(userData);
    history.push("/");
  }

  const handleLogin = async (loginData) => {

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
            <Route path="/">
              <Container 
                currentUser={currentUser}
                toggle={toggle}
                setToggle={setToggle}
                service={service}
                setService={setService}
              />
            </Route>
          </Switch>
        </Layout>
      </div>
  );
}

export default App;
