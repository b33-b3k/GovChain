import Banner from "../components/Banner";
import CreateProposal from "../components/CreateProposal";
import Proposals from "../components/Proposals";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <Proposals />
      <CreateProposal />
      <Footer/>
    </>
  );
};

export default Home;
