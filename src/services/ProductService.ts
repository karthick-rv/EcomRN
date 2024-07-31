import apiClient from './ApiClient';

class ProductService {
  static async getProducts() {
    try {
      const response = await apiClient.get('/products/');
      console.log('Products', response.data);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  static async getProductCategories() {
    try {
      const response = await apiClient.get('/products/categories');
      console.log('Product Categories', response.data);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

// Since this service doesn't operate on any data/state of the class, the functions are static.
// It could be a straight forward functions also instead of class, but since the functions are related,
// grouping it as class

export default ProductService;
