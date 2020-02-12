import React, { useState } from 'react';

const useSignupForm = (callback) => {
    const [inputs, setInputs] = useState({});
    const [errors, setErrors] = useState({});

    const handleSubmit = (event) => {
        if (event) {
            event.preventDefault();
        }
        callback();
    }
    const handleInputChange = (event) => {
        event.persist();
        const emailRegex = /^(?=[A-Z0-9][A-Z0-9@._%+-]{5,253}$)[A-Z0-9._%+-]{1,64}@(?: (?= [A - Z0 - 9 -]{ 1, 63}\.)[A - Z0 - 9] + (?: -[A - Z0 - 9] +) *\.) { 1, 8}[A-Z]{ 2, 63 }$/gm
        const passwordRegex = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"/gm

        switch (event.target.name) {
            case 'username':
                if (!emailRegex.test(event.target.value)) {
                    setErrors(errors => ({ ...errors, [event.target.name]: 'Must be an email address' }))
                } else {
                    setErrors(errors => ({ ...errors, [event.target.name]: null }))
                }
                break
            case 'password':
                if (!passwordRegex.test(event.target.value)) {
                    setErrors(errors => ({ ...errors, [event.target.name]: 'Must have at least 8 characters and contain a number or special character' }))
                } else {
                    setErrors(errors => ({ ...errors, [event.target.name]: null }))
                }
                break
            case 'confirmPassword':
                if (!passwordRegex.test(event.target.value)) {
                    setErrors(errors => ({ ...errors, [event.target.name]: 'Must have at least 8 characters and contain a number or special character' }))
                } else {
                    setErrors(errors => ({ ...errors, [event.target.name]: null }))
                }
                break

        }
        setInputs(inputs => ({ ...inputs, [event.target.name]: event.target.value }));
    }
    return {
        handleSubmit,
        handleInputChange,
        inputs,
        errors
    };
}

export default useSignupForm;
