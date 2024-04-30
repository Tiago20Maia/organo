import './index.css'

const DropDownList = (props) => {
  return (
    <div className='dropdown-list'>
      <label>{props.label}</label>
      <select className='dropdown-list'>
        {props.itens.map((item) => {
          return <option key={item}>{item}</option>;
        })}
      </select>
    </div>
  );
};

export default DropDownList;
