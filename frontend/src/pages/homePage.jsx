import DiscoverSection from "../components/homePageComp/DiscoverComp";
import Footer from "../components/homePageComp/FooterComp";
import Header from "../components/homePageComp/Header";
import Landing from "../components/homePageComp/LandingSection";
import Popular from "../components/homePageComp/PopularComp";

function HomePage() {
  return (
    <div className="homePage">
      <Header />
      <Landing />
      <Popular />
      <DiscoverSection />
      <Footer />
    </div>
  );
}

export default HomePage;
