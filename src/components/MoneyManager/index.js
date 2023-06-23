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
    incomeAmount: 0,
    expenseAmount: 0,
    balanceAmount: 0,
  }

  onclickDelete = id => {
    const {transactionItems} = this.state
    const itemDetails = transactionItems.find(item => item.id === id)

    const filteredProjects = transactionItems.filter(
      eachprojectDetails => eachprojectDetails.id !== id,
    )
    console.log(filteredProjects)
    this.setState({transactionItems: filteredProjects})
    if (filteredProjects.length >= 1) {
      if (itemDetails.type === 'INCOME') {
        this.setState(prevState => ({
          incomeAmount:
            parseInt(prevState.incomeAmount) -
            parseInt(itemDetails.incomeAmount),
        }))
        this.setState(prevState => ({
          balanceAmount:
            parseInt(prevState.incomeAmount) -
            parseInt(prevState.expenseAmount),
        }))
      } else if (itemDetails.type === 'EXPENSES') {
        this.setState(prevState => ({
          incomeAmount:
            parseInt(prevState.incomeAmount) +
            parseInt(itemDetails.expenseAmount),
          expenseAmount:
            parseInt(prevState.expenseAmount) -
            parseInt(itemDetails.expenseAmount),
        }))
        this.setState(prevState => ({
          balanceAmount:
            parseInt(prevState.incomeAmount) -
            parseInt(prevState.expenseAmount),
        }))
      }
    } else {
      this.setState({
        incomeAmount: 0,
        expenseAmount: 0,
        balanceAmount: 0,
      })
    }
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
    this.setState(prevState => ({
      transactionItems: [...prevState.transactionItems, newItem],
    }))
    console.log(type)
    if (newItem.type === 'INCOME') {
      this.setState(prevState => ({
        title: '',
        amount: '',
        type: '',
        incomeAmount:
          parseInt(prevState.incomeAmount) + parseInt(newItem.amount),
      }))
    } else if (newItem.type === 'EXPENSES') {
      this.setState(prevState => ({
        title: '',
        amount: '',
        type: '',
        expenseAmount:
          parseInt(prevState.expenseAmount) + parseInt(newItem.amount),
      }))
    }
    this.setState(prevState => ({
      balanceAmount:
        parseInt(prevState.incomeAmount) - parseInt(prevState.expenseAmount),
    }))
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
    <div className="name-card-container">
      <h2 className="customer-name">
        Hi, Richard <br />
        <p className="suffix">
          Welcome back to your{' '}
          <span className="span-element">Money Manager</span>
        </p>
      </h2>
    </div>
  )

  renderAddTransactions = () => {
    const {title, amount} = this.state
    return (
      <div className="add-transaction">
        <h3>Add Transaction</h3>
        <form onSubmit={this.addTransItem}>
          <label htmlFor="title" className="label">
            TITLE
          </label>
          <br />
          <input
            type="text"
            value={title}
            placeholder="TITLE"
            id="title"
            onChange={this.onChangeTitle}
            className="input-element"
          />
          <br />
          <label htmlFor="amount" className="label">
            AMOUNT
          </label>
          <br />
          <input
            type="text"
            value={amount}
            placeholder="AMOUNT"
            id="amount"
            onChange={this.onChangeAmount}
            className="input-element"
          />
          <br />
          <label htmlFor="type" className="label">
            TYPE
          </label>
          <br />
          <select
            name="type"
            id="type"
            onChange={this.onChangeType}
            className="input-element"
          >
            <option value={transactionTypeOptions[0].optionId} defaultValue>
              {transactionTypeOptions[0].displayText}
            </option>
            <option value={transactionTypeOptions[1].optionId}>
              {transactionTypeOptions[1].displayText}
            </option>
          </select>
          <br />
          <button type="submit" className="add-btn">
            Add
          </button>
        </form>
      </div>
    )
  }

  renderHistory = () => {
    const {transactionItems} = this.state
    return (
      <div className="history-container">
        <h3>History</h3>
        <div className="heading">
          <p>Title</p>
          <p>Amount</p>
          <p>Type</p>
        </div>
        <div>
          <ul>
            {transactionItems.map(eachItem => (
              <TransactionItem
                key={eachItem.id}
                list={eachItem}
                id={eachItem.id}
                onDelete={this.onclickDelete}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }

  render() {
    const {incomeAmount, balanceAmount, expenseAmount} = this.state
    return (
      <div className="money-manager-container">
        {this.renderNameCard()}
        <div>
          <MoneyDetails
            incA={incomeAmount}
            expA={expenseAmount}
            balA={balanceAmount}
          />
        </div>
        <div className="trans-his-container">
          {this.renderAddTransactions()}
          {this.renderHistory()}
        </div>
      </div>
    )
  }
}

export default MoneyManager
