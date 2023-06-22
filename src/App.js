import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";


function App() {
  const DUMMY_EXPENSES = [
    {
      id: 'e1',
      title: "Car Insurance",
      amount: 5000,
      date: new Date(2021, 3, 1)
    },
    {
      id: 'e2',
      title: "New TV",
      amount: 80000,
      date: new Date(2022, 2, 14)
    },
    {
      id: 'e3',
      title: "Air Conditioner",
      amount: 39400,
      date: new Date(2021, 5, 10)
    },
    {
      id: 'e4',
      title: "New Mobile",
      amount: 13999,
      date: new Date(2020, 11, 27)
    },
    {
      id: 'e5',
      title: "Laptop",
      amount: 51500,
      date: new Date(2021, 1, 1)
    }
  ]

  const [expenses, setexpenses] = useState(DUMMY_EXPENSES)

  const addExpenseHandler = (expense) => {
    setexpenses((prevExpenses) => {
      return [expense, ...prevExpenses]
    })
  }

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
