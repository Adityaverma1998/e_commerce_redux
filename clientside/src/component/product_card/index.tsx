import Image from "next/image";

const ProductCard = ({ productId, title, image, price }: any) => {
  return (
    <div className="w-48 bg-[#F8F9F9] p-2"> {/* Set a specific width for the container */}
      <div className="w-24 h-24">
        <Image
          src={image}
          width={150}
          height={150}
          alt="Picture of the author"
        />
      </div>
      <div>
        <h3>{title}</h3>
        <p>${price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
