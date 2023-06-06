import './index.css'

const MoneyDetails = () => (
  <div>
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
        alt="balance"
      />
      <div>
        <p>Your Balance</p>
        <p>Rs</p>
      </div>
    </div>
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
        alt="income"
      />
      <div>
        <p>Your Income</p>
        <p>Rs</p>
      </div>
    </div>
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
        alt="expenses"
      />
      <div>
        <p>Your Expenses</p>
        <p>Rs</p>
      </div>
    </div>
  </div>
)

export default MoneyDetails
