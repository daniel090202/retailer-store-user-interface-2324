"use client";

import { useState } from "react";

import icons from "@/assets/Icons";
import Button from "@/components/Button";

import Table from "./Table";
import CreateProduct from "./CreateProduct";

const Products = () => {
  const [createProductModal, setCreateProductModal] = useState(false);

  const handleCreateProduct = () => {
    setCreateProductModal(true);
  };

  const handleViewArchivedProducts = () => {
    return;
  };

  return (
    <div className="flex-1 mx-2 my-4 p-4 h-[680px] bg-white rounded-xl">
      <h1 className="my-2 text-2xl font-bold flex justify-center">
        Products catalog management
      </h1>
      <div className="flex justify-between">
        <div className="my-2">
          <span>Total available products in the store:</span>
          <span className="mx-4 text-lg">12</span>
          <span>item(s)</span>
        </div>
        <div>
          <Button
            leftIcon={icons.plus}
            rightIcon=""
            className="mx-2"
            onClick={() => handleCreateProduct()}
          >
            New product
          </Button>
          <Button
            leftIcon={icons.archive}
            rightIcon=""
            className=""
            onClick={() => handleViewArchivedProducts()}
          >
            Archive (10)
          </Button>
        </div>
      </div>
      <Table />
      <CreateProduct
        createProductModal={createProductModal}
        setCreateProductModal={setCreateProductModal}
      />
    </div>
  );
};

export default Products;
