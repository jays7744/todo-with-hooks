import { useState } from "react";

export function Todo () {
    const [task, setTask] = useState([]);

change(e){
    setTask({task : e.target.value});

};

return (<>
    <h1>ToDo List</h1>
    <input type="text" onChange={change} />
    </>
);

}