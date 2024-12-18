// import { SnackbarProvider } from 'notistack'
// import { AuthProvider, CartProvider, FavouritesProvider } from './contexts'
// import { createTheme, ThemeProvider } from '@mui/material/styles'
// import theme from 'theme'
// import { SWRConfig } from 'swr'
// import axios from 'axios'
// import { API_URL } from 'config'
// import { CategoriesProvider } from './contexts/CategoriesContext'

// const fetcher = (url) => axios.get(`${API_URL}${url}`).then(({ data }) => data)

// const Store = ({ children }) => {
//   return (
//     <ThemeProvider theme={createTheme(theme)}>
//       <SnackbarProvider maxSnack={3} autoHideDuration={1500} preventDuplicate>
//         <SWRConfig value={{ fetcher }}>
//           <AuthProvider>
//             <CategoriesProvider>
//               <FavouritesProvider>
//                 <CartProvider>{children}</CartProvider>
//               </FavouritesProvider>
//             </CategoriesProvider>
//           </AuthProvider>
//         </SWRConfig>
//       </SnackbarProvider>
//     </ThemeProvider>
//   )
// }

// export default Store
import { SnackbarProvider } from 'notistack';
import { AuthProvider, CartProvider, FavouritesProvider } from './contexts';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import theme from 'theme';
import { SWRConfig } from 'swr';
import axios from 'axios';
import { API_URL } from 'config';
import { CategoriesProvider } from './contexts/CategoriesContext';

const fetcher = (productId) => {
  const token = localStorage.getItem('accessToken');
  return axios.get(`http://localhost:8080/api/inventories/${productId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then(({ data }) => data);
};

const Store = ({ children }) => {
  return (
    <ThemeProvider theme={createTheme(theme)}>
      <SnackbarProvider maxSnack={3} autoHideDuration={1500} preventDuplicate>
        <SWRConfig value={{ fetcher }}>
          <AuthProvider>
            <CategoriesProvider>
              <FavouritesProvider>
                <CartProvider>{children}</CartProvider>
              </FavouritesProvider>
            </CategoriesProvider>
          </AuthProvider>
        </SWRConfig>
      </SnackbarProvider>
    </ThemeProvider>
  );
};

export default Store;