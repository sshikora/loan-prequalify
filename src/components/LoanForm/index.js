import React, { useState }  from 'react';
import useLoanForm from '../../customHooks/loanHooks';
import SignUp from '../SignUp'

const LoanForm = () => {
  const createLoan = () => {
    alert (`loan info
            Purchase Price = ${inputs.purchasePrice}
            Make = ${inputs.autoMake}
            Model = ${inputs.autoModel}
            Income = ${inputs.yearlyIncome}
            Score = ${inputs.creditScore}`)
    return
  }
  const {inputs, errors, handleInputChange, handleSubmit} = useLoanForm(createLoan);

  return (
    <form onSubmit={handleSubmit}>
      <div className="loan_form">
        <div>
          <label>Auto Purchase Price</label>
          <input type='text' id='purchasePrice' name='purchasePrice' onChange={handleInputChange} value={inputs.purchasePrice}/>
          <div className='input_errors'>{errors.purchasePrice}</div>
        </div>

        <div>
          <label>Auto Make</label>
          <input type='text' id='autoMake' name='autoMake' onChange={handleInputChange} value={inputs.autoMake}/>
        </div>

        <div>
          <label>Auto Model</label>
          <input type='text' id='autoModel' name='autoModel' onChange={handleInputChange} value={inputs.autoModel}/>
        </div>

        <div>
          <label>Estimated Yearly Income</label>
          <input type='text' id='yearlyIncome' name='yearlyIncome' onChange={handleInputChange} value={inputs.yearlyIncome}/>
          <div className='input_errors'>{errors.yearlyIncome}</div>
        </div>

        <div>
          <label>Estimated Credit Score</label>
          <input type='text' id='creditScore' name='creditScore' onChange={handleInputChange} value={inputs.creditScore}/>
          <div className='input_errors'>{errors.creditScore}</div>
        </div>

        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default LoanForm;
