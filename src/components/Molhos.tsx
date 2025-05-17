const sauceList = [
  "Alla Puttanesca",
  "Al Pesto di Basilico",
  "Cacio e Pepe",
  "Alla Matriciana"
];

const SauceList = () => (
  <div className="sauce-container">
    <h2 className="sauce-title">Nossas Opções de Molhos</h2>
    <ul className="sauce-list">
      {sauceList.map((molho) => (
        <li key={molho}>{molho}</li>
      ))}
    </ul>
  </div>
);

export default SauceList;
