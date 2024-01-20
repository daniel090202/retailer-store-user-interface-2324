"use client";

import { useEffect } from "react";

import icons from "@/assets/Icons";
import { getAllArchivedProducts } from "@/api";
import { useAppDispatch, useAppSelector } from "@/lib/redux/store";

import Table from "../components/Table";

const ArchivedProducts = () => {
  const dispatch = useAppDispatch();

  const archivedProducts = useAppSelector((state) => {
    return state.archivedProductsReducer.archivedProducts.allArchivedProducts
      ?.data;
  });

  useEffect(() => {
    const fetchProducts = async () => {
      await getAllArchivedProducts(dispatch);
    };

    fetchProducts();
  }, []);

  return (
    <div className="mx-2 my-4 p-4 h-[680px] bg-white rounded-xl">
      <div className="flex items-center bg-white rounded-xl">
        <span
          onClick={() => window.history.back()}
          className="mr-4 px-2 py-1 rounded-full cursor-pointer hover:bg-gray-200"
        >
          {icons.arrowLeft}
        </span>
        <h1 className="my-2 text-2xl font-bold flex justify-center">
          Archived products catalog
        </h1>
      </div>
      <div className="flex justify-between">
        <div className="my-2">
          <span>Total archived products in the store:</span>
          <span className="mx-4 text-lg">
            {archivedProducts?.length.toLocaleString()}
          </span>
          <span>item(s)</span>
        </div>
      </div>
      <Table products={archivedProducts} />
    </div>
  );
};

export default ArchivedProducts;