import { AiFillCloseCircle } from "react-icons/ai";
import "./index.css";

const Employee = ({ name, office, image, backgroundColor, onDelete }) => {
  return (
    <div className="employee">
      <AiFillCloseCircle size={25}className="delete" onClick={onDelete} />
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
