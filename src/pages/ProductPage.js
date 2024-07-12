import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ProductDetails from '../components/ProductDetails';

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://20.244.56.144/test/companies/AMZ/categories/Laptop/products`);
        const productDetails = response.data.find(p => p.productName === id); // Adjust based on unique identifier
        setProduct(productDetails);
      } catch (error) {
        console.error('Error fetching product:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (!product) return <div>Product not found</div>;

  return (
    <div className="product-container">
      <ProductDetails product={product} />
    </div>
  );
};

export default ProductPage;
