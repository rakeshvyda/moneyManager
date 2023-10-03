import './index.css'

const MoneyDetails = props => {
  const {transactionList} = props
  console.log(transactionList)

  let balanceAmount = 0
  let incomeAmount = 0
  let expensesAmount = 0

  if (transactionList.length > 0) {
    const incomeAmountList = transactionList.map(
      eachItem => eachItem.incomeAmount,
    )
    incomeAmount = incomeAmountList.reduce(
      (currentValue, accumilator) => currentValue + accumilator,
    )

    const expensesList = transactionList.map(eachItem => eachItem.expenseAmount)
    expensesAmount = expensesList.reduce(
      (currentValue, accumilator) => currentValue + accumilator,
    )

    balanceAmount = incomeAmount - expensesAmount
  }
  const element = (
    <>
      <div className="balance-income-expense-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          className="details-image"
          alt="balance"
        />
        <div className="balance-details-container">
          <p className="balance-tag">Your Balance</p>
          <p className="balance" data-testid="balanceAmount">
            Rs {balanceAmount}
          </p>
        </div>
      </div>
      <div className="balance-income-expense-container back-blue">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png "
          className="details-image"
          alt="income"
        />
        <div className="balance-details-container">
          <p className="balance-tag">Your Income</p>
          <p className="balance" data-testid="incomeAmount">
            Rs {incomeAmount}
          </p>
        </div>
      </div>
      <div className="balance-income-expense-container back-purple">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png "
          className="details-image"
          alt="expenses"
        />
        <div className="balance-details-container">
          <p className="balance-tag">Your Expenses</p>
          <p className="balance" data-testid="expensesAmount">
            Rs {expensesAmount}
          </p>
        </div>
      </div>
    </>
  )
  return element
}

export default MoneyDetails
