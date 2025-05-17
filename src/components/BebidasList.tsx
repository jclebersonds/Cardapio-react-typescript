const bebidasList = {
  Água: ["Água - R$ 5,00"],
  Refrigerantes: ["Coca-Cola - R$ 8,00", "Guaraná - R$ 7,50", "Sprite - R$ 7,00"],
  Sucos: ["Morango - R$ 10,00", "Laranja - R$ 9,50", "Uva - R$ 10,50"]
};

const BebidasList = () => (
  <div id="bebidas-section" className="bebidas-container">
    <h2 className="bebidas-title">Nossas Opções de Bebidas</h2>
    {Object.entries(bebidasList).map(([categoria, bebidas]) => (
      <div key={categoria} className="bebidas-categoria">
        <h3>{categoria}</h3>
        <ul>
          {bebidas.map((bebida) => (
            <li key={bebida}>{bebida}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);

export default BebidasList;
