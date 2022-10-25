
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "./utils/firebase.config";
import Products from "./pages/Products";
import { useDispatch } from "react-redux";
import { collection, getDocs } from "firebase/firestore";
import { setProductData } from "./feature/product.slice"

function App() {
  const [user, setUser] = useState(null);
  const dispatch = useDispatch();


  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  useEffect(() => {
    getDocs(collection(db, "products"))
      .then((res) => dispatch(setProductData(res.docs.map((doc) => ({ ...doc.data(), id: doc.id })))))
  }, [dispatch])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/profile" element={<Profile user={user} />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
