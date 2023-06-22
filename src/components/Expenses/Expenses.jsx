import React, { useState } from 'react'
import Card from '../UI/Card'
//import ExpenseItem from './ExpenseItem'
import './Expenses.css'
import ExpensesChart from './ExpensesChart'
import ExpensesFilter from './ExpensesFilter'
import ExpensesList from './ExpensesList'




const Expenses = (props) => {
    let expenses = props.items

    const [filteredYear, setfilteredYear] = useState('2020')

    const filterChangeHandler = (seletedYear) => {
        setfilteredYear(seletedYear)
    }

    const filteredExpenses = expenses.filter((item) => {
        return item.date.getFullYear().toString() === filteredYear
    })

    // let expensesContent = <p>NO Expenses Found</p>

    // if (filteredExpenses.length > 0) {
    //     expensesContent = filteredExpenses.map(item => <ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date} />);
    // }

    return (
        <Card className='expenses'>
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            <ExpensesChart expenses={filteredExpenses} />
            <ExpensesList items={filteredExpenses} />


            {/* {expensesContent} */}

            {/* {filteredExpenses.map(item => <ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date} />)} */}

            {/*  <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date} />
            <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date} />
             <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date} />
             <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date} />
             <ExpenseItem title={expenses[4].title} amount={expenses[4].amount} date={expenses[4].date} /> */}
        </Card>
    )
}

export default Expenses