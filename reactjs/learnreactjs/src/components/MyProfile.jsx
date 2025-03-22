import React from 'react'

function MyProfile({data}) {
  return (
    <div>
        <p>I'm from my profile components</p>
        <p>My name is {data.FirstName} {data.LastName}</p>
        <img src={data.imgPic} width="300" alt={data.FistName} />
        <hr></hr>
    </div>
  )
}

export default MyProfile