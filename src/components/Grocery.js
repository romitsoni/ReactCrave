const Grocery = () => {
    return (
        <div className="grocery-section p-8 bg-gray-50 rounded-lg shadow-lg max-w-5xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">Grocery Section</h1>
            <p className="text-lg text-gray-700 mb-8 text-center">
                Explore a variety of grocery items to add to your cart. From fresh produce to pantry staples, we have it all!
            </p>
            <div className="grocery-items grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="item-card p-4 bg-white rounded-lg shadow-md flex flex-col items-center">
                    <img src="https://via.placeholder.com/200x150" alt="Fresh Fruits" className="w-full h-36 object-cover mb-4 rounded-md" />
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">Fresh Fruits</h2>
                    <p className="text-gray-600 text-center">Apples, Bananas, Oranges, Grapes, and more.</p>
                </div>
                <div className="item-card p-4 bg-white rounded-lg shadow-md flex flex-col items-center">
                    <img src="https://via.placeholder.com/200x150" alt="Vegetables" className="w-full h-36 object-cover mb-4 rounded-md" />
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">Vegetables</h2>
                    <p className="text-gray-600 text-center">Tomatoes, Carrots, Lettuce, Potatoes, and more.</p>
                </div>
                <div className="item-card p-4 bg-white rounded-lg shadow-md flex flex-col items-center">
                    <img src="https://via.placeholder.com/200x150" alt="Dairy Products" className="w-full h-36 object-cover mb-4 rounded-md" />
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">Dairy Products</h2>
                    <p className="text-gray-600 text-center">Milk, Cheese, Yogurt, Butter, and more.</p>
                </div>
                <div className="item-card p-4 bg-white rounded-lg shadow-md flex flex-col items-center">
                    <img src="https://via.placeholder.com/200x150" alt="Pantry Staples" className="w-full h-36 object-cover mb-4 rounded-md" />
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">Pantry Staples</h2>
                    <p className="text-gray-600 text-center">Rice, Pasta, Beans, Canned Goods, and more.</p>
                </div>
                <div className="item-card p-4 bg-white rounded-lg shadow-md flex flex-col items-center">
                    <img src="https://via.placeholder.com/200x150" alt="Snacks" className="w-full h-36 object-cover mb-4 rounded-md" />
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">Snacks</h2>
                    <p className="text-gray-600 text-center">Chips, Cookies, Nuts, and more.</p>
                </div>
                <div className="item-card p-4 bg-white rounded-lg shadow-md flex flex-col items-center">
                    <img src="https://via.placeholder.com/200x150" alt="Beverages" className="w-full h-36 object-cover mb-4 rounded-md" />
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">Beverages</h2>
                    <p className="text-gray-600 text-center">Juices, Soft Drinks, Tea, Coffee, and more.</p>
                </div>
            </div>
        </div>
    );
}

export default Grocery;
