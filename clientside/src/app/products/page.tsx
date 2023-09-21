"use client";
import ProductCard from "../../component/product_card";
import { selectProduct } from "../../redux/apps/products";
import { getAllProducts } from "../../redux/apps/products/action";
import { useAppDispatch } from "../../redux/hook";
import { useEffect } from "react";
import { useSelector } from "react-redux";

// import Loaders from '../../component/loader'
const ProductPage = () => {
  const dispatch = useAppDispatch();
  const products = useSelector(selectProduct);

  useEffect(() => {
    (async () => {
      try {
        await dispatch(getAllProducts());
      } catch (e) {
        console.error(e);
      }
    })();
  }, [dispatch]);

  console.log("total products are ", products.products);

  return (
    <>
      <div className="">
        <h1>All Products are here</h1>
        <div className="flex flex-wrap gap-8 justify-center">
          {products.isLoading ? (
            <h1>Loading....</h1> 
          ) : products.products && products.products.length > 0 ? (
            products.products.map((data: any) => (
              <ProductCard
                key={data.id}
                productId={data.id}
                title={data.title}
                price={data.price}
                image={data.image}
              />
            ))
          ) : (
            <p>No products available</p>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductPage;
