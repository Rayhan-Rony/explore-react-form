import "./App.css";
import ControlledField from "./Components/ControlledField/ControlledField";
import FamilyTree from "./Components/FamilyTree/FamilyTree";
import FormAction from "./Components/FormAction/FormAction";
import HooksForm from "./Components/HooksForm/HooksForm";

import ProductManagement from "./Components/ProductManagement/ProductManagement";
import SimpleForm from "./Components/SimpleForm/SimpleForm";
import Uncontrolled from "./Components/Uncontrolled/Uncontrolled";

function App() {
  return (
    <>
      <h1>Explore React Form</h1>
      <SimpleForm></SimpleForm>
      <FormAction></FormAction>
      <ControlledField></ControlledField>
      <Uncontrolled></Uncontrolled>
      <HooksForm></HooksForm>
      <ProductManagement></ProductManagement>
      <FamilyTree></FamilyTree>
    </>
  );
}

export default App;
