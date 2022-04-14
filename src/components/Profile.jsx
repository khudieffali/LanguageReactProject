import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'

const Profile = () => {
    const { user, setUser } = useContext(UserContext)
    const [loading, setLoading] = useState(false)
    const handLogin = () => {
        setLoading(true);
        setTimeout(() => {
            setUser({ id: 1, username: "mseven", bio: "lorem ipsum" })
            setLoading(false)
        }, 1500)
    }
    const handLogout=()=>{
        setUser(null)
    }
    return (
        <div>
            {!user && (
                <button onClick={handLogin}>
                    {loading ? 'loading...' : 'Login'}
                </button>
            )}
           <br/>
            <p>
                {JSON.stringify(user)}
            </p>
            <br/>
            {user && <button onClick={handLogout}>Logout</button>}
        </div>
    )
}

export default Profile