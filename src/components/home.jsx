import { Button } from '@mui/material';
import React from 'react'

import appFirebase from '../firebase/config';
import {getAuth, signOut} from 'firebase/auth';
const auth = getAuth(appFirebase);

function Home({ correoUsuario }) {
    return (
        <div>
            <h2>Bienvenido: {correoUsuario} <Button onClick={()=>signOut(auth)} >Logout</Button></h2>
        </div>
    )
}


export default Home;