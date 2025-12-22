import Greeting from '../components/homePageComp/greetingSection';
import SearchBar from '../components/homePageComp/searchBar';

function HomePage() {
    return (
        <div className="bg-gray-100 min-h-screen p-6">
            {/* Greeting Section */}
            <Greeting userName="User" userIcon='\src\assets\user.png' />

            {/* Search Bar */}
            <SearchBar />

            {/* Featured Products */}
            <h2 className="text-xl font-bold text-gray-700 mb-4">Featured Products</h2>
            <div
                id="featured-products"
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8"
            >
                {/* Product cards go here */}
            </div>

            {/* Restaurants */}
            <h2 className="text-xl font-bold text-gray-700 mb-4">Restaurants</h2>
            <div
                id="restaurants"
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            >
                {/* Restaurant cards go here */}
            </div>
        </div>
    );
}

export default HomePage;
