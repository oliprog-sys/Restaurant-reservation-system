import { useState } from "react";
import MenuPreview from "../components/resDetailComp/MenuPreview";
import ReserveTable from "../components/resDetailComp/ReserveTableComp";
import Header from "../components/homePageComp/Header";
import { PopularCard } from "../components/homePageComp/PoplarResCard";
import AboutCard from "../components/resDetailComp/AboutCard";
import Footer from "../components/homePageComp/FooterComp";

function RestaurantDetailPage() {
  const navLinks = [
    { name: "About", id: "about" },
    { name: "Menu Preview", id: "menu" },
    { name: "Reviews", id: "reviews" },
    { name: "Location", id: "location" },
  ];

  const [isActive, setIsActive] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <div className="p-4">
        <h1 className="font-bold text-gray-700 mb-4 text-2xl">
          BookN'Dine restaurant
        </h1>

        <section>
          <PopularCard
            image="/src/assets/drink1.png"
            name="The Fire Hearth"
            location="Addis Ababa"
            cusineType="Italian"
            status="5.0 star rated"
          />
        </section>

        <div className="flex  ">
          <div className="w-3/4">
            <section>
              <nav className="sticky top-0 border-b border-gray-300 mb-4 z-30 px-6 py-3 flex gap-6">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => {
                      scrollToSection(link.id);
                      setIsActive(link.id);
                    }}
                    className={`inline-block pb-2 font-medium transition-colors ${
                      isActive === link.id
                        ? "text-green-600 border-b-2 border-green-600"
                        : "text-gray-600 hover:text-green-600"
                    }`}
                  >
                    {link.name}
                  </button>
                ))}
              </nav>
            </section>

            <section id="about" className="scroll-mt-20 mb-10">
              <AboutCard
                resName="Zen Garden Sushi"
                description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas
        porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies,
        purus lectus malesuada libero, sit amet commodo magna eros quis urna.
        Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque
        habitant morbi tristique senectus et netus et malesuada fames ac turpis
        egestas. Proin pharetra nonummy pede. Mauris et orci. Aenean nec lorem.
        In porttitor. Donec laoreet nonummy augue. Suspendisse dui purus,
        scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque
        at sem venenatis eleifend. Ut nonummy. Fusce aliquet pede non pede.
        Suspendisse dapibus lorem pellentesque magna. Integer nulla. Donec
        blandit feugiat ligula. Donec hendrerit, felis et imperdiet euismod,
        purus ipsum pretium metus, in lacinia nulla nisl eget sapien. Donec ut
        est in lectus consequat consequat. Etiam eget dui. Aliquam erat
        volutpat. Sed at lorem in nunc porta tristique."
                cusine="Japanese"
                price="$$90"
                dinningLimt="20"
                dietary="Vegetarian"
              />
            </section>

            <section id="menu" className="scroll-mt-20 mb-10">
              <MenuPreview />
            </section>

            <section
              id="reviews"
              className="scroll-mt-20 mb-10 p-6 bg-white rounded-xl shadow-sm"
            >
              <h2 className="text-2xl font-bold mb-4">
                What Diners Are Saying
              </h2>
              <p className="text-gray-500 italic">
                "The sushi was incredibly fresh. Best in Addis!" - Happy Diner
              </p>
            </section>

            <section
              id="location"
              className="scroll-mt-20 mb-20 p-6 bg-white rounded-xl shadow-sm"
            >
              <h2 className="text-2xl font-bold mb-4">Location & Contact</h2>
              <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                [Map Placeholder]
              </div>
            </section>
          </div>
          <div className="m-4">
            {/* reserve table */}
            <ReserveTable />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default RestaurantDetailPage;

/**
 *  <p className="mt-4 p-4 font-light text-gray-700">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas
        porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies,
        purus lectus malesuada libero, sit amet commodo magna eros quis urna.
        Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque
        habitant morbi tristique senectus et netus et malesuada fames ac turpis
        egestas. Proin pharetra nonummy pede. Mauris et orci. Aenean nec lorem.
        In porttitor. Donec laoreet nonummy augue. Suspendisse dui purus,
        scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque
        at sem venenatis eleifend. Ut nonummy. Fusce aliquet pede non pede.
        Suspendisse dapibus lorem pellentesque magna. Integer nulla. Donec
        blandit feugiat ligula. Donec hendrerit, felis et imperdiet euismod,
        purus ipsum pretium metus, in lacinia nulla nisl eget sapien. Donec ut
        est in lectus consequat consequat. Etiam eget dui. Aliquam erat
        volutpat. Sed at lorem in nunc porta tristique.
      </p>
 */
