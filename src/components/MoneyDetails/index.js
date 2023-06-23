import './index.css'

const MoneyDetails = props => {
  const {incA, expA, balA} = props
  return (
    <div className="money-details-container">
      <div className="balance-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="common-img"
        />
        <div>
          <p>Your Balance</p>
          <p data-testid="balanceAmount">Rs {balA}</p>
        </div>
      </div>
      <div className="income-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="common-img"
        />
        <div>
          <p>Your Income</p>
          <p data-testid="incomeAmount">Rs {incA}</p>
        </div>
      </div>
      <div className="expenses-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="common-img"
        />
        <div>
          <p>Your Expenses</p>
          <p data-testid="expensesAmount">Rs {expA}</p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
