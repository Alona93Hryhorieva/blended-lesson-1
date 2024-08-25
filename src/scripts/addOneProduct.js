import * as fs from 'fs/promises';

import { PATH_DB } from '../constants/products.js';

import { createFakeProduct } from '../utils/createFakeProduct.js';
import getAllProducts from './getAllProducts.js';

const addOneProduct = async () => {
  const data = await getAllProducts();

  const newProduct = createFakeProduct();
  data.push(newProduct);

  await fs.writeFile(PATH_DB, JSON.stringify(data, null, 2), 'utf-8');
};

addOneProduct();
