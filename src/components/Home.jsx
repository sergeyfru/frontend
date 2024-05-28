import { useState, useEffect, useContext } from "react"
import axios from "axios"
import { AuthContext } from "../App"
import { jwtDecode } from 'jwt-decode'


const Home = () => {
    const [users, setUsers] = useState([])
    const [email, setEmail] = useState('')
    const { token, setToken } = useContext(AuthContext)


    useEffect(() => {
        getUsers()
        greeting()
    }, [])

    const greeting = () => {
        // console.log(typeof token.token);

    }

    const getUsers = async () => {
        try {
            const response = await axios.get('https://server-h26r.onrender.com/users',
                {
                    headers: {
                        "x-access-token": token?.token
                    },
                    withCredentials: true,
                }
            )
            setUsers(response.data)
            const tokenToDecode = token?.token || ''
            const decoded = jwtDecode(token?.token)
            setEmail(decoded.email)

        } catch (error) {
            // console.log(error.response.data.msg);
            console.log(error.response.data.msg);
            setEmail('')
        }
    }


    return (
        <>
            <h2>Home {email}</h2>

            {
                users.map(user => {
                    return <div key={user.id}>{user.id} {user.email}</div>
                })
            }
        </>
    )
}
export default Home