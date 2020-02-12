import React, { useState }  from 'react';
import {
  Redirect
} from "react-router-dom";
import useLoanForm from '../../customHooks/loanHooks';
import loanRequest from '../../fetchRequests'

const LoanForm = () => {
  const [loanApplicationResults, setLoanApplicationResults] = useState({});
  const createLoan = () => {    
    const loanApplication = { purchasePrice: inputs.purchasePrice, 
                              autoMake: inputs.autoMake, 
                              autoModel: inputs.autoModel, 
                              yearlyIncome: inputs.yearlyIncome, 
                              creditScore: inputs.creditScore}
    
    const loanResults = loanRequest(loanApplication)
    setLoanApplicationResults(loanResults)
    if (loanApplicationResults.application){
      window.location.href = '/signup'
    } else {
      window.location.href = '/noloan'
    }
  }
  const {inputs, errors, handleInputChange, handleSubmit} = useLoanForm(createLoan);

  return (
    <form onSubmit={handleSubmit}>
      <div className="loan_form">
        <div>
          <h2>Super duper marketing info...</h2>
        </div>
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
