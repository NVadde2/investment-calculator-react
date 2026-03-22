export default function UserInput() {
    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label htmlFor="initial-investment">Initial Investment</label>
                    <input type="number" id="initial-investment" name="initial-investment" required />
                </p>
                <p>
                    <label htmlFor="annual-investment">Annual Investment</label>
                    <input type="number" id="annual-investment" name="annual-investment" required />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label htmlFor="expected-return">Expected Return (%)</label>
                    <input type="number" id="expected-return" name="expected-return" required />
                </p>
                <p>
                    <label htmlFor="investment-duration">Investment Duration (years)</label>
                    <input type="number" id="investment-duration" name="investment-duration" required />
                </p>
            </div>
        </section>
    );
}