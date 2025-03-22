import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


function Login() {
  const navigate = useNavigate()
  const Myswal = withReactContent(Swal)
  const [inputs, setInputs] = useState({});
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "username": inputs.username,
      "password": inputs.password,
      "expiresIn": 600000
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch("https://www.melivecode.com/api/login", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result)
        if (result.status === "ok") {
          Myswal.fire({
            title: <strong>Login Successful</strong>,
            html: <i>{result.message}</i>,
            icon: "success",
            confirmButtonText: "See Profile",
          }).then((value) => {
            console.log(value)
            console.log(result.accessToken)
            localStorage.setItem("token", result.accessToken)
            navigate("/Profile")
          })

        } else {
          Myswal.fire({
            html: <i>{result.message}</i>,
            icon: "error"
          })
        }
      })
      .catch((error) => console.error(error));
    console.log(inputs);
  }
  // const login = () => {
  //   navigate("/Profile")
  // }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Enter your username: &nbsp;
          <input
            type="text"
            name="username"
            value={inputs.username || ""}
            onChange={handleChange}
          /><br></br>
        </label>
        <label>Enter your password: &nbsp;
          <input
            type="password"
            name="password"
            value={inputs.password || ""}
            onChange={handleChange}
          />
          &nbsp;
        </label>
        <button class="custom-button">Submit</button>

      </form>
    </>
  )
}

export default Login