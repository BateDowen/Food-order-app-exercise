import Input from "../UI/Input";
import classes from "./CartItemForm.module.css";

const Form = (props) => {
 
  
  return (
    <form className={classes.form}  onSubmit={props.onSubmit}>
      <Input
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      ></Input>
      <button>Add</button>
    </form>
  );
};
export default Form;



