import Employee from "../Employee";
import "./index.css";

const Time = (props) => {
  const css = { background: props.secondaryColor };

  return props.employees.length > 0 ? (
    <section className="time" style={css}>
      <input
        onChange={(event) =>
          props.onChangeColor(event.target.value, props.name)
        }
        value={props.secondaryColor}
        type="color"
        className="input-color"
      />
      <h3 style={{ borderColor: props.primaryColor }}>{props.name}</h3>
      <div className="employees">
        {props.employees.map((employee) => {
          return (
            <Employee
              backgroundColor={props.primaryColor}
              key={employee.name}
              name={employee.name}
              office={employee.office}
              image={employee.image}
              onDelete={props.onDelete}
            />
          );
        })}
      </div>
    </section>
  ) : (
    ""
  );
};

export default Time;
