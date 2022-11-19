import React from "react";


export const submitData = async (url: string, method: string, data: string, contentType = 'application/json') => {

   const res = await fetch(url, {

     method: method,
     headers: {
         'Content-type': contentType
         
     },
     body: data
 } ) 


   if (res.status === 200) {
   
         return true
     }
     
    return false
  }


const Regex = RegExp(/^\s?[A-Z0–9]+[A-Z0–9._+-]{0,}@[A-Z0–9._+-]+\.[A-Z0–9]{2,4}\s?$/i);

interface SignUpProps {
    name?: any;
    value?: any;
 }
 interface SignUpState {
    name : string,
    email : string,
    comments : string,
    isSubmitted: boolean,
    failedSubmit: boolean,
    nameValid: boolean,
    emailValid: boolean,
    commentsValid: boolean,
    formValid: boolean,
    errors : {
       name :  string,
       email : string,
       comments : string
    }
  
 }

 export class SignUp extends React.Component<SignUpProps, SignUpState>
 {
   constructor(props: SignUpProps) {
      super(props);
      const initialState = {
         name : '',
         email : '',
         comments : '',
         isSubmitted: false,
         failedSubmit: false,
         nameValid: false,
         emailValid: false,
         commentsValid: false,
         formValid: false,

         errors : {
           name : '',
           email : '',
           comments : '',
         
         } 
       }
       this.state = initialState;
       this.handleUserInput = this.handleUserInput.bind(this);
     
       
 }
 handleUserInput = (e: any) => {

   
   e.preventDefault();
   const name = e.target.name;
   const value = e.target.value;
   this.setState(Object.assign({[name]: value}),
                 () => { this.validateField(name, value) });
 }
 validateField(fieldName: any, value: any) {

   
   let fieldValidationErrors = this.state.errors
   let nameValid = this.state.nameValid
   let emailValid = this.state.emailValid
   let commentsValid = this.state.commentsValid

   switch(fieldName) {
      case 'name':
         nameValid = value.length > 3
         fieldValidationErrors.name = value.length < 3  ? 'Must be a valid name!': '';
         break
      case 'email':
         emailValid = Regex.test(value)
         fieldValidationErrors.email = Regex.test(value)? '': 'Email is invalid!';
      break
      case 'comments':
         commentsValid = value.length > 8
         fieldValidationErrors.comments =  value.length < 8  ? "Your comment must be more than 8 characters long!": '';
         break;
         default:
            break;



   }
   this.setState({errors: fieldValidationErrors,
   nameValid: nameValid,
   emailValid: emailValid,
   commentsValid: commentsValid}, this.validateForm);
   
 }

 // not letting user submit form until all fields are filled in correctly.
 validateForm() {
   this.setState({formValid: this.state.nameValid && this.state.emailValid && this.state.commentsValid})
  /*  console.log('formValid ' + this.state.formValid) */
 }


      handleSubmit = async (event : any) => {
       
        event.preventDefault();
        let validity = true;
        Object.values(this.state.errors).forEach(
          (val) => val.length > 0 && (validity = false)
        );
        if(validity === true && this.state.formValid && this.state.name !== '' && this.state.email !== '' && this.state.comments !== ''){
       
         let userObjects = ({'Name': this.state.name, 'Email': this.state.email, 'Comments':  this.state.comments})
         let json = JSON.stringify(userObjects)
         await submitData('https://win22-webapi.azurewebsites.net/api/contactform', 'POST', json,)
         console.log(userObjects)
       
         this.setState({name: '', email: '', comments: ''})
         this.setState({isSubmitted: true})
         this.setState({failedSubmit: false})
      
/*         console.log("Registering can be done"); */
       
       
       } else{
           console.log("We cannot submit your comments right now!")
           this.setState({name: '', email: '', comments: ''})
           this.setState({isSubmitted: false})
           this.setState({failedSubmit: true})
          
        }
      
      }
      
    
    render() {
        const {errors} = this.state
  
    
        return (

    
    
         <section className="form-comments">
             
         
     
            <div className="forms-input">
                <div className="container">
              
                   {
                      this.state.isSubmitted ? (
                     <div className='alert alert-success text-center'  >
                         <div className='header'>
                                
                                     <h2 >Thank you for your comments!</h2>
                                     <p>We will get back to you as soon as possible</p>
                              
                         </div>
                     </div> )  : (<></>)
     }    
     
     {
                      this.state.failedSubmit ? (
                     <div className='alert alert-danger text-center'  >
                         <div className='header'>
                                 
                                     <h2 >Something went wrong!</h2>
                                     <p>We couldn't submit your comments right now.</p>
                                
                         </div>
                     </div> ) : (<></>)
     }
     
                     
        
                   
                      <form onSubmit={this.handleSubmit} noValidate >
               
                         <div className="header">
                         <h2>Come in Contact with Us </h2>
                   
                         </div>
                     <div className="item-1">
                        
                       <input  id="name" name="name" className={ (errors.name) ?  'error': '' }  type="text"   value={this.state.name}   onChange={this.handleUserInput}    placeholder="Your Name"   />                 
                         
                       {errors.name.length > 0 &&  <span style={{color: "red"}}>{errors.name}</span>}
                     </div>
                       
                     <div className="item-2">
                    
                         <input id='email' name="email" className={ (errors.email) ?  'error': '' }  type='email'   value={this.state.email}   onChange={this.handleUserInput}   placeholder='Your Mail' /> 
                         {errors.email.length > 0 &&  <span style={{color: "red"}}>{errors.email}</span>}
     
                     </div>
                     <div className="item-3">
                           <textarea name="comments" className={ (errors.comments) ?  'error': '' }   placeholder="Comments"  value={this.state.comments}   onChange={this.handleUserInput}   id="comments" rows={8}></textarea>
                           {errors.comments.length > 0 &&  <span style={{color: "red"}}>{errors.comments}</span>}
                 
                           <div className="mt-4"> <button type="submit" className=" post-button" disabled={!this.state.formValid} >Post Comments</button>
                         </div> 
                        
                     </div>
                  
            </form>
            
     
                </div> 
            </div>
     
            
            </section>
     
            
       )
              
    }
   }


