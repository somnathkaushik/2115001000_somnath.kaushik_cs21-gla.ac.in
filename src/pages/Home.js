import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductList from '../components/ProductList';
import Filter from '../components/Filter';
import Sort from '../components/Sort';
import Pagination from '../components/Pagination';
import { getProducts } from '../services/api';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get('http://20.244.56.144/test/companies/AMZ/categories/Laptop/products', {
        params: {
          top: 10,
          minPrice: filters.minPrice,
          maxPrice: filters.maxPrice,
        },
      });
      setProducts(response.data);
      setTotalPages(Math.ceil(response.data.length / 10));
    };

    fetchProducts();
  }, [filters, sort, page]);

  return (
    <div>
      <Filter setFilters={setFilters} />
      <Sort setSort={setSort} />
      <ProductList products={products} />
      <Pagination page={page} setPage={setPage} totalPages={totalPages} />
    </div>
  );
};

export default Home;