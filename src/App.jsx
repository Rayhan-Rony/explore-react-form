import "./App.css";
import ControlledField from "./Components/ControlledField/ControlledField";
import FormAction from "./Components/FormAction/FormAction";
import SimpleForm from "./Components/SimpleForm/SimpleForm";

function App() {
  return (
    <>
      <h1>Explore React Form</h1>
      <SimpleForm></SimpleForm>
      <FormAction></FormAction>
      <ControlledField></ControlledField>
    </>
  );
}

export default App;
