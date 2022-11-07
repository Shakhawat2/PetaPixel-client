import logo from './logo.svg';
import './App.css';
import { useContext } from 'react';
import { AuthContext } from './Contexts/UserContext';

function App() {
  const {user} = useContext(AuthContext);
  console.log(user);
  return (
    <div className="App">
      <h1>Hello {user?.displayName}</h1>
    </div>
  );
}

export default App;
