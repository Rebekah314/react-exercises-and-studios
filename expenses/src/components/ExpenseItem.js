import React from 'react'
import './ExpenseItem.css'

export default function ExpenseItem(props) {
  return (
    <li>{props.date} {props.name} {props.price} </li>
  )
}
