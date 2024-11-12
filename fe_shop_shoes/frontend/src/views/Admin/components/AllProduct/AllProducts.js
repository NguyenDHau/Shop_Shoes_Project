
// import React, { useEffect, useState } from 'react';
// import { Box, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

// const AllProducts = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     console.log("AllProducts component mounted");

//     const fetchProducts = async () => {
//       const accessToken = localStorage.getItem('accessToken') || '';
//       try {
//         const response = await fetch('http://localhost:8080/api/products', {
//           method: 'GET',
//           headers: {
//             Authorization: `Bearer ${accessToken}`,
//             'Content-Type': 'application/json',
//           },
//         });

//         if (!response.ok) {
//           throw new Error('Unable to fetch product list');
//         }

//         const productsData = await response.json();
//         console.log("Fetched products:", productsData);
//         setProducts(productsData);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   return (
//     <Box sx={{ p: 3 }}>
//       {loading ? (
//         <Typography align="center">Đang tải sản phẩm...</Typography>
//       ) : (
//         <TableContainer component={Paper} sx={{ boxShadow: 'none', backgroundColor: 'transparent' }}>
//           <Table>
//             <TableHead>
//               <TableRow>
//                 <TableCell>Image</TableCell>
//                 <TableCell>Product Name</TableCell>
//                 <TableCell>Price (VND)</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {products.map((product) => (
//                 <TableRow key={product.id}>
//                   <TableCell>
//                     <img
//                       src={product.fileUrl || '/images/default-product.webp'}
//                       alt={product.name}
//                       style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '8px' }}
//                     />
//                   </TableCell>
//                   <TableCell>
//                     <Typography variant="body1" sx={{ fontWeight: 600 }}>
//                       {product.name}
//                     </Typography>
//                   </TableCell>
//                   <TableCell>
//                     <Typography color="primary" variant="body1" sx={{ fontWeight: 600 }}>
//                       {product.price} VND
//                     </Typography>
//                   </TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer>
//       )}
//     </Box>
//   );
// };

// export default AllProducts;


import React, { useState, useEffect } from 'react';
import { Button, Box, Typography, Grid, Paper } from '@mui/material';
import ProductForm from './ProductForm/ProductForm'; // Import component thêm sản phẩm
import axios from 'axios';

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showProductForm, setShowProductForm] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      const accessToken = localStorage.getItem('accessToken') || '';
      try {
        const response = await axios.get('http://localhost:8080/api/products', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
        });
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleAddProductClick = () => {
    setShowProductForm(true);
  };

  const handleCloseProductForm = () => {
    setShowProductForm(false);
  };

  return (
    <Box sx={{ p: 3, marginTop: '800px', overflowY: 'auto' }}>
      <Typography variant="h4" gutterBottom>Danh Sách Sản Phẩm</Typography>

      {/* Nút Thêm Sản Phẩm */}
      <Button variant="contained" color="primary" onClick={handleAddProductClick} sx={{ mb: 3 }}>
        Thêm Sản Phẩm
      </Button>

      {showProductForm ? (
        <ProductForm onClose={handleCloseProductForm} /> // Hiển thị form thêm sản phẩm
      ) : (
        <Grid container spacing={2}>
          {loading ? (
            <Typography align="center">Đang tải sản phẩm...</Typography>
          ) : (
            products.map((product) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                <Paper sx={{ p: 2, textAlign: 'center' }}>
                  <img
                    src={product.fileUrl || '/default-image.png'}
                    alt={product.name}
                    style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '8px' }}
                  />
                  <Typography variant="h6" sx={{ fontSize: '16px', fontWeight: 600, mt: 1 }}>
                    {product.name}
                  </Typography>
                  <Typography color="primary" sx={{ fontSize: '14px', fontWeight: 600 }}>
                    {product.price} VND
                  </Typography>
                </Paper>
              </Grid>
            ))
          )}
        </Grid>
      )}
    </Box>
  );
};

export default AllProducts;
