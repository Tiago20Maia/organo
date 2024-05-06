import "./index.css";

const Employee = ({ name, office, image }) => {
  return (
    <div className="employee">
      <div className="cabecalho">
        <img src={image} alt={name} />
      </div>
      <div className="rodape">
        <h4>{name}</h4>
        <h5>{office}</h5>
      </div>
    </div>
  );
};

export default Employee;
