import React from 'react'

function Customer({ name, birth, gender, job, image, id }) {
  return (
    <div>
      <CustomerProfile image={image} name={name} id={id} />
      <CustomerInfo birth={birth} gender={gender} job={job} />
    </div>
  )
}

function CustomerProfile({ image, name, id }) {
  return (
    <div>
      <img src={image} alt="profile" />
      <h2>{name}({id})</h2>
    </div>
  )
}

function CustomerInfo({ birth, gender, job}) {
  return (
    <div>
      <p>{birth}</p>
      <p>{gender}</p>
      <p>{job}</p>
    </div>
  )
}

export default Customer;