import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ProductDetails from '../components/ProductDetails';

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await axios.get(`http://20.244.56.144/test/companies/AMZ/categories/Laptop/products`);
      const productDetails = response.data.find(p => p.productName === id); // Adjust based on unique identifier
      setProduct(productDetails);
    };

    fetchProduct();
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div>
      <ProductDetails product={product} />
    </div>
  );
};

export default ProductPage;