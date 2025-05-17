type BebidaProps = {
  nome: string;
  valor: string;
  categoria: string;
};

const BebidaCard = ({ nome, valor, categoria }: BebidaProps) => (
  <div className="bebida-card">
    <h3>{nome}</h3>
    <p>Categoria: {categoria}</p>
    <p>Valor: {valor}</p>
  </div>
);

export default BebidaCard;
