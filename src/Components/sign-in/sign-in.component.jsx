import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component'
import {signInWithGoogle} from '../../firebase/firebase.utils';

class SignIn extends React.Component{

    constructor(props)
    {
        super(props);

        this.state={    
            email:'',
            password:''
        }
    }

    HandleSubmit=event=>{
        event.preventDefault();
        this.setState({email:'',password:''});
    }

    HandleChange=event=>{
        const {value,name}=event.target;
        this.setState({[name]:value})
    }

    render(){
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                 
                 <form onSubmit={this.HandleSubmit}>
                     <FormInput name='email' label='email' type='email' value={this.state.email} HandleChange={this.HandleChange} required/>
                   
                     <FormInput name='password' label='password' type='password' value={this.state.password} HandleChange={this.HandleChange} required/>

                     <CustomButton type='submit' >SIGN IN</CustomButton>
                     <CustomButton onClick={signInWithGoogle} >SIGN IN WITH GOOGLE</CustomButton>
                 </form>
            </div>
        )
    }
}

export default SignIn;