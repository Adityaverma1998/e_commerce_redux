import Image from "next/image";

const ProductCard = ({ productId, title, image, price }: any) => {
  
  
  const maxLength = 25; // Change this to your desired length


  const truncatedTitle = title.length > maxLength ? title.substring(0, maxLength) : title;

  return (
    <div className="w-60 p-2 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-md ">
      <div className="w-full h-48 relative">
        <Image
          src={image}
          quality={100}
          alt="Picture of the author"
          layout="fill"
          objectFit="contain"
          className="transition duration-500 hover:scale-125"
        />
      </div>
      <div>
           <div className="py-6 px-3">
           <h3 className="text-sm  text-[ff0000 ]">{truncatedTitle}</h3>
        <p className='pt-2 text-lg text-center'>${price}</p>
           </div>
      </div>
    </div>
  );
};

export default ProductCard;
