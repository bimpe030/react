import React from "react";
import './sign-in.css';
import content from "../../static";
import { Link } from 'react-router-dom';

const SignIn = () => (

  <div className="sign-in">
       <h1>CHATSCRUM</h1>    
        <h1>Have an account Already</h1>
        <h3>sign in here!</h3>

        <form>

             {content.inputTwo.map((input,key) =>{
            return (
              <div key={key}>
                <label htmlFor={input.name}>{input.label}</label>
                <br/>
                <input type={input.type} name={input.name} />
              </div>
            )
          })}

            

            <Link to="/scrumboard"><button>SIGN IN</button></Link>

        </form>
    
        <p>Don't have an account? <Link to='/signup'>SIGIN UP</Link></p>
            <p><Link to='/'>Back to Home</Link></p>
    </div>
)

export default SignIn;