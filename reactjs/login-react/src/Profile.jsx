import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


function Profile() {
  const navigate = useNavigate()
  const Myswal = withReactContent(Swal)
  const [isLoaded, setIsLoaded] = useState(true);
  const [user, setuser] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token)
    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer "+ token);

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow"
    };

    fetch("https://www.melivecode.com/api/auth/user", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result)
        if (result.status === "ok") {
          setuser(result.user)
          setIsLoaded(false)
        } else {
          Myswal.fire({
            html: <i>{result.message}</i>,
            icon: "error"
          }).then((value) => {
            navigate("/Login")
          })
        }
      })
      .catch((error) => console.error(error));
  }, [])
  const logout = () => {
    localStorage.removeItem("token")
    navigate("/Login")
  }

  if (isLoaded) return <div>Loading...</div>
  else{
    return (
      <div>
        <div><strong>Name: </strong>{user.fname}</div>
        <div><strong>Lastname: </strong>{user.lname}</div>
        <div><strong>Username: </strong>{user.username}</div>
        <div><strong>Email: </strong>{user.email}</div>
        <div><img src='https://www.melivecode.com/users/1.png' alt={user.id} width='100'/></div>
        <div><button class="custom-button" onClick={logout} >Logout</button></div>
      </div>
    )

  }
  
}

export default Profile