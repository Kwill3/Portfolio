import React from 'react';

const divStyle = {
  backgroundColor: '#fff'
}

const Error = () => {
  return (
    <div style={divStyle}>
      <h2>HTTP Error 404</h2>
      <p>404 Not Found</p>
      <p>The requested URL was not found on this server</p>
    </div>
  )
}

export default Error;