const ProductCard = ({ image, name, description, price }) => {
  return (
    <div className="bg-gray-300 rounded-2xl">
      <div className="h-48 overflow-hidden">
        <img src={image} alt="" className="w-full h-full object-cover rounded-2xl" />
      </div>
      <div className="p-4">
        <h2 className="text-2xl font-semibold mb-2">{name}</h2>
        <p className="text-gray-600 font-medium mb-2">{price}</p>
        <p className="text-gray-500 text-sm mb-4">{description}</p>
        <a href="" className="p-2 bg-amber-200">Add to card</a>
      </div>
    </div>
  );
};

export default ProductCard;
