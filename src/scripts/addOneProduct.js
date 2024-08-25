import * as fs from 'fs/promises';

import { PATH_DB } from '../constants/products.js';

import { createFakeProduct } from '../utils/createFakeProduct.js';

const addOneProduct = async () => {
  const productList = await fs.readFile(PATH_DB, 'utf-8');
  const data = productList ? JSON.parse(productList) : [];

  const newProduct = createFakeProduct();
  data.push(newProduct);

  await fs.writeFile(PATH_DB, JSON.stringify(data, null, 2), 'utf-8');
};

addOneProduct();
