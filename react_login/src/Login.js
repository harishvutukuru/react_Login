import React from 'react'
import { useRef,usestat,useEffect } from 'react';
import './applycss.css'
  
const onSubmitclick =    (e) =>{
    debugger;
    e.preventDefault()
}
const Login = () => {
  return (
   
<section>
<h1>
    Login
 </h1> 
   <div className='div_main'>
   <div className='div_Sub'>
    <table>
    <tbody>
<tr>
     <td>
     <label htmlFor='txt_userName'>username: </label>
     </td>
 </tr>
 <tr>
 <td>
 <input type="text" name="" id="txt_userName"  required/>
   </td>
 </tr>
 <tr>
     <td>
     <label htmlFor='txt_Pwd'>password: </label>
     </td>
 
 </tr>
 <tr>
     <td>
     <input type="password" name="" id="txt_Pwd"  required/>
     </td>
 </tr>
 <tr>
  <td>
   <a href='./Registration.js'>Register</a>
  </td>
 </tr>
 <tr>
     <td>
         <button id='btn_Submit' onClick={(e) => onSubmitclick(e)}> submit</button>
     </td>
 </tr>
 </tbody>
   
    </table>
   
   </div>
  
   </div>
</section>


       
     
       
     
  )
}

export default Login