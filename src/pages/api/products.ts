import { NextApiRequest, NextApiResponse } from "next";
import { Product } from "../../../models/Products";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { category } = req.query;

  try {
    const response = await fetch(`https://dummyjson.com/products`);

    const data = await response.json();
    const products: Product[] = data.products;
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch products!" });
  }
}
