// import { Grid, useMediaQuery, Typography, Box, Link } from '@mui/material'
// import { useCart } from 'core'
// import { PageLayout } from 'layouts/Main/components'
// import { CartProduct } from './components'
// import { ProductCard, Subtotal, SideMenu } from 'components'
// import { useLocation } from 'react-router-dom'

// const Cart = ({ withoutFooter }) => {
//   const location = useLocation()
//   const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'))
//   const { cart } = useCart()
//   return (
//     <PageLayout container isAsync={false} withoutFooter={withoutFooter}>
//       {cart.length < 1 ? (
//         <Box display="flex" alignItems="center" justifyContent="center" flexDirection="column" gap={2} height={450}>
//           <Box component="img" src="/images/cart.png" alt="Cart" height={200} />
//           <Typography align="center" variant="h4">
//             Your cart is currently empty!
//           </Typography>
//           <Typography variant="subtitle1" color="gray" align="center">
//             Looks like you have not made your choice yet. Browse our awesome store,
//             <Link href="/">start shopping now</Link>!
//           </Typography>
//         </Box>
//       ) : (
//         <Grid container spacing={3}>
//           <Grid item xs={12} md={8} lg={8}>
//             {cart.map((product) =>
//               !isMobile ? (
//                 <CartProduct key={product._id} product={product} />
//               ) : (
//                 <ProductCard key={product._id} product={product} />
//               )
//             )}
//           </Grid>
//           <Grid item xs={12} md={4} lg={4}>
//             {location.pathname === '/cart' ? <SideMenu /> : <Subtotal />}
//           </Grid>
//         </Grid>
//       )}
//     </PageLayout>
//   )
// }

// export default Cart


// import { Grid, useMediaQuery, Typography, Box, Link } from '@mui/material'
// import { PageLayout } from 'layouts/Main/components'
// import { CartProduct } from './components'
// import { ProductCard, Subtotal, SideMenu } from 'components'
// import { useLocation } from 'react-router-dom'
// import { useEffect, useState } from 'react'
// import axios from 'axios'

// const Cart = ({ withoutFooter }) => {
//   const location = useLocation()
//   const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'))
//   const [cart, setCart] = useState([]) // State để lưu dữ liệu giỏ hàng

//   // Lấy `userId` từ `localStorage`
//   const userId = localStorage.getItem('userId')
//   const token = localStorage.getItem('accessToken') // Thêm token vào headers nếu cần thiết

//   // Hàm gọi API để lấy dữ liệu giỏ hàng
//   const fetchCartDetails = async () => {
//     try {
//       const response = await axios.get(`http://localhost:8080/api/carts/details/${userId}`, {
//         headers: {
//           Authorization: `Bearer ${token}`, // Thêm token vào headers nếu cần thiết
//         },
//       })
//       setCart(response.data) // Cập nhật `cart` với dữ liệu từ API
//     } catch (error) {
//       console.error('Lỗi khi lấy giỏ hàng:', error)
//     }
//   }

//   // Gọi API khi component khởi tạo
//   useEffect(() => {
//     fetchCartDetails()
//   }, [])

//   return (
//     <PageLayout container isAsync={false} withoutFooter={withoutFooter}>
//       {cart.length < 1 ? (
//         <Box display="flex" alignItems="center" justifyContent="center" flexDirection="column" gap={2} height={450}>
//           <Box component="img" src="/images/cart.png" alt="Cart" height={200} />
//           <Typography align="center" variant="h4">
//             Your cart is currently empty!
//           </Typography>
//           <Typography variant="subtitle1" color="gray" align="center">
//             Looks like you have not made your choice yet. Browse our awesome store,
//             <Link href="/">start shopping now</Link>!
//           </Typography>
//         </Box>
//       ) : (
//         <Grid container spacing={3}>
//           <Grid item xs={12} md={8} lg={8}>
//             {cart.map((product) =>
//               !isMobile ? (
//                 <CartProduct key={product.id} product={product} /> // Sử dụng `product.id` thay vì `_id`
//               ) : (
//                 <ProductCard key={product.id} product={product} />
//               )
//             )}
//           </Grid>
//           <Grid item xs={12} md={4} lg={4}>
//             {location.pathname === '/cart' ? <SideMenu /> : <Subtotal />}
//           </Grid>
//         </Grid>
//       )}
//     </PageLayout>
//   )
// }

// export default Cart


// import { Grid, useMediaQuery, Typography, Box, Link, IconButton } from '@mui/material'
// import { PageLayout } from 'layouts/Main/components'
// import { CartProduct } from './components'
// import { ProductCard, Subtotal, SideMenu } from 'components'
// import { useLocation } from 'react-router-dom'
// import { useEffect, useState } from 'react'
// import axios from 'axios'
// import AddIcon from '@mui/icons-material/Add';
// import RemoveIcon from '@mui/icons-material/Remove';

// const Cart = ({ withoutFooter }) => {
//   const location = useLocation()
//   const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'))
//   const [cart, setCart] = useState([])

//   const userId = localStorage.getItem('userId')
//   const token = localStorage.getItem('accessToken')

//   const fetchCartDetails = async () => {
//     try {
//       const response = await axios.get(`http://localhost:8080/api/carts/details/${userId}`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       })
//       setCart(response.data)
//     } catch (error) {
//       console.error('Lỗi khi lấy giỏ hàng:', error)
//     }
//   }

//   const updateQuantity = async (cartId, quantity) => {
//     try {
//       await axios.put(`http://localhost:8080/api/carts/${cartId}`, { quantity }, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       })
//       fetchCartDetails() // Refresh cart data
//     } catch (error) {
//       console.error('Lỗi khi cập nhật số lượng:', error)
//     }
//   }
  
//   const removeProduct = async (cartId) => {
//     try {
//       await axios.delete(`http://localhost:8080/api/carts/${cartId}`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       })
//       fetchCartDetails() // Refresh cart data
//     } catch (error) {
//       console.error('Lỗi khi xóa sản phẩm:', error)
//     }
//   }
  
//   const handleIncrease = (product) => {
//     const newQuantity = product.quantity + 1
//     updateQuantity(product.id, newQuantity) // Sử dụng product.id làm cartId
//   }
  
//   const handleDecrease = (product) => {
//     const newQuantity = product.quantity - 1
//     if (newQuantity > 0) {
//       updateQuantity(product.id, newQuantity) // Sử dụng product.id làm cartId
//     } else {
//       removeProduct(product.id) // Sử dụng product.id làm cartId
//     }
//   }
  

//   useEffect(() => {
//     fetchCartDetails()
//   }, [])

//   return (
//     <PageLayout container isAsync={false} withoutFooter={withoutFooter}>
//       {cart.length < 1 ? (
//         <Box display="flex" alignItems="center" justifyContent="center" flexDirection="column" gap={2} height={450}>
//           <Box component="img" src="/images/cart.png" alt="Cart" height={200} />
//           <Typography align="center" variant="h4">
//             Your cart is currently empty!
//           </Typography>
//           <Typography variant="subtitle1" color="gray" align="center">
//             Looks like you have not made your choice yet. Browse our awesome store,
//             <Link href="/">start shopping now</Link>!
//           </Typography>
//         </Box>
//       ) : (
//         <Grid container spacing={3}>
//           <Grid item xs={12} md={8} lg={8}>
//             {cart.map((product) =>
//               !isMobile ? (
//                 <CartProduct key={product.id} product={product}>
//                   <IconButton onClick={() => handleDecrease(product)}><RemoveIcon /></IconButton>
//                   <Typography>{product.quantity}</Typography>
//                   <IconButton onClick={() => handleIncrease(product)}><AddIcon /></IconButton>
//                 </CartProduct>
//               ) : (
//                 <ProductCard key={product.id} product={product}>
//                   <IconButton onClick={() => handleDecrease(product)}><RemoveIcon /></IconButton>
//                   <Typography>{product.quantity}</Typography>
//                   <IconButton onClick={() => handleIncrease(product)}><AddIcon /></IconButton>
//                 </ProductCard>
//               )
//             )}
//           </Grid>
//           <Grid item xs={12} md={4} lg={4}>
//             {location.pathname === '/cart' ? <SideMenu /> : <Subtotal />}
//           </Grid>
//         </Grid>
//       )}
//     </PageLayout>
//   )
// }

// export default Cart


// import { Grid, useMediaQuery, Typography, Box, Link, IconButton } from '@mui/material'
// import { PageLayout } from 'layouts/Main/components'
// import { CartProduct } from './components'
// import { ProductCard, Subtotal, SideMenu } from 'components'
// import { useLocation } from 'react-router-dom'
// import { useEffect, useState } from 'react'
// import axios from 'axios'
// import AddIcon from '@mui/icons-material/Add';
// import RemoveIcon from '@mui/icons-material/Remove';

// const Cart = ({ withoutFooter }) => {
//   const location = useLocation()
//   const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'))
//   const [cart, setCart] = useState([])

//   const userId = localStorage.getItem('userId')
//   const token = localStorage.getItem('accessToken')

//   const fetchCartDetails = async () => {
//     try {
//       const response = await axios.get(`http://localhost:8080/api/carts/details/${userId}`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       })
//       setCart(response.data)
//     } catch (error) {
//       console.error('Lỗi khi lấy giỏ hàng:', error)
//     }
//   }

//   const updateQuantity = async (cartId, quantity) => {
//     try {
//       await axios.put(`http://localhost:8080/api/carts/${cartId}`, { quantity }, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       })
//       fetchCartDetails() // Refresh cart data
//     } catch (error) {
//       console.error('Lỗi khi cập nhật số lượng:', error)
//     }
//   }
  
//   const removeProduct = async (cartId) => {
//     try {
//       await axios.delete(`http://localhost:8080/api/carts/${cartId}`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       })
//       fetchCartDetails() // Refresh cart data
//     } catch (error) {
//       console.error('Lỗi khi xóa sản phẩm:', error)
//     }
//   }
  
//   const handleIncrease = (product) => {
//     const newQuantity = product.quantity + 1
//     updateQuantity(product.id, newQuantity) // Sử dụng product.id làm cartId
//   }
  
//   const handleDecrease = (product) => {
//     const newQuantity = product.quantity - 1
//     if (newQuantity > 0) {
//       updateQuantity(product.id, newQuantity) // Sử dụng product.id làm cartId
//     } else {
//       removeProduct(product.id) // Sử dụng product.id làm cartId
//     }
//   }

//   useEffect(() => {
//     fetchCartDetails()
//   }, [])

//   return (
//     <PageLayout container isAsync={false} withoutFooter={withoutFooter}>
//       {cart.length < 1 ? (
//         <Box display="flex" alignItems="center" justifyContent="center" flexDirection="column" gap={2} height={450}>
//           <Box component="img" src="/images/cart.png" alt="Cart" height={200} />
//           <Typography align="center" variant="h4">
//             Your cart is currently empty!
//           </Typography>
//           <Typography variant="subtitle1" color="gray" align="center">
//             Looks like you have not made your choice yet. Browse our awesome store,
//             <Link href="/">start shopping now</Link>!
//           </Typography>
//         </Box>
//       ) : (
//         <Grid container spacing={3}>
//           <Grid item xs={12} md={8} lg={8}>
//             {cart.map((product) =>
//               !isMobile ? (
//                 <CartProduct
//                   key={product.id}
//                   product={product}
//                   fetchCartDetails={fetchCartDetails} // Truyền hàm fetchCartDetails vào CartProduct
//                   handleIncrease={() => handleIncrease(product)} // Truyền handleIncrease vào CartProduct
//                   handleDecrease={() => handleDecrease(product)} // Truyền handleDecrease vào CartProduct
//                 />
//               ) : (
//                 <ProductCard
//                   key={product.id}
//                   product={product}
//                   fetchCartDetails={fetchCartDetails} // Truyền fetchCartDetails vào ProductCard nếu cần
//                   handleIncrease={() => handleIncrease(product)} // Truyền handleIncrease vào ProductCard
//                   handleDecrease={() => handleDecrease(product)} // Truyền handleDecrease vào ProductCard
//                 />
//               )
//             )}
//           </Grid>
//           <Grid item xs={12} md={4} lg={4}>
//             {location.pathname === '/cart' ? <SideMenu /> : <Subtotal />}
//           </Grid>
//         </Grid>
//       )}
//     </PageLayout>
//   )
// }

// export default Cart


import { Grid, useMediaQuery, Typography, Box, Link } from '@mui/material'
import { PageLayout } from 'layouts/Main/components'
import { CartProduct } from './components'
import { useLocation } from 'react-router-dom'
import { useCart } from 'core'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import { ProductCard, Subtotal, SideMenu } from 'components'

const Cart = ({ withoutFooter }) => {
  const location = useLocation()
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'))
  const { cart, updateQuantity, removeProduct } = useCart()

  const handleIncrease = (product) => {
    const newQuantity = product.quantity + 1
    updateQuantity(product.id, newQuantity)
  }

  const handleDecrease = (product) => {
    const newQuantity = product.quantity - 1
    if (newQuantity > 0) {
      updateQuantity(product.id, newQuantity)
    } else {
      removeProduct(product.id)
    }
  }

  return (
    <PageLayout container isAsync={false} withoutFooter={withoutFooter}>
      {cart.length < 1 ? (
        <Box display="flex" alignItems="center" justifyContent="center" flexDirection="column" gap={2} height={450}>
          <Box component="img" src="/images/cart.png" alt="Cart" height={200} />
          <Typography align="center" variant="h4">
            Your cart is currently empty!
          </Typography>
          <Typography variant="subtitle1" color="gray" align="center">
            Looks like you have not made your choice yet. Browse our awesome store,
            <Link href="/">start shopping now</Link>!
          </Typography>
        </Box>
      ) : (
        <Grid container spacing={3}>
          <Grid item xs={12} md={8} lg={8}>
            {cart.map((product) =>
              !isMobile ? (
                <CartProduct
                  key={product.id}
                  product={product}
                  handleIncrease={() => handleIncrease(product)}
                  handleDecrease={() => handleDecrease(product)}
                />
              ) : (
                <ProductCard
                  key={product.id}
                  product={product}
                  handleIncrease={() => handleIncrease(product)}
                  handleDecrease={() => handleDecrease(product)}
                />
              )
            )}
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            {location.pathname === '/cart' ? <SideMenu /> : <Subtotal />}
          </Grid>
        </Grid>
      )}
    </PageLayout>
  )
}

export default Cart
