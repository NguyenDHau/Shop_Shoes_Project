


// // import { useState } from 'react';
// // import { Typography, Box, Grid, Button, MenuItem, Select } from '@mui/material';
// // import { useNavigate } from 'react-router-dom'; // Sử dụng để điều hướng
// // import DisplayCurrency from '../../../../components/DisplayCurrency/DisplayCurrency';
// // import axios from 'axios';

// // const ProductDetailsCard = ({ products, addToCart }) => {
// //   const productArray = Array.isArray(products) ? products : [products];
// //   const [selectedColorId, setSelectedColorId] = useState('');
// //   const [listSize, setListSize] = useState([]); // Danh sách kích thước sẽ được cập nhật
// //   const [selectedSize, setSelectedSize] = useState(''); // Kích thước được chọn
// //   const [quantity, setQuantity] = useState(0); // Số lượng sản phẩm trong giỏ hàng
// //   const navigate = useNavigate(); // Dùng để điều hướng
// //   const [inventoryId, setInventoryId] = useState(null);

// //   console.log('Product array:', productArray);
// //   console.log('Selected size:', selectedSize);
// //   console.log('Selected color ID:', selectedColorId);

// //   const { name, productCode, price } = productArray[0]; // Lấy giá từ productArray
// //   const [listColor, setListColor] = useState(productArray[0]?.listColor || []);
// //   const [listSizeData, setListSizeData] = useState(productArray[0]?.listSize || []);
// //   const imageUrl = listColor[0]?.fileUrl;

// //   if (!productArray || productArray.length === 0) {
// //     return <div>Không có chi tiết sản phẩm</div>;
// //   }

// //   // Hàm xử lý khi click vào ảnh màu
// //   const handleColorClick = (colorId) => {
// //     setSelectedColorId(colorId);
// //     console.log("Selected Color ID:", colorId);

// //     // Lọc danh sách kích thước dựa trên colorId
// //     const filteredSizes = listSizeData.filter((size) => size.colorId === colorId);
// //     setListSize(filteredSizes); // Cập nhật danh sách kích thước
// //     setSelectedSize(filteredSizes[0]?.id || ''); // Đặt kích thước đầu tiên làm mặc định
// //     setQuantity(filteredSizes[0]?.quantity || 0); // Cập nhật số lượng
// //   };

// //   return (
// //     <Grid container spacing={3}>
// //       <Grid item xs={12} md={6}>
// //         <Box display="flex" alignItems="center" flexDirection="column">
// //           <Box
// //             sx={{
// //               width: 300,
// //               height: 300,
// //               mb: 5,
// //               borderRadius: 2,
// //               backgroundColor: '#f0f0f0',
// //               display: 'flex',
// //               justifyContent: 'center',
// //               alignItems: 'center',
// //             }}
// //           >
// //             {imageUrl ? (
// //               <img src={imageUrl} alt="Hình ảnh sản phẩm" style={{ maxWidth: '100%', height: 'auto' }} />
// //             ) : (
// //               <Typography variant="body2">Chưa có hình ảnh</Typography>
// //             )}
// //           </Box>
// //         </Box>
// //       </Grid>

// //       <Grid item xs={12} md={6}>
// //         <Box display="flex" flexDirection="column" gap={2}>
// //           <Typography variant="h4" fontWeight="bold">Mã sản phẩm: {productCode}</Typography>
// //           <Typography>Tên: <b>{name}</b></Typography>
// //           <Typography>Giá: <DisplayCurrency number={price} /></Typography> {/* Hiển thị giá của sản phẩm */}

// //           <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
// //             {listColor.map((colorObj, index) => (
// //               <div
// //                 key={index}
// //                 style={{ textAlign: 'center', cursor: 'pointer' }}
// //                 onClick={() => handleColorClick(colorObj.id)} // Gọi hàm khi click vào ảnh
// //               >
// //                 <img
// //                   src={colorObj.fileUrl}  // Lấy đường dẫn ảnh từ `colorObj.fileUrl`
// //                   alt={`Hình ${index + 1}`}
// //                   style={{ width: '50px', height: '50px', objectFit: 'cover' }}
// //                 />
// //                 <p style={{ margin: '4px 0 0' }}>{colorObj.colorName}</p> {/* Hiển thị tên màu */}
// //               </div>
// //             ))}
// //           </div>

// //           {/* Dropdown để chọn size */}
// //           <Select
// //             value={selectedSize}
// //             onChange={(e) => setSelectedSize(e.target.value)}
// //             displayEmpty
// //             sx={{ marginBottom: '16px' }}
// //           >
// //             {listSize.map((sizeObj, index) => (
// //               <MenuItem key={index} value={sizeObj.id}>
// //                 Size: {sizeObj.sizeName}
// //               </MenuItem>
// //             ))}
// //           </Select>

// //           {/* Hiển thị số lượng tương ứng với size đã chọn */}
// //           <Typography>
// //             Số lượng còn: <b>{quantity}</b>
// //           </Typography>

// //           <Button variant="contained" color="primary" onClick={addToCart}>
// //             Thêm vào giỏ hàng
// //           </Button>
// //         </Box>
// //       </Grid>
// //     </Grid>
// //   );
// // };

// // export default ProductDetailsCard;


// import { useState, useEffect } from 'react';
// import { Typography, Box, Grid, Button, MenuItem, Select, TextField } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
// import DisplayCurrency from '../../../../components/DisplayCurrency/DisplayCurrency';
// import axios from 'axios';

// const ProductDetailsCard = ({ products }) => {
//   const productArray = Array.isArray(products) ? products : [products];
//   const [selectedColorId, setSelectedColorId] = useState('');
//   const [listSize, setListSize] = useState([]);
//   const [selectedSize, setSelectedSize] = useState('');
//   const [quantity, setQuantity] = useState(1); // Số lượng mặc định
//   const [inventoryId, setInventoryId] = useState(null);
//   const navigate = useNavigate();

//   const { name, productCode, price } = productArray[0];
//   const [listColor, setListColor] = useState(productArray[0]?.listColor || []);
//   const [listSizeData, setListSizeData] = useState(productArray[0]?.listSize || []);
//   const imageUrl = listColor[0]?.fileUrl;

//   // Kiểm tra nếu không có chi tiết sản phẩm
//   if (!productArray || productArray.length === 0) {
//     return <div>Không có chi tiết sản phẩm</div>;
//   }

//   // Hàm xử lý khi click vào ảnh màu
//   const handleColorClick = (colorId) => {
//     setSelectedColorId(colorId);
//     const filteredSizes = listSizeData.filter((size) => size.colorId === colorId);
//     setListSize(filteredSizes);
//     setSelectedSize(filteredSizes[0]?.id || '');
//     setQuantity(filteredSizes[0]?.quantity || 0); // Đặt lại số lượng mặc định
//     fetchInventoryId(filteredSizes[0]?.id);
//   };

//   // Hàm tìm kiếm inventoryId dựa trên productId, colorId và sizeId
//   const fetchInventoryId = async (sizeId) => {
//     try {
//       const productId = productArray[0].productId;
//       const authToken = localStorage.getItem("accessToken"); // Lấy token từ localStorage
  
//       const response = await axios.get("http://localhost:8080/api/inventories/search", {
//         params: { productId, colorId: selectedColorId, sizeId },
//         headers: {
//           Authorization: `Bearer ${authToken}`, // Thêm token vào header
//         },
//       });
  
//       setInventoryId(response.data);
//       console.log("Inventory ID:", response.data);
//     } catch (error) {
//       console.error("Lỗi khi tìm inventoryId:", error);
//       setInventoryId(null);
//     }
//   };

//   // Hàm thêm sản phẩm vào giỏ hàng
//   const addToCart = async () => {
//     try {
//       const userId = localStorage.getItem('userId'); // Lấy userId từ localStorage
//       const token = localStorage.getItem('accessToken'); // Lấy token từ localStorage
  
//       if (!userId || !inventoryId || quantity <= 0) {
//         alert('Vui lòng chọn đầy đủ thông tin và nhập số lượng hợp lệ.');
//         return;
//       }
  
//       const cartData = {
//         userId: parseInt(userId, 10),
//         inventoryId,
//         quantity: 1,
//       };
  
//       const response = await axios.post('http://localhost:8080/api/carts', cartData, {
//         headers: {
//           Authorization: `Bearer ${token}`, // Thêm token vào header
//         },
//       });
  
//       if (response.status === 200 || response.status === 201) {
//         alert('Thêm vào giỏ hàng thành công!');
//       } else {
//         alert('Không thể thêm vào giỏ hàng.');
//       }
//     } catch (error) {
//       console.error('Lỗi khi thêm vào giỏ hàng:', error);
//       alert('Có lỗi xảy ra khi thêm sản phẩm vào giỏ hàng.');
//     }
//   };
  

//   return (
//     <Grid container spacing={3}>
//       <Grid item xs={12} md={6}>
//         <Box display="flex" alignItems="center" flexDirection="column">
//           <Box
//             sx={{
//               width: 300,
//               height: 300,
//               mb: 5,
//               borderRadius: 2,
//               backgroundColor: '#f0f0f0',
//               display: 'flex',
//               justifyContent: 'center',
//               alignItems: 'center',
//             }}
//           >
//             {imageUrl ? (
//               <img src={imageUrl} alt="Hình ảnh sản phẩm" style={{ maxWidth: '100%', height: 'auto' }} />
//             ) : (
//               <Typography variant="body2">Chưa có hình ảnh</Typography>
//             )}
//           </Box>
//         </Box>
//       </Grid>

//       <Grid item xs={12} md={6}>
//         <Box display="flex" flexDirection="column" gap={2}>
//           <Typography variant="h4" fontWeight="bold">Mã sản phẩm: {productCode}</Typography>
//           <Typography>Tên: <b>{name}</b></Typography>
//           <Typography>Giá: <DisplayCurrency number={price} /></Typography>

//           <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
//             {listColor.map((colorObj, index) => (
//               <div
//                 key={index}
//                 style={{ textAlign: 'center', cursor: 'pointer' }}
//                 onClick={() => handleColorClick(colorObj.id)}
//               >
//                 <img
//                   src={colorObj.fileUrl}
//                   alt={`Hình ${index + 1}`}
//                   style={{ width: '50px', height: '50px', objectFit: 'cover' }}
//                 />
//                 <p style={{ margin: '4px 0 0' }}>{colorObj.colorName}</p>
//               </div>
//             ))}
//           </div>

//           {/* Dropdown để chọn size */}
//           <Select
//             value={selectedSize}
//             onChange={(e) => {
//               setSelectedSize(e.target.value);
//               fetchInventoryId(e.target.value);
//             }}
//             displayEmpty
//             sx={{ marginBottom: '16px' }}
//           >
//             {listSize.map((sizeObj, index) => (
//               <MenuItem key={index} value={sizeObj.id}>
//                 Size: {sizeObj.sizeName}
//               </MenuItem>
//             ))}
//           </Select>


//           {/* Hiển thị số lượng còn lại */}
//           <Typography>
//             Số lượng còn: <b>{quantity}</b>
//           </Typography>

//           <Button variant="contained" color="primary" onClick={addToCart}>
//             Thêm vào giỏ hàng
//           </Button>
//         </Box>
//       </Grid>
//     </Grid>
//   );
// };

// export default ProductDetailsCard;



import { useState, useEffect } from 'react';
import { Typography, Box, Grid, Button, MenuItem, Select, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import DisplayCurrency from '../../../../components/DisplayCurrency/DisplayCurrency';
import axios from 'axios';
import { useCart } from 'core'; // Import useCart để sử dụng addToCart từ context

const ProductDetailsCard = ({ products }) => {
  const productArray = Array.isArray(products) ? products : [products];
  const [selectedColorId, setSelectedColorId] = useState('');
  const [listSize, setListSize] = useState([]);
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [inventoryId, setInventoryId] = useState(null);
  const navigate = useNavigate();
  const { addToCart } = useCart(); // Lấy addToCart từ context

  const { name, productCode, price } = productArray[0];
  const [listColor, setListColor] = useState(productArray[0]?.listColor || []);
  const [listSizeData, setListSizeData] = useState(productArray[0]?.listSize || []);
  const imageUrl = listColor[0]?.fileUrl;

  if (!productArray || productArray.length === 0) {
    return <div>Không có chi tiết sản phẩm</div>;
  }

  const handleColorClick = (colorId) => {
    setSelectedColorId(colorId);
    const filteredSizes = listSizeData.filter((size) => size.colorId === colorId);
    setListSize(filteredSizes);
    setSelectedSize(filteredSizes[0]?.id || '');
    setQuantity(filteredSizes[0]?.quantity || 0);
    fetchInventoryId(filteredSizes[0]?.id);
  };

  const fetchInventoryId = async (sizeId) => {
    try {
      const productId = productArray[0].productId;
      const authToken = localStorage.getItem("accessToken");
  
      const response = await axios.get("http://localhost:8080/api/inventories/search", {
        params: { productId, colorId: selectedColorId, sizeId },
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
  
      setInventoryId(response.data);
      console.log("Inventory ID:", response.data);
    } catch (error) {
      console.error("Lỗi khi tìm inventoryId:", error);
      setInventoryId(null);
    }
  };

  const handleAddToCart = () => {
    if (inventoryId) {
      addToCart(inventoryId, 1); // Mỗi lần click sẽ thêm 1 quantity
    } else {
      alert('Vui lòng chọn đầy đủ thông tin.');
    }
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <Box display="flex" alignItems="center" flexDirection="column">
          <Box
            sx={{
              width: 300,
              height: 300,
              mb: 5,
              borderRadius: 2,
              backgroundColor: '#f0f0f0',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {imageUrl ? (
              <img src={imageUrl} alt="Hình ảnh sản phẩm" style={{ maxWidth: '100%', height: 'auto' }} />
            ) : (
              <Typography variant="body2">Chưa có hình ảnh</Typography>
            )}
          </Box>
        </Box>
      </Grid>

      <Grid item xs={12} md={6}>
        <Box display="flex" flexDirection="column" gap={2}>
          <Typography variant="h4" fontWeight="bold">Mã sản phẩm: {productCode}</Typography>
          <Typography>Tên: <b>{name}</b></Typography>
          <Typography>Giá: <DisplayCurrency number={price} /></Typography>

          <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
            {listColor.map((colorObj, index) => (
              <div
                key={index}
                style={{ textAlign: 'center', cursor: 'pointer' }}
                onClick={() => handleColorClick(colorObj.id)}
              >
                <img
                  src={colorObj.fileUrl}
                  alt={`Hình ${index + 1}`}
                  style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                />
                <p style={{ margin: '4px 0 0' }}>{colorObj.colorName}</p>
              </div>
            ))}
          </div>

          <Select
            value={selectedSize}
            onChange={(e) => {
              setSelectedSize(e.target.value);
              fetchInventoryId(e.target.value);
            }}
            displayEmpty
            sx={{ marginBottom: '16px' }}
          >
            {listSize.map((sizeObj, index) => (
              <MenuItem key={index} value={sizeObj.id}>
                Size: {sizeObj.sizeName}
              </MenuItem>
            ))}
          </Select>

          <Typography>
            Số lượng còn: <b>{quantity}</b>
          </Typography>

          <Button variant="contained" color="primary" onClick={handleAddToCart}>
            Thêm vào giỏ hàng
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ProductDetailsCard;
