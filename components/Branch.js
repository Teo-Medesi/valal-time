import React from 'react'

const Branch = ({branch}) => {
  
  return (
    <div className='btn btn-primary !text-black btn-outline flex justify-between'>
      <p>{branch?.name}</p>
      <p>{branch?.description}</p>
      <p>{branch?.total_time_tracked || "0h 0m"}</p>
    </div>
  )
}

export default Branch