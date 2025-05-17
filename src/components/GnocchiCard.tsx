<section id="gnocchi">...</section>

type GnocchiProps = {
  nome: string;
  valor: string;
  imagem: string;
};
const GnocchiCard = ({ nome, valor, imagem }: GnocchiProps) => (
  <div className="gnocchi-card">
    <img src={imagem} alt={nome} />
    <h3>{nome}</h3>
    <p>{valor}</p>
  </div>
);

export default GnocchiCard;
