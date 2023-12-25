import { useState } from "react";
import "./App.css";
import Button from "./component/Button";
import Alert from "./component/Alert";

function App() {
  const [alertVisiable, setAlertVisiable] = useState(false);
  return (
    <>
      <div>
        {alertVisiable && (
          <Alert onClose={() => setAlertVisiable(false)}>My alert</Alert>
        )}
        <Button onClick={() => setAlertVisiable(true)} color="danger">
          My button
        </Button>
      </div>
    </>
  );
}

export default App;
