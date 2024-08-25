import * as fs from 'node:fs/promises';

import { PATH_DB } from '../constants/products.js';

const getAllProducts = async () => {
  const data = await fs.readFile(PATH_DB, 'utf-8');
  const products = data ? JSON.parse(data) : [];
  return products;
};

console.log(await getAllProducts());

export default getAllProducts;
