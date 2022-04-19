import React from 'react'

function Header(props) {
  return (
    <header className='row block center'>
        <div>
            <a href='#'> <h1>Hunger</h1></a>
        </div>
        <div>
            <a href='#'>Cart</a> <a href='#'>SignIn</a>
            
        </div>
    </header>
  )
}

export default Header