import React from 'react'

export default function Form() {
  return (
    <div>
        <div>
            <form>
                        
              <div className="form_group">
           
           <input 
             
           type="text" 
           name="fullName" 
           className="form_control" 
           placeholder="FullName" 
           id="fullName" />

           <div className="text-danger"></div>
                 </div> 
                <div className="form_group">

                     
                    <div className="">
                    
                    <input 
                        
                    type="text" 
                    name="phone" 
                    className="form_control" 
                    placeholder="Phone" 
                    id="phone" />

                    <div className="text-danger"></div>
                    </div> 

                                
                    <div className="form_group">
                    
                    <input 
                        
                    type="text" 
                    name="email" 
                    className="form_control" 
                    placeholder="Email" 
                    id="email" />

                    <div className="text-danger"></div>
                    </div> 

                 </div>
                     
         <div className="form_group">
           
           <textarea 
             
           type="text" 
           name="message" 
           className="form_control" 
           placeholder="Message" 
           id="message" />

           <div className="text-danger"></div>
         </div> 

            </form>

        </div>
    </div>
  )
}
