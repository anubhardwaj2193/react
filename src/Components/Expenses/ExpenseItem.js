import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import Card from '../UI/Card'
import React from 'react';
const ExpenseItem = (props) => {
    const deleteHandler=()=>{
        console.log('Expense deleted')
    }
    
    return (

       <Card className='expense-item'>
        <ExpenseDate date ={props.date} />
    
        
        <ExpenseDetails  title={props.title} location={props.location} amount={props.amount}  />
<button onClick={deleteHandler}>Delete Expense</button>
        </Card>
        
        );
        

    
    
}
export default ExpenseItem;
