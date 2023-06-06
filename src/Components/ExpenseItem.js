import './ExpenseItem.css';
function ExpenseItem(){
    const expenseDate=new Date(2021,2,28);
    const expenseTitle='CAR INSURANCE';
    const expenseAmount=2000;
    const expenseLocationOfexpenditure='Honda company,New York';
    return (
    <div className='expense-item'>
        <div>{expenseDate.toISOString()}</div>
       
        <div className='expense-item__description'>
            <h2>{expenseTitle}</h2>
            <div className='expense-item__location'>
                <h2>{expenseLocationOfexpenditure}</h2></div>
            <div className='expense-item__price'>Rs{expenseAmount}</div>

</div>
    
    </div>
    );
}

export default ExpenseItem;