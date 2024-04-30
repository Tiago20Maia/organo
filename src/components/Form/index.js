import DropDownList from "../DropDownList";
import TextField from "../TextField";
import Button from "../Button";
import "./index.css";
import { useState } from "react";

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

  const [name, setName] = useState("");
  const [office, setOffice] = useState("");
  const [image, setImage] = useState("");
  const [time, setTime] = useState("");

  const onSave = (event) => {
    event.preventDefault();
    console.log("Salvar dados => ", name, office, image, time);
  };

  return (
    <section className="form">
      <form onSubmit={onSave}>
        <h2>Preencha os dados para criar o card do colaborador:</h2>
        <TextField
          required={true}
          label="Nome"
          placeholder="Digite o seu nome"
          value={name}
          onChanged={(value) => setName(value)}
        />
        <TextField
          required={true}
          label="Cargo"
          placeholder="Digite o seu cargo"
          value={office}
          onChanged={(value) => setOffice(value)}
        />
        <TextField
          label="Imagem"
          placeholder="Digite o seu endereço da imagem"
          value={image}
          onChanged={(value) => setImage(value)}
        />
        <DropDownList
          required={true}
          label="Time"
          itens={times}
          value={time}
          onChanged={(value) => setTime(value)}
        />
        <Button>Criar card</Button>
      </form>
    </section>
  );
};

export default Form;
