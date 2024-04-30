import DropDownList from "../DropDownList";
import TextField from "../TextField";
import Button from "../Button";
import "./index.css";

const Form = () => {
  const times = [
    "Programação",
    "Front-End",
    "Data Science",
    "Devops",
    "UX e Design",
    "Mobile",
    " Inovação e Gestão",
  ];

  const onSave = (event) => {
    event.preventDefault();
    console.log("Salvar dados");
  };

  return (
    <section className="form">
      <form onSubmit={onSave}>
        <h2>Preencha os dados para criar o card do colaborador:</h2>
        <TextField
          required={true}
          label="Nome"
          placeholder="Digite o seu nome"
        />
        <TextField
          required={true}
          label="Cargo"
          placeholder="Digite o seu cargo"
        />
        <TextField
          label="Imagem"
          placeholder="Digite o seu endereço da imagem"
        />
        <DropDownList required={true} label="Time" itens={times} />
        <Button>Criar card</Button>
      </form>
    </section>
  );
};

export default Form;
