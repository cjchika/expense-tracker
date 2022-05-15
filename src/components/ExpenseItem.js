import './ExpenseItem.css';

function ExpenseItem(props) {
	const expenseDate = new Date(2022, 4, 15)
	const expenseTitle = 'House Rent';
	const expenseAmount = 500.99;

  return ( 
    <div className='expense-item'>
      <div>{expenseDate.toISOString()}</div>
      <div className='expense-item__description'>
        <h2>{expenseTitle}</h2>
        <div className='expense-item__price'>${expenseAmount}</div>
      </div>
    </div> 
	);
}

export default ExpenseItem;