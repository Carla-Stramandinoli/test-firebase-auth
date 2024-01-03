import { ThemeProvider } from '@emotion/react';
import { Box, Button, Checkbox, Container, CssBaseline, FormControlLabel, Grid, Link, TextField, Typography, createTheme } from '@mui/material';
import React from 'react'
import appFirebase from '../firebase/config';
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';
import Swal from "sweetalert2";

const auth = getAuth(appFirebase);

function Login() {
    const defaultTheme = createTheme();

    const [record , setRecord] = React.useState(false);

    const funcAutentication = async(e) => {
        e.preventDefault();
        const correo = e.target.email.value;
        const contrasenia = e.target.password.value;

        if (record) {
            await createUserWithEmailAndPassword(auth, correo, contrasenia)
        } else {
            try{
                await signInWithEmailAndPassword(auth, correo, contrasenia)
            } catch (error){
                Swal.fire("El correo o la contraseña son incorrectos!");
            }
        }
    }

    return (
    <ThemeProvider theme={defaultTheme}>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex', 
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          {record ? "Registrate" : "Inicia sesion"}
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }} onSubmit={funcAutentication}>
          <TextField
            margin="normal"
            required
            fullWidth
            type="email"
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            {record ? "Registrarse" : "Iniciar sesion"}
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2" onClick={() => setRecord(!record)}>
                {record ? "¿Ya tienes una cuenta? Inicia sesion" : "¿No tienes cuenta? Registrate"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  </ThemeProvider>
  )
}

export default Login;