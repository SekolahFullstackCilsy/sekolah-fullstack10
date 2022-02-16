import { connect } from 'react-redux';
import * as actions from '../redux/actions/counterActions';
import * as cartactions from '../redux/actions/cartActions';

function Button(props) {

   const changeCounter = () => {
      switch (props.actionType) {
         /**Action button counter */
         case "increment":
            return props.onIncrement();
         case "decrement":
            return props.onDecrement();
         /** Action button cart */
         case "addcart":
            return props.onAddCart();
         case "removecart":
            return props.onRemoveCart();
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
      /**Action button counter */
      onIncrement: () => dispatch({ type: actions.INCREMENT }),
      onDecrement: () => dispatch({ type: actions.DECREMENT }),
      /**Action button cart */
      onAddCart: () => dispatch({ type: cartactions.ADDCART }),
      onRemoveCart: () => dispatch({ type: cartactions.REMOVECART })
   }
}

export default connect(null, mapDispatchToProps)(Button)