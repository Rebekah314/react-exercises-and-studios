import React from 'react'
import ExpenseItem from './ExpenseItem'

export default function ExpenseList(props) {
  const renderList = () => {
    <ul>
        {props.expenses.map(expense => <ExpenseItem date={expense.date} name={expense.name} price={expense.price} key={expense.id}/>)}
    </ul>
  }
  const showPage = () => {
    props.expenses.length === 0 ? <h1>No expenses added.</h1> : renderList();
  
  }
  return (
    showPage()
    )
}
