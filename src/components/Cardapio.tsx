/*import Menu from '../components/Menu';*/
import Principal from '../components/Principal';
import GnocchiList from '../components/GnocchiList';
import Molhos from '../components/Molhos';
import PastaList from '../components/PastaList';
import BebidasList from '../components/BebidasList';
import Footer from '../components/Footer';
import Menu from '../components/Menu';

function Cardapio() {
  return (
    <>
      <Menu />
      <Principal />
      <GnocchiList />
      <Molhos />
      <PastaList />
      <BebidasList />
      <Footer />
    </>
  );
}

export default Cardapio;
  