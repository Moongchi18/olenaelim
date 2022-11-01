import { useEffect, useState } from "react";
import style from "../../source/Moodal3.module.css";
import axios from "axios";

function NotifyWrite({ closeModal, modalChange, itemNum}) {

  const [notifyTitle, setNotifyTitle] = useState('');
  const [notifyContents, setMemberPass] = useState('');

  const handlerNotifyTitle = (e) => setNotifyTitle(e.target.value);
  const handlerNotifyContents = (e) => setMemberPass(e.target.value);

  
  

  const handlerClickSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/notify/write',
      {
        "itemNum": itemNum,
        "notifyTitle": notifyTitle,
        "notifyContents": notifyContents
      })
      .then(response => {
        alert("신고접수 되었습니다.");
        closeModal();
      })
      .catch(error => {
        console.log(error)
        alert("다시 신고해 주세요.");
      });
  };


  return (
    <>
      <div className={style.modal} ref={modalChange}>
        <div className={style.modalcontent}>
          <div className={style.modalheader}>
            <img src={require("../../source/img/big_warn.png")} alt="2" />
            <h2>이 상품에 대해 신고하시겠습니까?</h2>
          </div>
          <div className={style.modalbody}>
            <input type="text" placeholder="제목을 입력해주세요." onChange={handlerNotifyTitle}/>
            <textarea placeholder="신고내용을 작성해주세요." onChange={handlerNotifyContents}></textarea>
          </div>
          <div className={style.modalfooter}>
            <button type="button" className={style.redBtn} onClick={handlerClickSubmit}>
              신고하기
            </button>
            <button type="text" onClick={closeModal}>
              취소
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default NotifyWrite;
