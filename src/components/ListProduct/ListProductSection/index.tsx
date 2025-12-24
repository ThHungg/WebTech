"use client";
import ProductCard from "@/components/Card/ProductCard";
import { memo, useState } from "react";
import Link from "next/link";
import Pagination from "@/components/Common/Pagination";

const ListProductSection = ({
  products,
  page,
  limit,
  setPage,
  setLimit,
}: {
  products: any;
  page: number;
  limit: number;
  setPage: (page: number) => void;
  setLimit: (limit: number) => void;
}) => {
  const totalItems = products?.total || 0;
  const currentProducts = products?.data || [];


  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <div className="grid grid-cols-3 gap-4">
        {currentProducts?.map((product: any) => (
          <Link key={product.id} href={`/products/${product.id}`}>
            <ProductCard productData={product} />
          </Link>
        ))}
      </div>

      {totalItems > 0 && (
        <Pagination
          page={page}
          limit={limit}
          total={totalItems}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
};

export default memo(ListProductSection);
