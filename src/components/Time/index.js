import Employee from "../Employee";
import "./index.css";

const Time = (props) => {
  const css = { background: props.secondaryColor };

  return props.employees.length > 0 ? (
    <section className="time" style={css}>
      <h3 style={{ borderColor: props.primaryColor }}>{props.name}</h3>
      <div className="employees">
        {props.employees.map((employee) => (
          <Employee
            backgroundColor={props.primaryColor}
            key={employee.name}
            name={employee.name}
            office={employee.office}
            image={employee.image}
          />
        ))}
      </div>
    </section>
  ) : (
    ""
  );
};

export default Time;
