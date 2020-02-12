import React, { useState } from 'react';
import useSignupForm from '../../customHooks/signupHooks';

const SignupForm = () => {
    const createSignup = () => {
        alert(`account info
            username = ${inputs.username}
            password = ${inputs.password}
            confirmPassword = ${inputs.confirmPassword}
            `)
    }
    const { inputs, errors, handleInputChange, handleSubmit } = useLoanForm(createSignup);

    return (
        <form onSubmit={handleSubmit}>
            <div className="sigunup_form">
                <div>
                    <label>Username</label>
                    <input type='text' id='username' name='username' onChange={handleInputChange} value={inputs.username} />
                    <div className='input_errors'>{errors.username}</div>
                </div>

                <div>
                    <label>Password</label>
                    <input type='password' id='password' name='password' onChange={handleInputChange} value={inputs.password} />
                </div>

                <div>
                    <label>Confirm Password</label>
                    <input type='password' id='confirmPassword' name='confirmPassword' onChange={handleInputChange} value={inputs.confirmPassword} />
                </div>

                <button type="submit">Submit</button>
            </div>
        </form>
    );
}

export default SignupForm;
