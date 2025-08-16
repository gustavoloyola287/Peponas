import { Product } from "../../types/Product";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  return (
    <article className="bg-white rounded-xl shadow hover:shadow-lg transition p-4 flex flex-col">
      <img src={product.image} alt={product.name} className="rounded-lg h-40 object-cover" />
      <h3 className="font-semibold mt-3">{product.name}</h3>
      <p className="text-sm text-gray-500">{product.description}</p>
      <div className="flex justify-between items-center mt-auto">
        <span className="font-bold text-pink-600">${product.price}</span>
        <button className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700">
          Agregar
        </button>
      </div>
    </article>
  );
};

export default ProductCard;
