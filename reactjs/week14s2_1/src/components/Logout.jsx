import React from 'react';
import { useNavigate } from 'react-router-dom';

function Logout() {
  let navigate = useNavigate();

  function todo() {
    localStorage.clear(); // Clear the local storage
    navigate("/login"); // Navigate to the login page
  }

  return (
    <>
      <h3>Logout</h3>
        <br />
      <button onClick={todo}>Logout</button>
    </>
  );
}

export default Logout;


// import { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Logout = () => {
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Perform logout logic here (e.g., clearing tokens) if needed

//     // Navigate after logout
//     navigate('/login');
//   }, [navigate]); // Ensures useEffect runs only once after the component mounts

//   return null; // You can return a simple null or a loading spinner, etc.
// };

// export default Logout;