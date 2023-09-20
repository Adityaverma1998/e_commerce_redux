import Image from "next/image"
const ProductCard = ({productId,title,image,price}:any)=>{
    return(
        <>
        <div className={''}>
            <div className={''} style={{ width: '300px', height: '200px' }}>
            <Image src={image} layout="fill" objectFit="cover" />
            </div>
            <div className="">
                <h3>{title}</h3>
                <p> ${price}</p>

            </div>
        </div>
        
        </>
    )
}
export default ProductCard;