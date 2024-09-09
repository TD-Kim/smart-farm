import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import styles from "./PostView.module.scss";
import {
  deletePost,
  getBoardDatas,
  getPostById,
  incrementPostCount,
  updatePost,
} from "../../../api/firebase/board";
import CustomModal from "../../modal/CustomModal";
import Radio from "../../complain/Radio";
import Comment from "../../comment/Comment";
import { useSelector } from "react-redux";
import EditPost from "../edit/EditPost";

const loginUser = JSON.parse(localStorage.getItem("user"));

function PostView() {
  const navigate = useNavigate();
  // const [post, setPost] = useState(null);
  const { state } = useLocation();
  const [count, setCount] = useState(state?.count);
  // console.log(state);
  const { isAuthenticated } = useSelector((state) => state.userSlice);
  // console.log(isAuthenticated);
  const [isEditing, setIsEditing] = useState(false);
  const [post, setPost] = useState(state); // 게시글 상태 추가

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const goComplain = () => setIsModalOpen(false);

  const updatePostCount = async () => {
    if (state?.collection && state?.docId) {
      try {
        await incrementPostCount(state.collection, state.docId);
        setCount((prevCount) => prevCount + 1);
      } catch (error) {
        console.error("Error incrementing post count: ", error);
      }
    }
  };

  // 게시글 삭제하는 함수
  const handleDeletePost = async () => {
    const success = await deletePost(state.collection, state.docId);
    if (success) {
      navigate(-1); // 삭제 후 이전 페이지로 이동
    }
  };

  const handlePostUpdate = async (updatedData) => {
    try {
      await updatePost(post.collection, post.docId, updatedData);
      // 수정 후 게시글 데이터 다시 가져오기
      const updatedPost = await getPostById(post.collection, post.docId);
      setPost(updatedPost); // 수정된 게시글 데이터로 상태 업데이트
      setIsEditing(false); // 수정 모드 해제
    } catch (error) {
      console.error("Error updating post: ", error);
    }
  };

  useEffect(() => {
    updatePostCount();

    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [post.collection, post.docId, isAuthenticated]);

  if (!state) {
    return <div>게시글을 불러오는 중입니다...</div>;
  }

  return (
    <>
      {isAuthenticated ? (
        <div className={styles.container}>
          {isEditing ? (
            <EditPost
              post={post}
              onUpdate={handlePostUpdate}
              onCancel={() => setIsEditing(false)}
            />
          ) : (
            <>
              <div className={styles.title}>
                <div>
                  <h2>{post.title}</h2>
                </div>
                <div>
                  <div className={styles.titleBar}>
                    <p>작성자: {post.nick}</p>
                    <p>작성일: {post.createdAt}</p>
                    <p>조회수: {count}</p>
                  </div>
                  {post.nick === loginUser?.nick ? (
                    <div className={styles.test}>
                      <button onClick={() => setIsEditing(true)}>수정</button>
                      <p>/</p>
                      <button onClick={handleDeletePost}>삭제</button>
                    </div>
                  ) : (
                    post.complain && (
                      <div className={styles.complain}>
                        <button onClick={openModal}>🚨 신고하기</button>
                        <CustomModal
                          title={"신고하기"}
                          btnName={"접수"}
                          handleClose={closeModal}
                          isOpen={isModalOpen}
                          btnHandler={goComplain}
                          className={styles.modal}
                        >
                          <Radio />
                        </CustomModal>
                      </div>
                    )
                  )}
                </div>
              </div>

              <div className={styles.content}>
                <div>{post.summary}</div>
                <div>
                  {state.imgUrl ? (
                    <img src={post.imgUrl} alt="첨부 이미지" />
                  ) : (
                    ""
                  )}
                </div>
              </div>

              <div>
                <Comment item={post} />
              </div>

              <div className={styles.back}>
                <button onClick={() => navigate(-1)}>목록으로</button>
              </div>
            </>
          )}
        </div>
      ) : (
        navigate("/login")
      )}
    </>
  );
}

export default PostView;
