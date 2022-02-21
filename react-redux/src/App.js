import './App.css';
import { connect } from 'react-redux';
import Button from './components/Button';

function App(props) {
  return (
    <div className="App">
      <h4>Counter State Redux</h4>
      <h3>{props.counter}</h3>
      <div>
        <Button actionType="decrement" label="Decrement" />
        <Button actionType="increment" label="Increment" />
      </div>
      <hr />
      <h3>Cart State Redux</h3>
      <div>
        <h3>{props.cart}</h3>
        <Button actionType="addcart" label="Addcart" />
        <Button actionType="removecart" label="Removecart" />
      </div>

    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    counter: state.counterReducer.counter,
    cart: state.cartReducer.cart
  }
}

export default connect(mapStateToProps)(App);



