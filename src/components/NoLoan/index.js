import React, { useState } from 'react';

const NoLoan = () => {
    const [loanApplicationResults, setLoanApplicationResults] = useState({});

    return (
        <div className="no_loan">
            <div>
                <h2>{loanApplicationResults.message}</h2>
            </div>
        </div>
    );
}

export default NoLoan;
