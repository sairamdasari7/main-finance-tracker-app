import React from 'react'

class ExpenseForm extends React.Component {
  state = {
    description: '',
    amount: '',
    category: '',
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleAddExpense = () => {
    const {description, amount, category} = this.state
    if (description && amount && category) {
      const {addExpense} = this.props
      addExpense({description, amount: parseFloat(amount), category})
      this.setState({
        description: '',
        amount: '',
        category: '',
      })
    }
  }

  render() {
    const {description, amount, category} = this.state
    return (
      <div>
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={description}
          onChange={this.handleChange}
        />
        <input
          type="number"
          name="amount"
          placeholder="Amount"
          value={amount}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={category}
          onChange={this.handleChange}
        />
        <button type="button" onClick={this.handleAddExpense}>
          Add Expense
        </button>
      </div>
    )
  }
}

export default ExpenseForm
