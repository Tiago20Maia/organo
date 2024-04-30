import { useState } from "react";
import Banner from "./components/Banner";
import Form from "./components/Form";
import Time from "./components/Time";

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
      <Time name="Programação" />
      <Time name="Front-End" />
      <Time name="Data Science" />
    </div>
  );
};
export default App;
