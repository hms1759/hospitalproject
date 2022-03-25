import React,{ useState } from 'react'

export default function Form({submit,id}) {
    const [data, setData]= useState(
        {
          fullName:"",
          phone:"",
          email:"",
          password:"",
          address:""
    
        }
      )
    
      const handleChange=(e)=>{
        const newData ={...data}
        newData[e.target.id]=e.target.value
        setData(newData);
    
      }

      const {fullName, phone} = data;
  return (
    <form className="log_form_ui_form" onSubmit={(e, data)=> submit(e,data,id)}> 
                   
       
    <div className="form_group">
   
   <input 
   onChange={(e)=> handleChange(e)}
   value = {fullName}
   type="text" 
   name="fullName" 
   className="form_control" 
   placeholder="FullName" 
   id="fullName" />

   <div className="text-danger"> </div>
 </div>          
 <div className="form_group">
   
   <input 
   
   onChange={(e)=> handleChange(e)}
   value = {phone}
   type="text" 
   name="phone" 
   className="form_control" 
   placeholder="Phone Number" 
   id="phone" />

   <div className="text-danger"></div>
 </div>     

      
 <div className="form_group">
   
   <input 
   onChange={(e)=> handleChange(e)}
   value = {data.email}
   type="text" 
   name="email" 
   className="form_control" 
   placeholder="Email" 
   id="email" />

   <div className="text-danger"></div>
 </div> 
 <div className="form_group">
   
   <input 
   onChange={(e)=> handleChange(e)}
   value = {data.password}
   type="password" 
   name="password" 
   className="form_control" 
   placeholder="Password" 
   id="password" />

   <div className="text-danger"></div>
 </div>        <div className="form_group">
   
   <input 
   onChange={(e)=> handleChange(e)}
   value = {data.address}
   type="text" 
   name="address" 
   className="form_control" 
   placeholder="Address" 
   id="address" />

   <div className="text-danger"></div>
 </div>    
   <button className="btn_submit"> Submit</button>
   
     </form>

  )
}
