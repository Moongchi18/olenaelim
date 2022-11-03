import axios from "axios";
import { useEffect, useState } from "react";
import style from "../../source/Moodal7.module.css";

function MemeberInfo({ modalChange, closeModal, infoEmail }) {
  const [datas, setDatas] = useState({});
  console.log(datas);

  const DeleteMember = () => {
    axios
      .post("http://localhost:8080/admin/member/delete", {
        
      })
      .then((response) => {
        alert("회원강퇴 성공!");
      });
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8080/admin/member/${infoEmail}`)
      .then((response) => {
        setDatas(response.data);
      })
      .catch((error) => {
        if (error.response.status === 403) {
          alert("접근 권한이 없습니다. 로그인 후 다시 접속해 주세요.");
        }
      });
  }, [infoEmail]);

  return (
    <>
      <div id="my-modal" className={style.modal} ref={modalChange}>
        <div className={style.modalcontent}>
          <div className={style.modalheader}>
            <img src={require("../../source/img/mypage_d2.png")} alt="아이콘" />
          </div>
          <div className={style.modalbody}>
            <ul>
              <li>
                <p className={style.front}>닉네임</p>
                <p className={style.back}>{datas.nickname}</p>
              </li>
              <li>
                <p className={style.front}>아이디</p>
                <p className={style.back}>{datas.email}</p>
              </li>
              <li>
                <p className={style.front}>주소</p>
                <p className={style.back}>{datas.address}</p>
              </li>
              <li>
                <p className={style.front}>전화번호</p>
                <p className={style.back}>{datas.phone}</p>
              </li>
            </ul>
          </div>
          <div className={style.modalfooter}>
            <button className={style.out_btn} onClick={DeleteMember}>
              회원강퇴
            </button>
            <button className={style.yet_btn} onClick={closeModal}>
              보류
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default MemeberInfo;
