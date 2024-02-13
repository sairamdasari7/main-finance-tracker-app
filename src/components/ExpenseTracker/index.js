import React from 'react'
import './index.css'
import ExpenseForm from '../ExpenseForm'
import ExpenseList from '../ExpenseList'

class ExpenseTracker extends React.Component {
  state = {
    expenses: [],
  }

  handleAddExpense = expense => {
    this.setState(prevState => ({
      expenses: [...prevState.expenses, expense],
    }))
  }

  handleDeleteExpense = index => {
    this.setState(prevState => ({
      expenses: prevState.expenses.filter((_, i) => i !== index),
    }))
  }

  handleEditExpense = (index, newData) => {
    this.setState(prevState => ({
      expenses: prevState.expenses.map((expense, i) =>
        i === index ? newData : expense,
      ),
    }))
  }

  calculateTotalExpenses = () => {
    const {expenses} = this.state
    return expenses.reduce((total, expense) => total + expense.amount, 0)
  }

  render() {
    const {expenses} = this.state
    return (
      <div className="bg-container">
        <div className="expense-tracker">
          <h1>Personal Finance Expense Tracker</h1>
          <ExpenseForm addExpense={this.handleAddExpense} />
          <ExpenseList
            expenses={expenses}
            deleteExpense={this.handleDeleteExpense}
            editExpense={this.handleEditExpense}
          />
          <p>Total Expenses: {this.calculateTotalExpenses()}</p>
        </div>
      </div>
    )
  }
}

export default ExpenseTracker
