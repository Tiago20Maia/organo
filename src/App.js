import { useState } from "react";
import Banner from "./components/Banner";
import Form from "./components/Form";

const App = () => {
  const [employees, setEmployees] = useState([]);

  const onNewEmployeeAdd = (employee) => {
    console.log(employee);
    setEmployees([...employees, employee]);
  };

  return (
    <div className="App">
      <Banner />
      <Form onNewEmployeeCreate={(employees) => onNewEmployeeAdd(employees)} />
    </div>
  );
};
export default App;
