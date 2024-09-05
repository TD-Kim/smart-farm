import React from "react";
import styles from "./Radio.module.scss";

function Radio() {
  return (
    <form className={styles.complain}>
      <div>
        <h4>
          - 아이팜은 게시판 이용 수칙을 준수하여 게시판을 보다 클린하게 관리하기
          위해 노력하고 있습니다.
          <br />- 회원님의 신고내역은 관리자에게 넘어가 해당 신고물을 한번 더
          확인 후 조치 또는 신고 미승인을 할 수 있습니다.
          <br />- 허위신고의 경우 신고자에게 제재가 일어날 수 있음을
          유의해주세요.
        </h4>
      </div>

      <div className={styles.input}>
        <p>
          - 신고 사유를 선택해주세요. (신고 사유가 다수일 경우 대표 1개만
          선택해주세요.)
        </p>

        <div>
          <input type="radio" name="complain" />
          <label>광고성 게시글</label>
        </div>
        <div>
          <input type="radio" name="complain" />
          <label>욕설 및 비방, 선정성, 불법, 정치 등 부적절한 게시글</label>
        </div>
        <div>
          <input type="radio" name="complain" />
          <label>중복 게시물 도배</label>
        </div>
        <div>
          <input type="radio" name="complain" />
          <label>부적절한 프로필 사진</label>
        </div>
        <div>
          <input type="radio" name="complain" />
          <label>부적절한 닉네임</label>
        </div>
      </div>
    </form>
  );
}

export default Radio;
