import React from "react";
import '../log.css'

export default function SignUp() {
  return (
    <div className="log_container">
      <div className="sub_log_container">
        <div className="logImg_container">
          <div className="log_img">
        
          </div>
        </div>
       
        <div className="log_form">
          <div className="form_body">
            <div className=" form_img ">
              <div className=" form_img_cont">

            
              <img src="https://orionsutures.com.ng/wp-content/uploads/2021/05/stethoscope.jpg" className="form_logo"/>
              </div>
            </div>
            <div className=" form_text ">
              Create Your Account

            </div>
            <div className=" form_input ">
            <form className="log_form_ui_form">
                   
       
            <div class="form_group">
           
           <input 
           type="text" 
           name="name" 
           className="form_control" 
           placeholder="FullName" 
           id="name" />

           <div className="text-danger"> </div>
         </div>          
         <div className="form_group">
           
           <input 
           type="text" 
           name="phone" 
           className="form_control" 
           placeholder="Phone Number" 
           id="phone" />

           <div className="text-danger"></div>
         </div>     
      
              
         <div className="form_group">
           
           <input 
           type="text" 
           name="Email" 
           className="form_control" 
           placeholder="Email" 
           id="email" />

           <div className="text-danger"></div>
         </div> 
         <div className="form_group">
           
           <input 
           type="password" 
           name="password" 
           className="form_control" 
           placeholder="Password" 
           id="password" />

           <div className="text-danger"></div>
         </div>        <div className="form_group">
           
           <input 
           type="text" 
           name="address" 
           className="form_control" 
           placeholder="Address" 
           id="address" />

           <div className="text-danger"></div>
         </div>    
           <button type="Submit" className="btn_submit"> Submit</button>
           
             </form>

            </div>
           
            <div className=" form_login_text">
Already have an Account? <a href="/SignIn" className=" singUp_log"> login</a>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
