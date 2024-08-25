import getAllProducts from '../scripts/getAllProducts.js';
import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/products.js';

export const removeRandomProduct = async () => {
  const productList = await getAllProducts();
  const productIndex = Math.floor(Math.random() * productList.length);
  const filteredProductList = productList.filter((productItem, index) => {
    return index !== productIndex;
  });
  await fs.writeFile(
    PATH_DB,
    JSON.stringify(filteredProductList, null, 2),
    'utf-8',
  );
};
await removeRandomProduct();
