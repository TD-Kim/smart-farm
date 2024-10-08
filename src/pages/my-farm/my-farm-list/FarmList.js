import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import PaginationButton from '../../../components/pagination-button/PaginationButton';
import { fetchCommonInfo } from '../../../store/dashboard/dashboardSlice';
import styles from './FarmList.module.scss';
import FarmListItem from './my-farm-list-item/FarmListItem';

const PAGE_SIZE = 5;

function FarmList() {
  const { state } = useLocation();
  const { commonInfo } = useSelector((state) => state.dashboardSlice);
  const [listData, setListData] = useState([]);
  const [owner, setOwner] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const dispatch = useDispatch();

  const totalPages = Math.ceil(listData.length / PAGE_SIZE);

  const currentData = listData.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );

  // 페이지 변경 핸들러
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(fetchCommonInfo('dashboard'));

    // 견적을 가져오는 함수입니다.
    // const fetchDashboardData = async () => {
    //   // 로그인 되어있는 사용자의 uid를 가져옵니다.
    //   const uid = JSON.parse(localStorage.getItem('user'))?.uid;

    //   if (!uid) return;

    //   try {
    //     const q = query(
    //       collection(db, 'dashboard'),
    //       where('docId', '==', uid) // docId가 현재 로그인된 사용자 docId와 일치하는 조건
    //     );
    //     const querySnapshot = await getDocs(q);

    //     if (querySnapshot.empty) {
    //       console.log('일치하는 데이터를 찾을 수 없습니다.');
    //     } else {
    //       const data = querySnapshot.docs.map((doc) => ({
    //         id: doc.id,
    //         ...doc.data(),
    //       }));
    //       console.log('Dashboard Data: ', data);
    //       setListData(data);
    //     }
    //   } catch (error) {
    //     console.error('데이터를 불러오는 데 실패했습니다.: ', error);
    //   }
    // };

    // fetchDashboardData();
  }, [dispatch]);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user'));

    const userEmail =
      userData.email.includes('admin') && state !== null
        ? state.email
        : !userData.email.includes('admin') && state === null
        ? userData.email
        : 'admin@gmail.com';

    if (state !== null && userData.email.includes('admin')) {
      // 관리자가 특정 회원을 조회하는 경우
      const filteredData = commonInfo.filter(
        (list) => list.userId === state.email && list.useYn === 'Y'
      );

      setListData(filteredData);
      setOwner(`${state.name} 님`);
    } else if (userEmail === 'admin@gmail.com' && state === null) {
      // 관리자가 전체 회원 정보를 조회하는 경우
      const filteredData = commonInfo.filter((list) => list.useYn === 'Y');
      setListData(filteredData);
      setOwner('전체');
    } else if (!userEmail.includes('admin') && state === null) {
      // 일반 회원이 자신의 정보를 조회하는 경우
      const filteredData = commonInfo.filter(
        (list) =>
          list.userId === userEmail &&
          list.useYn === 'Y' &&
          list.deleteYn === 'N'
      );
      setListData(filteredData);
      setOwner('내');
    }
  }, [commonInfo, state]);

  return (
    <>
      <h2 className={styles.title}>{owner} 농장 리스트</h2>
      {currentData?.length === 0 ? (
        <div>등록된 농장이 없습니다.</div>
      ) : (
        <>
          <ul className={styles.list}>
            {currentData?.map((item) =>
              item.useYn === 'Y' ? (
                <FarmListItem key={item.docId} farmData={item} />
              ) : null
            )}
          </ul>
          <PaginationButton
            className={styles.pagination}
            currentPage={currentPage}
            totalPage={totalPages}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </>
  );
}

export default FarmList;
