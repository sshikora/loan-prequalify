import React, {useState} from 'react';

const useLoanForm = (callback) => {
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
     const currencyRegex = /^\$?\-?([1-9]{1}[0-9]{0,2}(\,\d{3})*(\.\d{0,2})?|[1-9]{1}\d{0,}(\.\d{0,2})?|0(\.\d{0,2})?|(\.\d{1,2}))$|^\-?\$?([1-9]{1}\d{0,2}(\,\d{3})*(\.\d{0,2})?|[1-9]{1}\d{0,}(\.\d{0,2})?|0(\.\d{0,2})?|(\.\d{1,2}))$|^\(\$?([1-9]{1}\d{0,2}(\,\d{3})*(\.\d{0,2})?|[1-9]{1}\d{0,}(\.\d{0,2})?|0(\.\d{0,2})?|(\.\d{1,2}))\)$/gm
     switch(event.target.name) {
      case 'purchasePrice':
        if (!currencyRegex.test(event.target.value)){
          setErrors(errors => ({...errors, [event.target.name]: 'Must be a currency'}))
        } else {
          setErrors(errors => ({...errors, [event.target.name]: null}))
        }
        break
      case 'autoMake':
        break
      case 'autoModel':
        break
      case 'yearlyIncome':
        if (!currencyRegex.test(event.target.value)){
          setErrors(errors => ({...errors, [event.target.name]: 'Must be a currency'}))
        } else {
          setErrors(errors => ({...errors, [event.target.name]: null}))
        }
        break
      case 'creditScore':
        const creditScore = Number(event.target.value)
        if (Number.isInteger(creditScore) && creditScore >= 300 && creditScore <= 850) {
          setErrors(errors => ({...errors, [event.target.name]: null}))
        } else {
          setErrors(errors => ({...errors, [event.target.name]: 'Must be a number between 300 and 850'}))
        }
        break

     }
     setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
   }
  return {
   handleSubmit,
   handleInputChange,
   inputs,
   errors
  };
}

export default useLoanForm;
