import Employee from "../Employee";
import "./index.css";

const Time = (props) => {
  return (
    <section className="time" style={{ background: props.secondaryColor }}>
      <h3 style={{ borderColor: props.primaryColor }}>{props.name}</h3>
      <div className="employees">
        {props.employees.map((employee) => (
          <Employee
            name={employee.name}
            office={employee.office}
            image={employee.image}
          />
        ))}
      </div>
    </section>
  );
};

export default Time;
