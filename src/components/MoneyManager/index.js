import {Component} from 'react'
import './index.css'
import {v4 as uuid4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

const initialTransactionItems = []

class MoneyManager extends Component {
  state = {
    transactionItems: initialTransactionItems,
    title: '',
    amount: '',
    type: '',
  }

  addTransItem = event => {
    event.preventDefault()
    const {title, amount, type} = this.state
    const newItem = {
      id: uuid4(),
      title,
      amount,
      type,
    }
    console.log(newItem)
    this.setState(prevState => ({
      transactionItems: [...prevState.transactionItems, newItem],
    }))
    this.setState({
      title: '',
      amount: '',
      type: '',
    })
  }

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeAmount = event => {
    this.setState({amount: event.target.value})
  }

  onChangeType = event => {
    this.setState({type: event.target.value})
  }

  renderNameCard = () => (
    <div>
      <h1>Hi, Richard</h1>
      <p>
        Welcome back to your <span>Money Manager</span>
      </p>
    </div>
  )

  renderAddTransactions = () => (
    <div>
      <h1>Add Transaction</h1>
      <form onSubmit={this.addTransItem}>
        <label htmlFor="title">TITLE</label>
        <br />
        <input
          type="text"
          placeholder="TITLE"
          id="title"
          onChange={this.onChangeTitle}
        />
        <br />
        <label htmlFor="amount">AMOUNT</label>
        <br />
        <input
          type="text"
          placeholder="AMOUNT"
          id="amount"
          onChange={this.onChangeAmount}
        />
        <br />
        <label htmlFor="type">TYPE</label>
        <br />
        <select id="type" onChange={this.onChangeType}>
          <option id={transactionTypeOptions[0].optionId}>
            {transactionTypeOptions[0].displayText}
          </option>
          <option id={transactionTypeOptions[0].optionId}>
            {transactionTypeOptions[1].displayText}
          </option>
        </select>
        <br />
        <button type="submit">Add</button>
      </form>
    </div>
  )

  renderHistory = () => {
    const {transactionItems} = this.state
    return (
      <div>
        <h1>History</h1>
        <TransactionItem list={transactionItems} />
      </div>
    )
  }

  render() {
    return (
      <div>
        {this.renderNameCard()}
        <div>
          <MoneyDetails />
        </div>
        <div>
          {this.renderAddTransactions()}
          {this.renderHistory()}
        </div>
      </div>
    )
  }
}

export default MoneyManager
