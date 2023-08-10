import './ExpenseDate.css';

const ExpenseDate = (props) => {
    var month = props.date.toLocaleString('en-US', { month: 'long' });
    var day = props.date.toLocaleString('en-US', { day: '2-digit' });
    var year = props.date.getFullYear();

    return (
        <div className='expense-date'>
            <div className='expense-date__month'>{month}</div>
            <div className='expense-date__day'>{day}</div>
            <div className='expense-date_year'>{year}</div>
        </div>
    )
}

export default ExpenseDate;