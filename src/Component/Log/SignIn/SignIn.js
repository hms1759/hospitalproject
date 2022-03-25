import React from "react";
import '../log.css';
//import fetchData from "../../../Api/Index";


export default function SignIn() {
  // const[Data, setData] = useState([]);

  // useEffect(() => {
  //   const fetch =async() => {
  //     setData(await fetchData())
  //   }
  // }, [])


  return (
    <div className="log_container">
      <div className="sub_log_container">
      
        <div className="logIn_form">
          <div className="form_body">
            <br/>
            <div className=" form_img ">
              <div className=" form_img_cont">

            
              <img src="https://orionsutures.com.ng/wp-content/uploads/2021/05/stethoscope.jpg" className="form_logo"/>
              </div>
              </div> 
              <br/>
            <div className=" form_text ">
            SignIn Your Account

            </div>
          
            <div className=" form_input ">
            <form className="log_form_ui_form">
                   
              
 
      
              
         <div className="form_group">
           
           <input 
           type="text" 
           name="Email" 
           className="form_control" 
           placeholder="Username or Email" 
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
         </div>    
         
         <div className="login_space">
           <button type="Submit" className="btn_submit"> Login</button>  
            <div className=" form_login_text_log">
 <a href="/SignUp" className=" singUp_log"> Forget password</a>
         
            </div>
           
</div>
          
             </form>

            </div>
            <div className=" form_login_text_log">
Do not have an Account? <a href="/SignUp" className=" singUp_log"> register</a>
         
            </div>
          </div>

        </div>
        <div className="logImg_container">
          <div className="log_img">
        
          </div>
        </div>
      </div>
    </div>
  );
}
