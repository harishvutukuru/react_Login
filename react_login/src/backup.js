<table className='tbl_login'>
  
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
         <button id='btn_Submit' onClick={(e) => onSubmitclick(e)}> submit</button>
     </td>
 </tr>
 </tbody>
 </table>