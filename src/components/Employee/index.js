import "./index.css";

const Employee = ({ name, office, image, backgroundColor }) => {
  return (
    <div className="employee">
      <div className="cabecalho" style={{ backgroundColor: backgroundColor }}>
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
