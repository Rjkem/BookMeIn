// Third party imports
import { useRef } from "react";

// Import local files
import Card from "../ui/Card";
import classes from "./NewSessionForm.module.css";

// Get the user imports from the form
function NewSessionForm() {
  const sessionTitleInputRef = useRef();
  const dateInputRef = useRef();
  const startTimeInputRef = useRef();
  const finishTimeInputRef = useRef();
  const categoryInputRef = useRef();
  const subCategoryInputRef = useRef();
  const sessionMaxInputRef = useRef();
  const imageInputRef = useRef();

  function submitHandler(event) {
    // Prevent the default browser behavior on submit
    event.preventDefault();

    // Get the value of the user inputs
    const enteredSessionTitle = sessionTitleInputRef.current.value;
    const enteredDate = dateInputRef.current.value;
    const enteredStartTime = startTimeInputRef.current.value;
    const enteredFinishTime = finishTimeInputRef.current.value;
    const enteredSessionCategory = categoryInputRef.current.value;
    const enteredSessionSubCategory = subCategoryInputRef.current.value;
    const enteredSessionMax = sessionMaxInputRef.current.value;
    const enteredImage = imageInputRef.current.value;

    // Store the data
    const sessionData = {
        title: enteredSessionTitle,
        date: enteredDate,
        start_time: enteredStartTime,
        finish_time: enteredFinishTime,
        category: enteredSessionCategory,
        sub_category: enteredSessionSubCategory,
        max_attendees: enteredSessionMax,
        image: enteredImage
    }

    // Display the data for testing
    console.log(sessionData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Session Title</label>
          <input type="text" required id="title" ref={sessionTitleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="date">Date</label>
          <input type="date" required id="date" ref={dateInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="start-time">Session Start Time</label>
          <input type="time" required id="start-time" ref={startTimeInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="finish-time">Session Finish Time</label>
          <input
            type="time"
            required
            id="finish-time"
            ref={finishTimeInputRef}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="category">Session Category</label>
          <input type="text" required id="category" ref={categoryInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="sub-category">Session Sub-Category</label>
          <input
            type="text"
            required
            id="sub-category"
            ref={subCategoryInputRef}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="session-max">Maximum Attendees</label>
          <input
            type="number"
            required
            id="session-max"
            ref={sessionMaxInputRef}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Session Image</label>
          <input type="url" required id="image" ref={imageInputRef} />
        </div>
        <div className={classes.actions}>
          <button>Add Session</button>
        </div>
      </form>
    </Card>
  );
}

export default NewSessionForm;
