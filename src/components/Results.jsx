import { calculateInvestmentResults, formatter } from '../util/investment';

export default function Results({ input }) {
    const resultsData = calculateInvestmentResults(input);

    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {resultsData.map((data) => {

                    const totalInterest = data.valueEndOfYear - input.initialInvestment - data.annualInvestment * data.year;
                    const investedCapital = data.valueEndOfYear - totalInterest;
                    return (
                        <tr key={data.year}>
                            <td>{data.year}</td>
                            <td>{formatter.format(data.valueEndOfYear.toFixed(2))}</td>
                            <td>{formatter.format(data.interest.toFixed(2))}</td>
                            <td>{formatter.format(totalInterest.toFixed(2))}</td>
                            <td>{formatter.format(investedCapital.toFixed(2))}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    );
}