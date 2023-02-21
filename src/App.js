import './App.css';
import NewExpense from './components/NewExpense/NewExpense';
import ExpenseItem from './components/ExpenseItem';
const expenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 885.23,
    date: new Date(2023, 2, 4),
  },
  {
    id: 'e2',
    title: 'Car insurance',
    amount: 85.89,
    date: new Date(2023, 2, 6),
  },
  { id: 'e3', title: 'Sugar Cane', amount: 59.53, date: new Date(2023, 2, 20) },
  {
    id: 'e4',
    title: 'Demio Mazda',
    amount: 45.77,
    date: new Date(2023, 2, 6),
  },
];

function App() {
  return (
    <div className="App">
      <h1>App file</h1>
      <NewExpense />

      {expenses.map((expe) => (
        <div key={expe.id}>
          {' '}
          <ExpenseItem
            title={expe.title}
            date={expe.date}
            amount={expe.amount}
          />
        </div>
      ))}
    </div>
  );
}

export default App;
