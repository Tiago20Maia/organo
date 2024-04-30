import "./index.css";

const DropDownList = (props) => {
  return (
    <div className="dropdown-list">
      <label>{props.label}</label>
      <select required={props.required} className="dropdown-list">
        {props.itens.map((item) => {
          return <option key={item}>{item}</option>;
        })}
      </select>
    </div>
  );
};

export default DropDownList;
