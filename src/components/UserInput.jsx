import { useState } from 'react';

export default function UserInput() {
    const [userInput, setUserInput] = useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        investmentDuration: 10
    });

    function handleChange(event) {
        const { name, value } = event.target;
        setUserInput(prevInput => ({
            ...prevInput,
            [name]: value
        }));
    }

    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label htmlFor="initial-investment">Initial Investment</label>
                    <input type="number" id="initial-investment" name="initial-investment" required onChange={handleChange} value={userInput.initialInvestment} />
                </p>
                <p>
                    <label htmlFor="annual-investment">Annual Investment</label>
                    <input type="number" id="annual-investment" name="annual-investment" required onChange={handleChange} value={userInput.annualInvestment} />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label htmlFor="expected-return">Expected Return (%)</label>
                    <input type="number" id="expected-return" name="expected-return" required onChange={handleChange} value={userInput.expectedReturn} />
                </p>
                <p>
                    <label htmlFor="investment-duration">Investment Duration (years)</label>
                    <input type="number" id="investment-duration" name="investment-duration" required onChange={handleChange} value={userInput.investmentDuration} />
                </p>
            </div>
        </section>
    );
}