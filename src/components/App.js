import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import FetchDataService from "./FetchDataService";
import MyLayout from "./MyLayout";
import Signin from "./Signin";
import Cart from "./Cart";
import CartAdded from "./Cart-added";
import GoodsList from "./GoodsList";
import SpecificBook from "./Specific-book";
import Page404 from "./Page404";
import { Context } from "./Context";

const App = () => {
  const [order, setOrder] = useState([]);
  const [search, setSearch] = useState("");
  const [books, setBooks] = useState([]);
  const [userName, setUserName] = useState("");
  const [idBook, setIdBook] = useState("");
  const [booksChoosen, setBooksChoosen] = useState([]);

  async function fetchData() {
    const data = await FetchDataService.GetData();
    setBooks(data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Context.Provider
        value={{
          idBook,
          setIdBook,
          books,
          setBooks,
          userName,
          setUserName,
          order,
          setOrder,
          search,
          setSearch,
          booksChoosen,
          setBooksChoosen,
        }}
      >
        <Routes>
          <Route path="/my-mui-version-x-course-task" element={<MyLayout />}>
            <Route index element={<Signin />} />
            <Route path="booklist" element={<GoodsList />} />
            <Route path="specificbook" element={<SpecificBook />} />
            <Route path="cart" element={<Cart />} />
            <Route path="cartadded" element={<CartAdded />} />
            <Route path="*" element={<Page404 />} />
          </Route>
        </Routes>
      </Context.Provider>
    </>
  );
};

export default App;
