import './App.css';
import { connect } from 'react-redux';
import Button from './components/Button';

function App(props) {
  console.log()
  return (
    <div className="App">
      <h4>Learning Redux</h4>
      <h3>{props.counter}</h3>
      <div>
        <Button actionType="decrement" label="Decrement" />
        <Button actionType="increment" label="Increment" />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter
  }
}

export default connect(mapStateToProps)(App);
