//importando los modulos de firebase
import appFirebase from "./firebase/config";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Login from "./components/login";
import Home from "./components/home";
import React from "react";


const auth = getAuth(appFirebase);

function App() {

  const [user, setUser] = React.useState(null);

  onAuthStateChanged(auth, (userFirebase) => {
    if (userFirebase) {
      setUser(userFirebase);
    } else {
      setUser(null);
    }
  })

  return (
    <div>
 
{user ? <Home correoUsuario={user.email}/> : <Login />}
    </div>
  )
}

export default App
