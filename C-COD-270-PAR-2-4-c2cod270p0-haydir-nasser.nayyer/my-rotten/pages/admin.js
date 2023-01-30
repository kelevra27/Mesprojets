import React, { useEffect } from "react"
import {useRouter} from 'next/router';
import { useState } from "react";
export default function Admin(){
    const router = useRouter()
    const [users, setUsers] = useState([]);

    useEffect(() =>  {
        checkGrants()
        getUsers()
    }, [])


    const checkGrants = async () => {
        const token = localStorage.getItem("token")
        // fetch( POST /isAdmin token body => true / false)
        const res = await fetch("http://localhost:8000/user/isAdmin", {
        method: "POST",
        headers:{
            "Content-type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({token}),
        });
        console.log(res)
        if (res.status === 200) {
            console.log("Ok ")
            //  router.push("/admin");
        } else {
            alert("Error you're not allowed")
            router.push("/");
        }
    }

    const getUsers = async () => {
        let data = await fetch("http://localhost:8000/user/users")
        data = await data.json()
        console.log(data)
        setUsers(data)
    }

    const updateUser = async () => {
        // const token = localStorage.getItem("token")
        // fetch( POST /isAdmin token body => true / false)
        const res = await fetch("http://localhost:8000/user/update", {
        method: "POST",
        headers:{
            "Content-type": "application/json",
            "Accept": "application/json"
        },
        });
    }

    if (users === []) {
        return <div>Loading ...</div>
    } else {
    return (
<div>

    <div className="adminContainer">
        <h4>Admin dashboard</h4>
        <div className="getUsers" > 
            {users.map(user => (
                <div key={user.id} style={{ border : "solid 1px white", margin : "5%" }}x  >
                <p>{user.username}</p>
                <p>{user.email}</p>
                <button onClick={updateUser} className="btnAdmin"><p>{user.role}</p></button>
                </div>
            ))}
        </div>
    </div>

</div>
       
    )
}

}



















// import React, { useState } from "react";
// import {useRouter} from 'next/router';

// export default function Admin() {
//     const router = useRouter()
//     const[username, setUsername]=useState("");
//     const[email, setEmail]=useState("");
//     const[password, setPassword]=useState("");

//     async function admin(event)
//     {
//         event.preventDefault()
//         console.log(username,email,password)
//         let item ={username,email,password};
//         let res = await fetch("http://localhost:8000/user/login-admin", {
//         method: "POST",
//         headers:{
//             "Content-type": "application/json",
//             "Accept": "application/json"
//         },
//         body: JSON.stringify(item),
//         });
//         if (res.status === 200) {
//             res = await res.json();
//             // console.log(res)
//             localStorage.getItem(JSON.stringify(res))
//             localStorage.setItem('email', email)
//              await router.push("/dashboard");
//         }
//         else {
//             alert("Error")
//             console.log(res)
//         }
        
//     }
// return (
// <div className="formAdmin">

// <h2>Login admin</h2>
// <form onSubmit={(e) => admin(e)}>

// <input type ="username"  onChange={e => setUsername(e.target.value)} placeholder="username" required/> 
// <br/>
// <input type ="email"  onChange={e => setEmail(e.target.value)} placeholder="email" required/> 
// <br/>
// <input type="password"onChange={e => setPassword(e.target.value)} placeholder="password" required/>
// <br/>
// <button type="submit">Login</button>

// </form>
// </div>
// )
// }

