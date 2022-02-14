import { connect } from 'react-redux';

function Button(props) {

   const changeCounter = () => {
      switch (props.actionType) {
         case "increment":
            return props.onIncrement();
         case "decrement":
            return props.onDecrement();
         default:
            return props.onIncrement();
      }
   }

   return (
      <button type="button" onClick={changeCounter}>
         {props.label}
      </button>
   )
}

const mapDispatchToProps = (dispatch) => {
   return {
      onIncrement: () => dispatch({ type: "INCREMENT" }),
      onDecrement: () => dispatch({ type: "DECREMENT" })
   }
}

export default connect(null, mapDispatchToProps)(Button)