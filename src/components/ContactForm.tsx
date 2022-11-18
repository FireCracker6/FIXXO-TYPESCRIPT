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
         errors : {
           name : '',
           email : '',
           comments : '',
         
         } 
       }
       this.state = initialState;
       this.handleChange = this.handleChange.bind(this);
     
       
 }

    handleChange = (event : any) => {
        event.preventDefault();
        const { name, value } = event.target;
        let errors = this.state.errors;
  switch (name) {
    case 'name':
       errors.name = value.length < 3 ? 'Must be a valid name!': '';
       break;
    case 'email':
       errors.email = Regex.test(value)? '': 'Email is not valid!';
       break;
    case 'comments':
       errors.comments = value.length < 8 ? 'Password must be eight characters long!': '';
       break;
    default:
      break;
  }
      this.setState(Object.assign(this.state, { errors,[name]: value }));
      console.log(this.state.errors);
      }
      handleSubmit = async (event : any) => {

        event.preventDefault();
        let validity = true;
        Object.values(this.state.errors).forEach(
          (val) => val.length > 0 && (validity = false)
        );
        if(validity == true){
        if (this.state.errors.name === null && this.state.errors.email === null && this.state.errors.comments === null) { 
         let userObjects = ({'Name': this.state.name, 'Email': this.state.email, 'Comments':  this.state.comments})
         let json = JSON.stringify(userObjects)
         await submitData('https://win22-webapi.azurewebsites.net/api/contactform', 'POST', json,)
         console.log(userObjects)
      }  
         this.setState({isSubmitted: true})
         this.setState({failedSubmit: false})
      
      
 
      
        event.target.reset();
 
        console.log("Registering can be done");
      
       
       } else{
           console.log("You cannot be registered!!!")
           this.setState({isSubmitted: false})
           this.setState({failedSubmit: true})

        }
      }
    
    render() {
        const {errors} = this.state

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
   if (this.state.isSubmitted) {
   return (
      <>
      <div className='alert alert-success text-center'  >
      <div className='header'>
             
                  <h2 >Thank you for your comments!</h2>
                  <p>We will get back to you as soon as possible</p>
           
      </div>
  </div>

  </>
  
   )}

    else {
      return (
         <div className="wrapper">
         <div className="form-wrapper">
             <h2>Come in Contact With Us</h2>
             <form action="" onSubmit={this.handleSubmit} noValidate >
             <div className='username'>
               <label htmlFor="name">Full Name</label>
               <input type='text' name='name' onChange={this.handleChange} placeholder="Your FullName"/>
                {errors.name.length > 0 &&  <span style={{color: "red"}}>{errors.name}</span>}
</div>
                 <div className='email'>
               <label htmlFor="email">Email</label>
               <input type='email' name='email' onChange={this.handleChange} placeholder="Your Email" />
               {errors.email.length > 0 &&  <span style={{color: "red"}}>{errors.email}</span>}
            </div>
            <div className='password'>
               <label htmlFor="comments">Comments</label>
             <textarea name="comments" id="comments" cols={30} rows={10} onChange={this.handleChange} placeholder="Your comments.."></textarea>

               {errors.comments.length > 0 &&  <span style={{color: "red"}}>{errors.comments}</span>}
            </div>   
            <div className="submit">
             <button  className="form-button">POST COMMENTS</button>
            </div>
             </form>
         </div>
     </div>
      )
    }
}}