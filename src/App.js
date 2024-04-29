import Banner from "./components/Banner";
import TextField from "./components/TextField";

const App = () => {
  return (
    <div>
      <Banner />
      <TextField label="Nome" placeholder="Digite o seu nome" />
      <TextField label="Cargo" placeholder="Digite o seu cargo" />
      <TextField label="Imagem" placeholder="Digite o seu endereço da imagem" />
    </div>
  );
};
export default App;
