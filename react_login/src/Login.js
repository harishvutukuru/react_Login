import React from 'react'
import { useRef,usestat,useEffect } from 'react';
import './applycss'
  
const Login = () => {
  return (
    <div> 
         <header>
        <h1>
          Sign In
        </h1>
      </header>
      <body>
<form>
  <label htmlFor='txt_UserName'>username:</label>
  <input type='text ' id='txt_UserName' ></input>
</form>
      </body>
      <footer>

      </footer>

    </div>
  )
}

export default Login