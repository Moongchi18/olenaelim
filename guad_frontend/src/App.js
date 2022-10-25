import "./App.css";
import FileUploadForm from "./FileUploadForm";
import { Route } from "react-router-dom";
import GoogleLoginForm from "./GoogleLoginForm";
import Header from "./component/Header";
import Login from "./component/Login";
import AuctionTest from "./auction/AuctionTest";
import Auction from "./auction/Auction";
import Footer from "./component/Footer";
import Main from "./component/Main";

import Mypage from "./component/Mypage";
import MypageInfo from "./component/MypageInfo";
import Manager from "./component/Manager";

import Join from "./component/Join";
import JoinG from "./component/JoinG";
import SellList from "./component/SellList";
import axios from "axios";
import SellItem from "./component/SellItem";
import Selling from "./component/Selling";

function App() {
  axios.interceptors.request.use(function (config) {
    const token = sessionStorage.getItem("token");
    config.headers.Authorization = token ? `Bearer ${token}` : "";
    return config;
  });
  return (
    <>
      <Header />
      <Route path="/g_login" component={GoogleLoginForm} exact={true} />
      <Route path="/login" component={Login} exact={true} />
      <Route path="/upload" component={FileUploadForm} exact={true} />
      <Route path="/header" component={Header} exact={true} />
      <Route
        path="/auction/test/:itemNum"
        component={AuctionTest}
        exact={true}
      />
      <Route path="/auction" component={Auction} exact={true} />

      <Route path="/footer" component={Footer} exact={true} />
      <Route path="/" component={Main} exact={true} />

      <Route path="/mypage" component={Mypage} exact={true} />
      <Route path="/mypage_info" component={MypageInfo} exact={true} />
      <Route path="/manager" component={Manager} exact={true} />

      <Route path="/join" component={Join} exact={true} />
      <Route path="/join_g" component={JoinG} exact={true} />
      <Route path="/sell_list" component={SellList} exact={true} />
      <Route path="/sell_item" component={SellItem} exact={true} />
      <Route path="/selling" component={Selling} exact={true} />

      <Footer />
    </>
  );
}

export default App;
