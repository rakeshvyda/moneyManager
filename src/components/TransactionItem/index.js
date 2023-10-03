import './index.css'

const TransactionItem = props => {
  const {list, deletItem} = props
  const {id, title, amount, transactionType} = list

  const deleteTransactionItem = () => {
    deletItem(id)
  }
  const element = (
    <li className="transaction-container">
      <p className="trasaction-title-value">{title}</p>
      <p className="trasaction-title-value tag-2">Rs {amount}</p>
      <p className="trasaction-title-value tag-3">{transactionType}</p>
      <button
        className="delete-button"
        type="button"
        onClick={deleteTransactionItem}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          className="delete-image"
          alt="delete"
        />
      </button>
    </li>
  )
  return element
}

export default TransactionItem
