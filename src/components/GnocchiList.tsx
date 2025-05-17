import GnocchiCard from "./GnocchiCard"; 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
const gnocchiList = [
  { nome: "Gnocchi de Batata", valor: "R$ 25,00", imagem: "/src/assets/imgs/batata.png" },
  { nome: "Gnocchi de Espinafre", valor: "R$ 27,00", imagem: "/src/assets/imgs/espinafre.png" },
  { nome: "Gnocchi de Cenoura", valor: "R$ 26,00", imagem: "/src/assets/imgs/cenoura.png" },
  { nome: "Gnocchi de Beterraba", valor: "R$ 28,00", imagem: "/src/assets/imgs/beterraba.png" }
];

const GnocchiList = () => (
  <>
    <h2 className="gnocchi-title">Nossas Opções de Gnocchi</h2>
    <div id="gnocchi-section" className="gnocchi-container">
      {gnocchiList.map((item) => (
        <GnocchiCard key={item.nome} {...item} />
      ))}
    </div>
  </>
);

export default GnocchiList;

