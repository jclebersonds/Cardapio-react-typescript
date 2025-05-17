const pastaList = [
  { 
    nome: "Espaguete", 
    valor: "R$ 30,00", 
    imagem: "/src/assets/imgs/espaguete.png", 
    molhos: ["Alla Puttanesca", "Al Pesto di Basilico", "Cacio e Pepe", "Alla Matriciana"]
  },
  { 
    nome: "Tagliatelle", 
    valor: "R$ 32,00", 
    imagem: "/src/assets/imgs/tagliatelle.png", 
    molhos: ["Alla Puttanesca", "Alla Matriciana"]
  },
  { 
    nome: "Fettuccine", 
    valor: "R$ 31,00", 
    imagem: "/src/assets/imgs/fettuccine.png", 
    molhos: ["Alla Puttanesca", "Al Pesto di Basilico", "Cacio e Pepe"]
  },
  { 
    nome: "Penne", 
    valor: "R$ 29,00", 
    imagem: "/src/assets/imgs/penne.png", 
    molhos: ["Alla Puttanesca", "Cacio e Pepe"]
  },
  { 
    nome: "Rigatoni", 
    valor: "R$ 28,00", 
    imagem: "/src/assets/imgs/rigatoni.png", 
    molhos: ["Alla Matriciana"]
  },
  { 
    nome: "Pappardelle", 
    valor: "R$ 33,00", 
    imagem: "/src/assets/imgs/pappardelle.png", 
    molhos: ["Alla Puttanesca", "Alla Matriciana"]
  }
];

import PastaCard from "./PastaCard";

const PastaList = () => (
  <div id="pastas-section" className="pasta-container">
    <h2 className="pasta-title">Nossas Opções de Pastas</h2>
    <div className="pasta-grid">
      {pastaList.map((item) => (
        <PastaCard key={item.nome} {...item} />
      ))}
    </div>
  </div>
);

export default PastaList;
