import logo from './logo.svg';
import './App.css';
import Banner from './components/Banner.js'
import ExpenseItem from './components/ExpenseItem';
import ExpenseList from './components/ExpenseList';

function App() {
  const DUMMY_DATA = [
    {
      id: 0,
      date: "6/18/23",
      name: "Girl Scout Cookies",
      price: 3.99,
    },
    {
      id: 1,
      date: "6/19/23",
      name: "Geese",
      price: 300.98,
    },
    {
      id: 2,
      date: "6/20/23",
      name: "Hearing Doctor",
      price: 23.00,
    }
  ]

  return (
    <div className="App">
      <Banner />
      <ExpenseList expenses={DUMMY_DATA} />


    </div>
  );
}

export default App;
