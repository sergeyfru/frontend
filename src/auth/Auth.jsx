import { useState, useContext, useEffect, } from "react";
import { AuthContext } from "../App";
import axios from "axios";
import LoginRegister from "../components/LoginRegister";

const Auth = ({ children }) => {
    const { token, setToken } = useContext(AuthContext)
    const [redirect,setRedirect] =useState(false)

    useEffect(()=>{
        verify()
    },[])

    const verify = async ()=>{
        try {
            const response = await axios.get('https://server-h26r.onrender.com/users/verify',{
                headers:{
                    "x-access-token":token?.token
                },
                withCredentials:true,
            })
            if(response.status === 200) setRedirect(true)
            
        } catch (error) {
            setRedirect(false)
        }
    }



    return redirect ? children : <>Not Authorised  <LoginRegister page={'Login'}/></>
}
export default Auth