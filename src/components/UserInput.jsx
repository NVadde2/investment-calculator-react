import { useState } from 'react';
import Results from './Results';

export default function UserInput() {
    const [userInput, setUserInput] = useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10
    });

    const inputIsValid = Object.values(userInput).every(value => value > 0);

    function handleChange(event) {
        const { name, value } = event.target;
        setUserInput(prevInput => ({
            ...prevInput,
            // The "+" operator is used to convert the string value from the input field to a number, since event.target.value is always a string even when type="number" is used in the input field
            [name]: +value
        }));
    }

    return (
        <>
            <section id="user-input">
                <div className="input-group">
                    <p>
                        <label htmlFor="initial-investment">Initial Investment</label>
                        <input type="number" id="initial-investment" name="initialInvestment" required onChange={handleChange} value={userInput.initialInvestment} />
                    </p>
                    <p>
                        <label htmlFor="annual-investment">Annual Investment</label>
                        <input type="number" id="annual-investment" name="annualInvestment" required onChange={handleChange} value={userInput.annualInvestment} />
                    </p>
                </div>
                <div className="input-group">
                    <p>
                        <label htmlFor="expected-return">Expected Return (%)</label>
                        <input type="number" id="expected-return" name="expectedReturn" required onChange={handleChange} value={userInput.expectedReturn} />
                    </p>
                    <p>
                        <label htmlFor="investment-duration">Investment Duration (years)</label>
                        <input type="number" id="investment-duration" name="duration" required onChange={handleChange} value={userInput.duration} />
                    </p>
                </div>
            </section>
            {!inputIsValid && <p className="error">Please enter valid positive numbers for all fields.</p>}
            {inputIsValid && <Results input={userInput} />}
        </>
    );
}