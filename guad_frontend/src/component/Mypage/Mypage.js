import style from "../../source/Mypage.module.css";
import logo from "../../source/img/mypage.png";
import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Mileage from "../Moodal/Mileage";
import UserBuyList from "./UserBuyList";
import UserSellList from "./UserSellList";

function Mypage() {
  // window.onload = function () {
  //   const button = document.getElementsByClassName(`${style.button}`);
  //   console.log(button);
  //   console.log(button[0]);

  //   for (let i = 0; i < button.length; i++) {
  //     if ((button[i].textContent = "거래완료")) {
  //       button[i].style.backgroundColor = "#217A4F";
  //     } else if ((button[i].textContent = "거래중")) {
  //       button[i].style.backgroundColor = "#D9D9D9";
  //     } else if ((button[i].textContent = "경매완료")) {
  //       button[i].style.backgroundColor = "#BA101E";
  //     } else {
  //       button[i].style.backgroundColor = "#253C76";
  //     }
  //   }
  // };

  const [data, setData] = useState({
    nickname : '',
    mileage: 0
  });

  const [item, setItem] = useState("");
  const [isChange,setIsChange] = useState(false);

  useEffect(() => {
    axios
      .get(`http://${process.env.REACT_APP_REST_API_SERVER_IP_PORT}/member`)
      .then(response => {        
        setData({ 
          nickname : response.data.nickname ,        
          mileage: response.data.mileage        
        })       
      })   
  }, [isChange])

  const modalChange = useRef();
  const closeModal = () => {
    modalChange.current.style = "display:none;";
  };

  const openModal = () => {
    modalChange.current.style = "display:block;";
  };

  const handlerChange = () => {
    setIsChange(!isChange)
  }

  return (
    <>
      <Mileage closeModal={closeModal} modalChange={modalChange} handlerChange={handlerChange} isChange={isChange}/>
      <div className={style.All_Mbox}>
        <h1 className={style.page_name}>마이페이지</h1>
        <div>
          <div className={style.Mbox}>
            <div className={style.logo_box}>
              <img src={logo} alt="1"></img>
            </div>
            <div className={style.mileage_box}>
              <h3>
                <strong>{data.nickname}</strong>님 환영합니다!
              </h3>
              <h3>
                현재 마일리지 <strong>{data.mileage.toLocaleString()}</strong>원
              </h3>
            </div>
            <div className={style.Mbox_button}>
              <Link to="/mypage/check">
                <button className={style.member} type="button">
                  회원정보
                </button>
              </Link>
              <button
                className={style.mileage}
                onClick={openModal}
                type="button"
              >
                마일리지
              </button>
            </div>
          </div>
        </div>
        {/* <RegistList /> */}
        <UserBuyList />
        <UserSellList />
      </div>
    </>
  );
}

export default Mypage;
