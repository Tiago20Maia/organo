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

  return (
    <section className="form">
      <form>
        <h2>Preencha os dados para criar o card do colaborador:</h2>
        <TextField label="Nome" placeholder="Digite o seu nome" />
        <TextField label="Cargo" placeholder="Digite o seu cargo" />
        <TextField
          label="Imagem"
          placeholder="Digite o seu endereço da imagem"
        />
        <DropDownList label="Time" itens={times} />
        <Button text="Criar" />
      </form>
    </section>
  );
};

export default Form;
