import Button from "@/components/Button";
import styles from "@/styles/Products.module.css";
import Image from "next/image";
import Card from "@/components/Card";
import classNames from "classnames";
import TitleText from "@/components/TitleText";
import ProductCard from "@/components/ProductCard";
import Head from "next/head";
import SubHeader from "@/components/SubHeader";
import Accordion from "@/components/Accordion";
import { useEffect, useState } from "react";
import { Product } from "../../../models/Products";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleCategorySelect = async (category: string | null) => {
    setSelectedCategory(category);
    if (category) {
      try {
        const res = await fetch(`/api/products/${category}`);
        const data = await res.json();
        const products: Product[] = data.products;
        setProducts(products);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    }
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        let url = "https://dummyjson.com/products";
        if (selectedCategory) {
          console.log(selectedCategory, "Selected Category");
          url = `/api/products/${selectedCategory}`;
        }
        const response = await fetch(url);
        const data = await response.json();
        console.log(data, "fetched data");
        const products: Product[] = data.products;
        setProducts(products);
        setIsLoading(false);
        console.log(products, "products");
      } catch (error) {
        setIsLoading(false);
        console.error("Failed to fetch products:", error);
      }
    };

    const fetchCategories = async () => {
      try {
        const response = await fetch("/api/categories");
        const data = await response.json();
        const categories: string[] = data.slice(0, 4);
        setCategories(categories);
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      }
    };

    fetchProducts();
    fetchCategories();
  }, [selectedCategory]);

  return (
    <>
      <Head>
        <title> Products | Logo Electronics</title>
      </Head>
      <div className={classNames(styles.products_page_bg_wrapper, "pt-16")}>
        <TitleText text="Products" />
      </div>
      <div className="flex py-24 mb-36 h-72 justify-around items-center">
        <SubHeader
          text={selectedCategory ? `>> ${selectedCategory}` : ">> All Products"}
          fontColor="#fff"
          extraLarge
        />
        <Accordion
          onCategorySelect={handleCategorySelect}
          categories={categories}
        />
      </div>
      <div className="products-section">
        {isLoading ? (
          <p className="text-white text-center text-3xl">Loading products...</p>
        ) : products ? (
          products.length > 0 ? (
            <div className="products grid grid-cols-3 justify-around gap-2 mt-20 -mb-24 place-items-center px-48">
              {products.map((product, index) => (
                <ProductCard product={product} key={index} />
              ))}
            </div>
          ) : (
            <p className="text-white text-center text-3xl">
              No products found.
            </p>
          )
        ) : (
          <p className="text-white text-center text-3xl">
            Failed to fetch products.
          </p>
        )}
      </div>
    </>
  );
};

export default Products;
