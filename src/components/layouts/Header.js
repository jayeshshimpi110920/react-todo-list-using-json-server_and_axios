import React from 'react';

export default function Header() {
  const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
  };

  return (
    <header style={headerStyle}>
      <h2>Todo-List using Json server and Axios</h2>
      <h5>&copy; Jayesh_Shimpi</h5>
    </header>
  );
}
