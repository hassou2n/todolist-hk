import './App.css';
import TodoList from './components/TodoList/TodoList.component';
import { Footer } from './components/Footer/Footer.component';

function App() {
  return (
    <div className="App">
      <TodoList />
      <Footer />
    </div>
  );
}

export default App;
