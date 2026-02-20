import RestaurantCard from "./restaurantCardComp";

function Popular() {
  return (
    <section className="px-10 py-10">
      <h2 className="text-2xl font-bold mb-6">Editor's Choice</h2>

      <div className="grid md:grid-cols-3 gap-6">
        <RestaurantCard
          image="/src/assets/main1.png"
          name="L'Artiste Brasserie"
          description="Parisian bistro"
          rating="4.8"
        />
        <RestaurantCard
          image="/src/assets/main2.png"
          name="Zen Garden Sushi"
          description="Authentic Japanese"
          rating="4.9"
        />
        <RestaurantCard
          image="/src/assets/drink1.png"
          name="The Fire Hearth"
          description="Wood-fired pizza"
          rating="4.7"
        />
      </div>
    </section>
  );
}

export default Popular;