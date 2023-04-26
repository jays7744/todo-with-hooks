import { useState } from "react";
import List from "./List";


export function Todo () {
    const [inputValue, setinputValue] = useState("");
    const [value, setValue] = useState([]);

const change = (e) =>{
    console.log("Target Value", e.target.value);
     setinputValue(e.target.value);

};
const addItem = () => {
    setValue([...value, inputValue]);
    console.log("item", inputValue);
    setinputValue("");
};

const resetItem =()=>{
    setValue([]);
};

return (<>
    <h1>ToDo List</h1>
    <input type="text" value = {inputValue} onChange={change} />
    <button onClick={addItem}>Add</button>
    <button onClick={resetItem}>Reset</button>
    <List value={value}/>
    </>
);

}