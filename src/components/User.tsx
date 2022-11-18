//User.tsx
import React from "react";
import Wrapper from "./Wrapper";


interface UserProps {
  name: string;
  email: string;
  comments?: string[];
  
  doSomething: React.MouseEventHandler;
}

const User = ({
  name,
  email,
  comments,
 
  doSomething,
}: UserProps) => {
  return (
    <Wrapper>
      <form action="">
      <input type="text" value="Your full name: " />
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <input type="email" value="your email " />    
     <textarea name="" id={""}  rows={8}></textarea> 
      
   
    

      <button onClick={doSomething} style={{padding: '15px 40px'}}>POST COMMENTS</button>
      </form>
    </Wrapper>
  );
};

export default User;