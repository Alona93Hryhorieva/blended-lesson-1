import { PATH_DB } from '../constants/products.js';
import { createFakeProduct } from '../utils/createFakeProduct.js';
import * as fs from 'node:fs/promises';
import getAllProducts from './getAllProducts.js';

const generateProduct = async (product) => {
  try {
    const getProducts = await getAllProducts();
    for (let i = 0; i < product; i++) {
      const newProduct = createFakeProduct();
      getProducts.push(newProduct);
    }

    await fs.writeFile(PATH_DB, JSON.stringify(getProducts, null, 2), 'utf-8');
  } catch (error) {
    console.error('error generate products', error);
  }
};

generateProduct(3);
export default generateProduct;
