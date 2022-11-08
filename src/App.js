import logo from './logo.svg';
import './App.css';
import { useContext } from 'react';
import { AuthContext } from './Contexts/UserContext';
import Navbar from './Pages/Navbar/Navbar';

function App() {
  const {user} = useContext(AuthContext);
  console.log(user);
  return (
    <div className="App">
      <Navbar></Navbar>
      <h1>Hello {user?.displayName}</h1>
    </div>
  );
}

export default App;
