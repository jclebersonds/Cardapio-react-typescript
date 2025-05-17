type PastaProps = {
  nome: string;
  valor: string;
  imagem: string;
  molhos: string[];
};

const PastaCard = ({ nome, valor, imagem, molhos }: PastaProps) => (
  <div className="pasta-card">
    <img src={imagem} alt={nome} />
    <h3>{nome}</h3>
    <p>{valor}</p>
    <ul className="pasta-molhos">
      {molhos.map((molho) => (
        <li key={molho}>{molho}</li>
      ))}
    </ul>
  </div>
);

export default PastaCard;
