import React from 'react'

class ExpenseItem extends React.Component {
  constructor(props) {
    super(props)
    const {expense} = props
    this.state = {
      isEditing: false,
      amount: expense.amount,
    }

    // Bind methods to the component instance
    this.handleEdit = this.handleEdit.bind(this)
    this.handleSave = this.handleSave.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleEdit() {
    this.setState({isEditing: true})
  }

  handleSave() {
    const {index, expense, editExpense} = this.props
    const {amount} = this.state
    editExpense(index, {...expense, amount: parseFloat(amount)})
    this.setState({isEditing: false})
  }

  handleChange(event) {
    this.setState({
      amount: event.target.value,
    })
  }

  handleDelete() {
    const {index, deleteExpense} = this.props
    deleteExpense(index)
  }

  render() {
    const {
      expense: {description, amount, category},
    } = this.props
    const {isEditing, amount: editingAmount} = this.state

    return (
      <li>
        <div>
          {isEditing ? (
            <>
              <input
                type="number"
                value={editingAmount}
                onChange={this.handleChange}
              />
              <button type="button" onClick={this.handleSave}>
                Save
              </button>
            </>
          ) : (
            <>
              <span>
                {description} - ${amount} - {category}
              </span>
              <button type="button" onClick={this.handleEdit}>
                Edit
              </button>
            </>
          )}
          <button type="button" onClick={this.handleDelete}>
            Delete
          </button>
        </div>
      </li>
    )
  }
}

export default ExpenseItem
