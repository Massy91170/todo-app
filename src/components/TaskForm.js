import { useState } from "react";
import { Form } from "react-bootstrap";

export default function TaskForm(props) {
  const [textEntered, setTextEntered] = useState("");
  const onChangeHandler = function (event) {
    setTextEntered(event.target.value);
  };

     const submiteHandler = function(event){
     event.preventDefault();
     props.createTask(textEntered)
     setTextEntered('');
  }

  return (
    // <> = <fragment></fragment>
    <>
      <form onSubmit={submiteHandler} className="my-4 form-floating">
        <input
          value={textEntered}
          type="text"
          name="task"
          className="form-control"
          onChange={onChangeHandler}
        />

        <label htmlFor="task">enter a task</label>
        {/* <input type="submit" value="Save" /> */}
      </form>

      <div className="d-grid gap-2 d-md-block">
        <button onClick={submiteHandler} type="button" className="btn py-2 btn-primary me-md-3">Add</button>
        <button onClick={() => props.searchTask(textEntered)} className="btn py-2 btn-secondary">Get Tasks</button>
      </div>
    </>
  );
}

// rfc
