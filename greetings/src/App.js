import './App.css';
import Badge from './components/Badge';

function App() {
  return (
    <div className="App">
      <h4>Belajar React</h4>
      <div>
        <span>Angga</span> <Badge lulus={true} />
      </div>
    </div>
  );
}

export default App;
