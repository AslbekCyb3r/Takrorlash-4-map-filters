import React from 'react'

export default function Title(props) {
  return (
    <div>
      <h1>{props.group} talabalari</h1>
      <h1><strong>bugungi mavzu:</strong>{props.theme}</h1>
    </div>
  )
}
