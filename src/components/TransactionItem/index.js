import './index.css'

const TransactionItem = props => {
  const {list, onDelete} = props
  const {title, amount, type, id} = list
  const onClickDelete = () => {
    onDelete(id)
  }
  return (
    <li className="list">
      <div className="list-cont">
        <p>{title}</p>
        <p>{amount}</p>
        <p>{type}</p>
        <button
          type="button"
          className="delete-button"
          onClick={onClickDelete}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            alt="delete"
            className="delete-icon"
          />
        </button>
      </div>
    </li>
  )
}

export default TransactionItem
