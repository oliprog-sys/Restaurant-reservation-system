import resImg from "../assets/resImg.png";
import MenuPreview from "../components/resDetailComp/menuPreview";
import ReserveTable from "../components/resDetailComp/reserveTableComp";

function RestaurantDetailPage() {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="font-bold text-gray-700 mb-4 text-2xl">
        BookN'Dine restaurant
      </h1>

      <img
        className="w-full max-w-3xl h-64 object-cover rounded-lg shadow"
        src={resImg}
        alt=""
      />

      <div className="w-full max-w-lg bg-amber-950 h-34 mt-4 rounded-lg p-4">
        <p className="text-white text-m mb-2 ">
          ⭐⭐⭐⭐☆ <span className="font-semibold">(4.6)</span> · 320 reviews
        </p>
        <p className="text-amber-200 text-m">
          Italian · $$ · Bole, Addis Ababa
        </p>
      </div>

      <p className="mt-4 p-4 font-light text-gray-700">
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

      {/* reserve table */}
      <ReserveTable />

      {/*menu list*/}
      <MenuPreview />
    </div>
  );
}

export default RestaurantDetailPage;
