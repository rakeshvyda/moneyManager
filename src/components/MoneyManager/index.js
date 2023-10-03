import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

import './index.css'

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

const SelectElement = props => {
  const {details} = props
  const {optionId, displayText} = details

  if (optionId === transactionTypeOptions[0].optionId) {
    return <option value={optionId}>{displayText}</option>
  }
  return <option value={optionId}>{displayText}</option>
}

// Write your code here

class MoneyManager extends Component {
  state = {
    title: '',
    amount: '',
    transactionType: '',
    transactionList: [],
  }

  onUpdateTitle = event => {
    this.setState({title: event.target.value})
  }

  onUpdateAmount = event => {
    this.setState({amount: event.target.value})
  }

  onTransactionType = event => {
    this.setState({transactionType: event.target.value})
  }

  createTransactionItem = event => {
    event.preventDefault()
    this.setState(previousState => {
      const {title, transactionType, amount} = this.state

      let incomeAmount = null
      let expenseAmount = null
      if (transactionType === 'INCOME') {
        incomeAmount = parseInt(amount)
        expenseAmount = 0
      } else {
        incomeAmount = 0
        expenseAmount = parseInt(amount)
      }

      const transactionItem = {
        id: uuidv4(),
        title,
        amount,
        transactionType,
        incomeAmount,
        expenseAmount,
      }

      return {
        transactionList: [...previousState.transactionList, transactionItem],
        title: '',
        transactionType: '',
        amount: '',
      }
    })
  }

  deleteTransactionItem = id => {
    this.setState(previousState => ({
      transactionList: previousState.transactionList.filter(
        eachItem => eachItem.id !== id,
      ),
    }))
  }

  render() {
    const {title, amount, transactionType, transactionList} = this.state
    const element = (
      <div className="total-container">
        <div className="money-manager-container">
          <div className="profile-container">
            <h1 className="user-name">Hi, Richard</h1>
            <p className="welcome-tag">
              Welcome Back to your
              <span className="money-manager-tag"> Money Manager</span>
            </p>
          </div>
          <div className="money-details-container">
            <MoneyDetails transactionList={transactionList} title={amount} />
          </div>
          <div className="amount-details-container">
            <form
              className="form-container"
              onSubmit={this.createTransactionItem}
            >
              <h1 className="form-title">Add Transaction</h1>
              <label className="label" htmlFor="title">
                TITLE
              </label>
              <input
                id="title"
                type="text"
                className="input-element"
                placeholder="TITLE"
                onChange={this.onUpdateTitle}
                value={title}
              />
              <label className="label" htmlFor="amount">
                AMOUNT
              </label>
              <input
                type="text"
                className="input-element"
                placeholder="AMOUNT"
                id="amount"
                onChange={this.onUpdateAmount}
                value={amount}
              />
              <label className="label" htmlFor="type">
                TYPE
              </label>
              <select
                id="type"
                className="input-element"
                onChange={this.onTransactionType}
                value={transactionType}
              >
                {transactionTypeOptions.map(eachItem => (
                  <SelectElement details={eachItem} key={eachItem.optionId} />
                ))}
              </select>
              <button className="add-button" type="submit">
                Add
              </button>
            </form>
            <ul className="amount-history-container">
              <h1 className="form-title">History</h1>
              <div className="amount-transctions-container">
                <p className="trasaction-title">Title</p>
                <p className="trasaction-title tag">Amount</p>
                <p className="trasaction-title tag">Type</p>
              </div>
              {transactionList.map(eachItem => (
                <TransactionItem
                  list={eachItem}
                  key={eachItem.id}
                  deletItem={this.deleteTransactionItem}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
    return element
  }
}

export default MoneyManager
