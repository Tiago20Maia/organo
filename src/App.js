import { useState } from "react";
import Banner from "./components/Banner";
import Form from "./components/Form";
import Time from "./components/Time";
import Rodape from "./components/Rodape";

const App = () => {
  const times = [
    {
      name: "Front-End",
      primaryColor: "#82CFFA",
      secondaryColor: "#E8F8FF",
    },
    {
      name: "Data Sciense",
      primaryColor: "#A6D157",
      secondaryColor: "#F0F8E2",
    },
    {
      name: "Devops",
      primaryColor: "#E06B69",
      secondaryColor: "#FDE7E8",
    },
    {
      name: "UX e Design",
      primaryColor: "#D86EBF",
      secondaryColor: "#FAE5F5",
    },
    {
      name: "Mobile",
      primaryColor: "#FEBA05",
      secondaryColor: "#FFF5D9",
    },
    {
      name: "Inovação e Gestão",
      primaryColor: "#FF8A29",
      secondaryColor: "#FFEEDF",
    },
  ];

  const [employees, setEmployees] = useState([]);

  const onNewEmployeeAdd = (employee) => {

    setEmployees([...employees, employee]);
  };

  return (
    <div className="App">
      <Banner />
      <Form
        times={times.map((time) => time.name)}
        onNewEmployeeCreate={(employee) => onNewEmployeeAdd(employee)}
      />

      {times.map((time) => (
        <Time
          key={time.name}
          name={time.name}
          primaryColor={time.primaryColor}
          secondaryColor={time.secondaryColor}
          employees={employees.filter(
            (employee) => employee.time === time.name
          )}
        />
      ))}
      <Rodape />
    </div>
  );
};
export default App;
