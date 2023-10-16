import JavaScript from "./JavaScript";
import PathParameters from "./PathParameters";
import Classes from "./Classes";
import DynamicStyling from "./DynamicStyling";
import Styles from './Styles';
import ConditionalOutput from "./ConditionalOutput";
import TodoItem from "./todo/TodoItem";
import TodoList from "./todo/TodoList";

function Assignment3() {
    return (
      <div className="container">
        <h1>Assignment 3</h1>
        <TodoList/>
        <TodoItem/>
        <ConditionalOutput/>
        <Styles/>
        <Classes/>
        <PathParameters/>
        <JavaScript/>
        <DynamicStyling/>
      </div>
    ); 
  }
  export default Assignment3;

  var functionScoped = 2;
  let blockScoped = 5;
  const constant1 = functionScoped - blockScoped;
  let numberArray1 = [1, 2, 3, 4, 5];
  let stringArray1 = ['string1', 'string2'];

  let variableArray1 = [
  functionScoped,   blockScoped,
  constant1,        numberArray1,   stringArray1
  ];
  console.log("Working with Arrays");
  console.log(functionScoped);
  console.log(blockScoped);
  console.log(constant1);
  console.log("numberArray1 =" + numberArray1);
  console.log("stringArray1 =" + stringArray1);
  console.log("variableArray1 =" + variableArray1); 