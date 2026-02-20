import RestaurantCard from "./restaurantCardComp";

function DiscoverSection() {
  return (
    <section className="px-10 py-10 bg-gray-50">
      <h2 className="text-2xl font-bold mb-6">Discover Local Gems</h2>

      <div className="grid md:grid-cols-4 gap-6">
        <RestaurantCard
          image="/src/assets/main1.png"
          name="The Iron Skillet"
          description="Premium steak"
          rating="4.6"
        />
        <RestaurantCard
          image="/src/assets/main2.png"
          name="Miku Sushi"
          description="Creative sushi"
          rating="4.8"
        />
        <RestaurantCard
          image="/src/assets/drink1.png"
          name="Pasta & Co."
          description="Fresh handmade pasta"
          rating="4.7"
        />
        <RestaurantCard
          image="/src/assets/starter1.png"
          name="Green Deli"
          description="Healthy bowls"
          rating="4.5"
        />
      </div>
    </section>
  );
}

export default DiscoverSection;