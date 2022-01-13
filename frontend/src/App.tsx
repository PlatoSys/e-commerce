import { lazy, Suspense } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";

import Loader from "./components/Loader";

const Header = lazy(() => import("./components/Header"));
const Footer = lazy(() => import("./components/Footer"));
const HomeScreen = lazy(() => import("./screens/HomeScreen"));
const CartScreen = lazy(() => import("./screens/CartScreen"));
const LoginScreen = lazy(() => import("./screens/LoginScreen"));
const RegisterScreen = lazy(() => import("./screens/RegisterScreen"));
const ProfileScreen = lazy(() => import("./screens/ProfileScreen"));
const ShippingScreen = lazy(() => import("./screens/ShippingScreen"));
const PaymentScreen = lazy(() => import("./screens/PaymentScreen"));
const PlaceOrderScreen = lazy(() => import("./screens/PlaceOrderScreen"));
const OrderScreen = lazy(() => import("./screens/OrderScreen"));
const UserListScreen = lazy(() => import("./screens/UserListScreen"));
const UserEditScreen = lazy(() => import("./screens/UserEditScreen"));
const ProductListScreen = lazy(() => import("./screens/ProductListScreen"));
const ProductEditScreen = lazy(() => import("./screens/ProductEditScreen"));
const OrderListScreen = lazy(() => import("./screens/OrderListScreen"));
const ProductScreen = lazy(() => import("./screens/ProductScreen"));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Router>
        <Header />
        <main className="py-3">
          <Container>
            <Routes>
              <Route path="/" element={<HomeScreen />} />
              <Route path="/products/:id" element={<ProductScreen />} />
              <Route path="/cart">
                <Route path=":id" element={<CartScreen />} />
                <Route path="" element={<CartScreen />} />
              </Route>
              <Route path="/login" element={<LoginScreen />} />
              <Route path="/register" element={<RegisterScreen />} />
              <Route path="/profile" element={<ProfileScreen />} />
              <Route path="/shipping" element={<ShippingScreen />} />
              <Route path="/payment" element={<PaymentScreen />} />
              <Route path="/placeorder" element={<PlaceOrderScreen />} />
              <Route path="/order/:id" element={<OrderScreen />} />

              <Route path="/admin/userlist" element={<UserListScreen />} />
              <Route path="/admin/user/:id/edit" element={<UserEditScreen />} />
              <Route
                path="/admin/productlist"
                element={<ProductListScreen />}
              />
              <Route
                path="/admin/product/:id/edit"
                element={<ProductEditScreen />}
              />
              <Route path="/admin/orderlist" element={<OrderListScreen />} />
            </Routes>
          </Container>
        </main>
        <Footer />
      </Router>
    </Suspense>
  );
}

export default App;
