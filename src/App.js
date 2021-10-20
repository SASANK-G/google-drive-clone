
import { useState } from 'react';
import './App.css';
import Data from './Components/Data';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import { auth, provider } from './firebase';


function App() {
  const [user, setUser] = useState(null);
  const signIn=()=>{
    auth.signInWithPopup(provider).then(({user})=>{
      setUser(user)

    }).catch(error=>{
      alert(error.message);
    })
  }

  return (
    <>
    {
      user ? (
        <>
          <Header photoURL={user.photoURL}/>
            <div className="App">
             <Sidebar/>
              <Data/>
            </div>
        </>
      ):(
        <div className="loginWrap">
          <img src="https://upload.wikimedia.org/wikipedia/commons/1/12/Google_Drive_icon_%282020%29.svg"/>
          <button onClick={signIn}>login</button>
        </div>
      )
    }
    </>
  );
}

export default App;
