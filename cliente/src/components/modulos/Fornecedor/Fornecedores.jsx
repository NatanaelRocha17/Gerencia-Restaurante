import Menu from "../../Menu";
import Busca from "../../search/Busca";

const Fornecedores = () => {
  return (
    <>
      <Menu />
      <Busca rota="/cadastrarFornecedor" tipo="Fornecedor" />
    </>
  );
};

export default Fornecedores;
