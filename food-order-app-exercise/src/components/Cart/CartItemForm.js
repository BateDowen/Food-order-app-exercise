import Input from "../UI/Input";
import classes from "./CartItemForm.module.css";

const Form = (props) => {
  return (
    <form className={classes.form}>
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
      <button onClick={props.onRemove}>− </button>
      <button onClick={props.onAdd}>+ </button>
    </form>
  );
};
export default Form;
