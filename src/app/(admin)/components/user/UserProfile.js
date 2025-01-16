import React from 'react'

const UserProfile = ({ name, email }) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>{email}</p>
    </div>
  )
}

export default UserProfile;