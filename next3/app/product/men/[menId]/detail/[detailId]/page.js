import React from 'react'

const page = ({params}) => {
  return (
    <div>
        <h1>{params.detailId} related details of {params.menId}</h1>
    </div>
  )
}

export default page