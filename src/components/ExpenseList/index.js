import React from 'react'
import ExpenseItem from '../ExpenseItem'

class ExpenseList extends React.Component {
  render() {
    const {expenses, deleteExpense, editExpense} = this.props
    return (
      <div>
        <h2>Expenses</h2>
        <ul>
          {expenses.map((expense, index) => (
            <ExpenseItem
              key={expense.id} // Use a unique identifier as the key
              expense={expense}
              deleteExpense={deleteExpense}
              editExpense={editExpense}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default ExpenseList
