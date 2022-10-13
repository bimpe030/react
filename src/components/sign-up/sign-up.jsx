import React from "react";
import './sign-up.css';
import content from "../../static";
import { useForm } from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Link } from 'react-router-dom';


const schema = yup.object().shape(
  {
    fullname: yup.string().required("full name is a required field").min(6),
    email: yup.string().required("Please enter a valid email"),
    password: yup.string().required("please enter password").matches(
      /^(?=.*[A-Za])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    )
  }
);

const SignUp = () => {
  
  
  const { register, handleSubmit, formState: {errors} } = useForm(
    {
      resolver: yupResolver(schema)
    }
  );

  const onSubmit = (data) => {
    console.log( data);
    console.log("sign up successful");
  };

  return (
    <div className="sign-up">
        <h1>CHATSCRUM</h1>
        <h1>Don't Have an account?</h1>
        <h3>Sign up here!</h3>

        <form onSubmit={handleSubmit(onSubmit)}>
          {content.inputs.map((input,key) =>{
            return (
              <div key={key}>
                <label htmlFor={input.name}>{input.label}</label>
                <br/>
                <input type={input.type} name={input.name} {...register(input.name)} />
                <br/>
                <span className="message">{errors[input.name]?.message}</span>
              </div>
            )
          })}

          <label htmlFor="options">User Type</label>
          <select id="options">
            <option value="owner">Owner</option>
            <option value="user">User</option>
          </select>

          <button>SIGN UP</button>

        </form>

        <p>Have an account? <Link to='/signin'>SIGIN IN</Link></p>
        <p><Link to='/'>Back to Home</Link></p>
    </div>    

   )

 }

export default SignUp;