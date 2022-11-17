import React from 'react'
import { useState } from 'react'
/* import { submitData, validate } from '../scrips/submitAndValidation' */


type UserData = {
 
 name?: string | any
  email?: string | any
  comments?:  string | any

}
const ContactFormsSection: React.FC = () => {

    let currentPage = "Contact Us"
   /*  window.top.document.title = `${currentPage} || Fixxo`  */
  
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [comments, setComments] = useState<string>('')
    const [errors, setErrors] = useState({})
    const [submitted, setSubmitted] = useState(false)
    const [failedSubmit, setFailedSubmit] = useState(false)
  
    const handleChange = (e: { target: any; type?: string }) => {
      const {id, value} = e.target
     
       switch(id) {
        case 'name':
          setName(value)
          break
        case 'email':
          setEmail(value)
          break
        case 'comments':
          setComments(value)
          break
      } 
  
   /*    setErrors({...errors, [id]: validate(e.target)}) */
    }
  

 
       
    const handleSubmit  = async (e: React.FormEvent) => {

      e.preventDefault()
      
            setFailedSubmit(false)
            setSubmitted(false)

/* 
            setErrors(validate(e, {name, email, comments}))
           
            if (errors.name === null | && errors.email === null && errors.comments === null) {
               
              let json = JSON.stringify({name, email, comments})

                setName('')
                setEmail('')
                setComments('')
                setErrors({})

             
             
              if  (await submitData('https://win22-webapi.azurewebsites.net/api/contactform', 'POST', json,)) {
                setSubmitted(true)
                setFailedSubmit(false)
              }
              else {
              setSubmitted(false)
              setFailedSubmit(true)
            }
                
            
             
                
            }
            else {
                setSubmitted(false)
            }  */
        }
/* 
    
        const handleKeyUp = (e: { target: any; type?: string }) => {

            const {id, value} = e.target 

        setErrors({...errors, [id]: validate(e) })
        }
 */
       
       
    
  return (

    
    
    <section className="form-comments">
        
    

       <div className="forms-input">
           <div className="container">
         
              {
                submitted ? (
                <div className='alert alert-success text-center'  >
                    <div className='header'>
                           
                                <h2 >Thank you for your comments!</h2>
                                <p>We will get back to you as soon as possible</p>
                         
                    </div>
                </div> )  : (<></>)
}    

{
                failedSubmit ? (
                <div className='alert alert-danger text-center'  >
                    <div className='header'>
                            
                                <h2 >Something went wrong!</h2>
                                <p>We couldn't submit your comments right now.</p>
                           
                    </div>
                </div> ) : (<></>)
}

                
   {/* 
              
                 <form onSubmit={handleSubmit} noValidate>
                    <div className="header">
                    <h2>Come in Contact with Us </h2>
              
                    </div>
                <div className="item-1">
                   
                  <input  id="name" className={ (errors.name) ?  'error': '' }  type="text"  value={name}  onChange={handleChange}  onKeyUp={handleKeyUp}   placeholder="Your Name"   />                 
                    
                    <div className="errorMessage"> {errors.name} </div>
                </div>
                  
                <div className="item-2">
               
                    <input id='email' className={ (errors.email) ?  'error': '' }  type='email'   value={email}   onChange={handleChange} onKeyUp={handleKeyUp}  placeholder='Your Mail' /> 
                    <div className='errorMessage'> {errors.email} </div>

                </div>
                <div className="item-3">
                      <textarea  className={ (errors.comments) ?  'error': '' }   placeholder="Comments"  value={comments}  onChange={handleChange}  onKeyUp={handleKeyUp}  id="comments" rows="8"></textarea>
                        <div className='errorMessage'> {errors.comments} 
                        </div>
            
                      <div className="cart-red-buttons mt-4"><button type="submit"  className=" post-button">Post Comments</button>
                    </div> 
                </div>
             
       </form> */}
       

           </div> 
       </div>

       
       </section>

       
  )

}

export default ContactFormsSection