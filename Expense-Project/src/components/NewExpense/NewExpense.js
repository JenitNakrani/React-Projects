import React,{useState} from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [showForm,setShowForm] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
    setShowForm(false);
  };

  const handleForm = () => {
    setShowForm(true);
  }
  var hideForm = () => {
    setShowForm(false);
  }

  return (
    <div className='new-expense'>
      {!showForm && <button onClick={handleForm}>Add New Expense</button>}
      {showForm && <ExpenseForm onCancel={hideForm} onSaveExpenseData={saveExpenseDataHandler} />}
    </div>
  );
};

export default NewExpense;