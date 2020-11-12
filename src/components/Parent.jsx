import React from 'react'
import Child from './Child'

const Parent = React.memo(({ name, color }) => {
  console.log("親がRenderingされました")
  return (
    <div className="box">
      <h2>Parent({name})</h2>
      <Child name={name} color={color} />
    </div>
  )
})

export default Parent
