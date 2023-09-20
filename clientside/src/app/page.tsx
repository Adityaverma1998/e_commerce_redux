"use client";
import { selectProduct } from '@/redux/apps/products';
import { getAllProducts } from '@/redux/apps/products/action';
import { useEffect, useReducer } from 'react'
import { useSelector } from 'react-redux';
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { AppDispatch } from '@/redux/store';


export default function Home() {
  const dispatch = useAppDispatch();
  const products = useSelector(selectProduct);

  console.log('products are ',products);

  


return (
   <>
   <h1>Hello i am here today for </h1>
   </>
  )
}
