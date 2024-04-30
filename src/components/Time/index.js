import "./index.css";

const Time = (props) => {
  return (
    <section className="time" style={{ background: props.secondaryColor }}>
      <h3 style={{ borderColor: props.primaryColor }}>{props.name}</h3>
    </section>
  );
};

export default Time;
