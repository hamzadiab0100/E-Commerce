import React from 'react';
import { AuthProvider } from '../components/AuthContext';
import Register from '../components/Register';
import Login from '../components/Login';

const SignUp = ({signup}) => {
    return (
        <AuthProvider>
            {!signup?(
                <>
              <>
                <Login />
                </>  
                </>
            ):(
                <>
                <>
                     <Register />
                    </>
                </>
            )}                    
        </AuthProvider>
    )
}

export default SignUp
