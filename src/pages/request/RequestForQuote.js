import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from "../../components/layout/container/Container";
import RequestForm from "./request-form/RequestForm";
import styles from "./RequestForQuote.module.scss";

function RequestForQuote() {
  // user 상태를 선언합니다.
  // const [user, setUser] = useState(null);
  // const [date, setDate] = useState('');

  // 결제정보 저장 state
  const [requestData, setRequestData] = useState();

  // 취소용
  const navigate = useNavigate();

  // 유저 정보 불러오기
  const user = JSON.parse(localStorage.getItem("user"));

  // useEffect(() => {
  //   const today = new Date();
  //   setDate(today.toISOString().split('T')[0]);

  //   // localStorage에 있는 사용자의 정보를 추출합니다.
  //   const idExtraction = async () => {
  //     try {
  //       const userStr = JSON.parse(localStorage.getItem('user'));
  //       if (userStr) {
  //         setUser(userStr);
  //         await infoExtraction(userStr.uid);
  //       } else {
  //         console.log('로그인이 되어있지 않습니다.');
  //       }
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  // Firebase에서 uid와 일치하는 문서 객체 찾기
  //   const infoExtraction = async (uid) => {
  //     try {
  //       // Firebase에서 사용자 데이터를 가져옵니다.
  //       const snapshots = await getDatas('users');

  //       // uid와 일치하는 문서 객체를 찾습니다.
  //       const matchingDoc = snapshots.find((doc) => doc.docId === uid);

  //       if (matchingDoc) {
  //         setUser((prevUser) => ({
  //           ...prevUser,
  //           email: matchingDoc.email || '',
  //           farmAddress: matchingDoc.farmAddress || '',
  //         }));
  //       } else {
  //         console.error('No document found with UID:', uid);
  //       }
  //     } catch (error) {
  //       console.error('Error extracting information:', error);
  //     }
  //   };
  //   idExtraction();
  // }, []);

  // const addEstimate = (estimate) => {
  //   console.log('새 견적이 등록되었습니다', estimate);
  // };

  // 결제 버튼 (임시로 콘솔에 결제정보가 나오는지 해놨어요.)
  const handleSubmitRequest = () => {
    console.log(requestData);
  };

  return (
    <Container className={styles.container}>
      <h2>견적 의뢰</h2>
      {/* 견적을 요청하고 사용자의 정보를 입력하면 결제 페이지로 넘어갑니다. &nbsp;
      실제로 결제를 구현하지 않고 사용자의 결제 정보만 저장합니다. &nbsp; 사용자
      결제 저장할 때 정보 &nbsp; 1. 회원 컬렉션에서 payments 컬렉션을 만듭니다.
      &nbsp; 2. payments에는 견적 요청에서 입력한 값들을 필드로 만들어 저장합니다.
      &nbsp; (견적요청아이디, 결제날짜, 요청날짜, 농장주소 등) &nbsp; 3.
      마이페이지에는 payments의 정보가 출력됩니다. &nbsp; 4. 로그인된 사용자는
      사용자가 회원가입 시 사용한 내용을 출력해 다시 입력하지 않습니다. &nbsp;
      5. 비회원은 견적요청 아이디만 알려주고 마이페이지에서 조회할 때 사용(요청
      아이디를 꼭 알고 있어야 됨) */}
      <RequestForm user={user} onSubmit={setRequestData} />
      {/* Form을 추가할 수 있음 (Redux로 관리하기??) */}
      <div className={styles.btns}>
        <button className={styles.submit} onClick={handleSubmitRequest}>
          결제
        </button>
        <button className={styles.cancel} onClick={() => navigate("-1")}>
          취소
        </button>
      </div>
      {/* <RequestForQuoteForm addEstimate={addEstimate} user={user} /> */}
    </Container>
  );
}

export default RequestForQuote;
