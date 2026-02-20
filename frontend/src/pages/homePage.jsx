import CategoryFilter from "../components/homePageComp/categoryComp";
import DiscoverSection from "../components/homePageComp/discoverComp";
import Footer from "../components/homePageComp/footerComp";
import Header from "../components/homePageComp/header";
import Landing from "../components/homePageComp/landingSection";
import Popular from "../components/homePageComp/popularComp";

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
