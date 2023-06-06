import './index.css'

const TransactionItem = props => {
  const {list} = props
  return (
    <div>
      <table width="30%">
        <tr>
          <td>Title</td>
          <td>Amount</td>
          <td>Type</td>
        </tr>
        <tr>{list}</tr>
      </table>
    </div>
  )
}

export default TransactionItem
