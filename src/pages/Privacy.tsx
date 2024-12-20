import React from 'react';
import PageFrame from 'components/PageFrame';
import styles from 'pages/Privacy.module.css';

export default function Privacy() {
  const id = 'privacy';
  const to = '/privacy';
  const name = '';

  return (
    <PageFrame id={id} to={to} menu={name} isTab={false}>
      <>
        <p className={styles.para}>개인정보취급방침</p>
        <div className={styles.t_box}>
          <p className={styles.t_box_p}>
            이트리소프트(이하 &lsquo;회사&rsquo;라 합니다.)는 회원의 사생활 및
            개인정보를 적극적으로 보호하여 정보화 사회에서의 통신의 자유를
            보장하고자 아래와 같이 개인정보취급방침을 명시하여 실천하고
            있습니다. 회사의 개인정보취급방침은 관련 법률 및 정부 지침의 변경과
            회사의 내부 정책 변화에 따라 변경될 수 있으며, 수시로 방문하셔서 그
            내용을 확인하여 주시기 바랍니다.
          </p>
        </div>
        <p className={styles.para}>1. 개인정보의 수집 방법 및 범위</p>
        <div className={styles.t_box}>
          <p className={styles.t_box_p}>
            회사는 서비스의 이용을 위하여 회원 가입 시에 회원 정보를 기입하도록
            합니다. 회원가입 시에 받는 기본 필수 정보에는 성명, 이메일, 연락처가
            있습니다. 이외에 보다 나은 서비스를 위해 선택 정보를 수집할 수
            있습니다. 기타 서비스 이용과정 및 처리과정에서 생성되는 서비스
            이용기록, 접속 로그, 쿠키, 접속 IP정보, 결재기록 등이 수집될 수
            있으며, 추가적인 정보가 필요한 특정 서비스의 이용 시 추가 정보의
            제공을 요청할 수 있습니다. 이 경우에도 기입하신 정보는 해당 서비스의
            이용 및 사전에 밝힌 목적 이외에는 이용하지 않습니다.
          </p>
        </div>
        <p className={styles.para}>2. 개인정보의 수집 목적 및 이용</p>
        <div className={styles.t_box}>
          <p className={styles.t_box_p}>
            회사가 개인정보를 수집하는 목적은 양질의 서비스 제공 및 회원
            개개인의 기호와 필요에 따른 맞춤화된 서비스를 제공해드리기 위한
            것입니다. 회사는 서비스 제공에 따라 회원님의 동의 하에 광고성 정보를
            전달할 수 있으며, 회원님 개인에 대한 정보를 바탕으로 좀 더 유용한
            정보로서의 가치가 있는 광고를 선별적으로 전달됩니다. 성별, 연령별
            기타 특정 조건의 집단에 대한 광고 게재 및 발송 시에도 회원의
            개인정보는 광고를 의뢰한 개인이나 단체에 제공되지 않습니다.
          </p>
        </div>
        <p className={styles.para}>3. 개인정보의 공유 및 제공</p>
        <div className={styles.t_box}>
          <p className={styles.t_box_p}>
            회사는 원칙적으로 회원의 개인정보를 원칙적으로 외부에 제공하지
            않습니다. 다만 회원님이 공개 및 제공을 동의한 경우 또는 회사의
            이용자 약관을 위배하거나 타인에게 피해를 주는 행위 등으로 법적인
            조치가 요구되고 적법한 절차에 의해 관련 정부 기관의 요구가 있을
            경우는 예외로 합니다.
          </p>
        </div>
        <p className={styles.para}>4. 개인정보의 취급위탁</p>
        <div className={styles.t_box}>
          <p className={styles.t_box_p}>
            회사는 보다 나은 서비스의 제공을 위해 아래와 같은 업체에 회원의
            개인정보를 취급 위탁합니다. 또한 위탁계약 시 개인정보보호의 안전을
            기하기 위하여 개인정보보호 관련 법규의 준수, 개인정보에 관한 제3자
            공급 금지 및 사고시의 책임부담 등을 명확히 규정하고 있습니다.
          </p>
        </div>
        <p className={styles.para}>5. 자신의 개인정보 열람, 수정 및 삭제</p>
        <div className={styles.t_box}>
          <p className={styles.t_box_p}>
            회사의 회원은 언제든지 자신의 개인정보를 열람하거나 수정할 수
            있으며, 회원 등록 해지를 통해서 개인정보의 삭제를 요청할 수
            있습니다. 개인정보의 열람, 수정 및 삭제는 홈페이지 내 개인정보관리
            페이지에서 하실 수 있습니다.
          </p>
        </div>
        <p className={styles.para}>6. 개인정보의 보유 및 이용 기간</p>
        <div className={styles.t_box}>
          <p className={styles.t_box_p}>
            회사의 서비스를 제공 받는 동안 회원의 개인정보는 회사가 계속
            보유하고 서비스의 제공을 위해서 이용합니다. 원칙적으로 개인정보 수집
            및 이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다. 단,
            다음 정보에 대해서는 아래의 이유로 명시한 기간 동안 보존 합니다.
          </p>
          <div className={styles.t_box2}>
            <p className={styles.group_2}>
              (1) 회사 내부방침에 의한 정보보유 사유
            </p>
            <p className={styles.t_box_p}>
              회원이 탈퇴한 경우에도 회사는 원활한 서비스의 제공 및 부정한
              서비스의 이용을 방지하기 위하여 아래와 같이 회원정보를 보관합니다.
            </p>
            <div className={styles.t_box2}>
              <p className={styles.t_box_p}>1) 이름, 이메일, 연락처</p>
              <p className={styles.t_box_p}>
                - 보존이유 : 서비스 이용의 혼선방지, 분쟁해결 및 수사기관의
                요청에 따른 협조
              </p>
              <p className={styles.t_box_p}>- 보존기간 : 1년</p>
            </div>
            <div className={styles.t_box2}>
              <p className={styles.t_box_p}>
                2) 부정/불량이용기록 (부정/불량이용자의 개인정보 포함)
              </p>
              <p className={styles.t_box_p}>
                - 보존이유 : 서비스의 부정 및 불량 이용 방지 및
                부정/불량이용자의 재가입 방지
              </p>
              <p className={styles.t_box_p}>- 보존기간 : 1년</p>
            </div>
          </div>
          <div className={styles.t_box2}>
            <p className={styles.group_2}>(2) 관련 법령에 의한 정보보유 사유</p>
            <p className={styles.t_box_p}>
              상법, 전자상거래 등에서의 소비자보호에 관한 법률 등 관계 법령의
              규정에 의하여 보존할 필요가 있는 경우 회사는 관계 법령에서 정한
              일정한 기간 동안 회원정보를 보관합니다. 이 경우 회사는 보관하는
              정보를 그 보관의 목적으로만 이용하며 보존기간은 아래와 같습니다.
            </p>
            <div className={styles.t_box2}>
              <p className={styles.t_box_p}>
                1) 계약 또는 청약철회 등에 관한 기록
              </p>
              <p className={styles.t_box_p}>
                - 보존이유 : 전자상거래 등에서의 소비자보호에 관한 법률
              </p>
              <p className={styles.t_box_p}>- 보존기간 : 5년</p>
            </div>
            <div className={styles.t_box2}>
              <p className={styles.t_box_p}>
                2) 대금결제 및 재화 등의 공급에 관한 기록
              </p>
              <p className={styles.t_box_p}>
                - 보존이유 : 전자상거래 등에서의 소비자보호에 관한 법률
              </p>
              <p className={styles.t_box_p}>- 보존기간 : 5년</p>
            </div>
            <div className={styles.t_box2}>
              <p className={styles.t_box_p}>
                3) 소비자의 불만 및 분쟁처리에 관한 기록
              </p>
              <p className={styles.t_box_p}>
                - 보존이유 : 전자상거래 등에서의 소비자보호에 관한 법률
              </p>
              <p className={styles.t_box_p}>- 보존기간 : 3년</p>
            </div>
            <div className={styles.t_box2}>
              <p className={styles.t_box_p}>4) 로그기록</p>
              <p className={styles.t_box_p}>- 보존이유 : 통신비밀보호법</p>
              <p className={styles.t_box_p}>- 보존기간 : 3개월</p>
            </div>
          </div>
        </div>
        <p className={styles.para}>7. 개인정보의 파기절차</p>
        <div className={styles.t_box}>
          <p className={styles.t_box_p}>
            회원님이 회원가입 등을 위해 입력하신 정보는 목적이 달성된 후 내부
            방침 및 기타 관련 법령에 의한 정보보호 사유에 따라(보유 및 이용기간
            참조) 일정 기간 저장된 후 파기됩니다. 종이에 출력된 개인정보는
            분쇄기로 분쇄하거나 소각을 통하여 파기하고, 전자적 파일형태로 저장된
            개인정보는 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제합니다.
          </p>
        </div>
        <p className={styles.para}>
          8. 개인정보 자동 수집 장치의 설치 운영 및 그 거부에 관한 사항
        </p>
        <div className={styles.t_box}>
          <p className={styles.t_box_p}>
            회사는 회원에게 개별적으로 특화된 맞춤서비스를 제공하기 위해서
            회원의 정보를 수시로 저장하고 찾아내는 &lsquo;쿠키(cookie)&rsquo;를
            사용합니다. 쿠키는 당사의 웹사이트를 운영하는데 이용되는 서버가
            사용자의 브라우저에 보내는 소량의 텍스트 파일로서 사용자의 컴퓨터
            하드디스크에 저장되며, 사용자의 컴퓨터는 식별하지만 사용자를
            개인적으로 식별하지는 않습니다.
          </p>
          <div className={styles.t_box2}>
            <p className={styles.group_2}>(1) 쿠키 등 사용목적</p>
            <p className={styles.t_box_p}>
              회사는 다음과 같은 목적을 위해 쿠키를 사용합니다.
            </p>
            <div className={styles.t_box2}>
              <p className={styles.t_box_p}>
                1)회원과 비회원의 접속빈도나 방문시간 등을 분석
              </p>
              <p className={styles.t_box_p}>
                2)회사의 취향과 관심분야를 파악 및 자취 추적과 각종 이벤트 참여
                정도 및 방문회수 파악 등을 통한 타겟 마케팅 및
                개인맞춤서비스제공
              </p>
            </div>
          </div>
          <div className={styles.t_box2}>
            <p className={styles.group_2}>(2) 쿠키설정거부방법</p>
            <p className={styles.t_box_p}>
              회원은 쿠키 설치에 대한 선택권을 가지고 있습니다. 따라서, 회원은
              웹브라우저에서 옵션을 설정함으로써 모든 쿠키를 허용하거나, 쿠키가
              저장될 때마다 확인을 거치거나, 아니면 모든 쿠키의 저장을 거부할
              수도 있습니다.
            </p>
            <p className={styles.t_box_p}>
              설정방법의 예 : (인터넷 익스플로러의 경우) 웹브라우저 상단의 도구
              &gt; 인터넷 옵션 &gt; 개인정보
            </p>
          </div>
          <p className={styles.t_box_p}>
            그러나 회사 홈페이지에 접속하여 서비스를 이용하기 위해서는 쿠키를
            허용하여야 하며, 이를 거부할 경우 로그인이 필요한 회사의 서비스의
            이용이 어려울 수 있습니다.
          </p>
        </div>
        <p className={styles.para}>9. 개인정보관리책임자</p>
        <div className={styles.t_box}>
          <p className={styles.t_box_p}>
            회사는 고객의 개인정보를 보호하고 개인정보와 관련한 불만을 처리하기
            위하여 아래와 같이 개인정보관리책임자를 지정하고 있습니다.
          </p>
          <div className={styles.t_box2}>
            <p className={styles.group_2}>개인정보관리책임자 [최병호]</p>
            <p className={styles.t_box_p}>전화번호 : 02-3499-4497</p>
            <p className={styles.t_box_p}>이메일 : etree_admin@etreesoft.com</p>
          </div>
          <p className={styles.t_box_p}>
            회원은 회사의 서비스를 이용하시며 발생하는 모든 개인정보보호 관련
            민원을 개인정보관리책임자 에게 신고할 수 있습니다. 회사는 회원들의
            신고사항에 대해 신속하게 충분한 답변을 드릴 것입니다.
          </p>
        </div>
        <p className={styles.para}>
          10. 회원 및 법정 대리인의 권리와 그 행사방법
        </p>
        <div className={styles.t_box}>
          <p className={styles.t_box_p}>
            회원 및 법정 대리인은 언제든지 등록되어 있는 자신 혹은 당해 만14세
            미만 아동의 개인정보를 조회하거나 수정할 수 있으며 가입 해지를
            요청할 수도 있습니다. 회원 혹은 만 14세 미만 아동의 개인정보
            조회/수정을 위해서는 &lsquo;개인정보변경&rsquo;(또는
            &lsquo;회원정보수정&rsquo; 등)을, 가입해지(동의철회)를 위해서는
            &lsquo;회원탈퇴&rsquo;를 클릭하여 본인 확인 절차를 거치신 후 직접
            열람, 정정 또는 탈퇴가 가능합니다.혹은 개인정보관리책임자에게 서면,
            전화 또는 이메일로 연락하시면 지체없이 조치하겠습니다. 회사는 회원
            혹은 법정 대리인의 요청에 의해 해지 또는 삭제된 개인정보는
            &lsquo;회사가 수집하는 개인정보의 보유 및 이용기간&rsquo;에 명시된
            바에 따라 처리하고 그 외의 용도로 열람 또는 이용할 수 없도록
            처리하고 있습니다.
          </p>
        </div>
        <p className={styles.para}>11. 개인정보보호 관련 대책</p>
        <div className={styles.t_box}>
          <p className={styles.t_box_p}>
            회사는 회원 본인의 비밀번호 요청 등에 의해 개인정보를 다룰 때 가능한
            최선의 방법으로 본인임을 확인하고 안전하게 정보가 처리될 수 있도록
            최선을 다합니다. 회사는 개인정보에 대한 접근권한을
            개인정보관리책임자 등 개인정보관리업무를 수행하는 자, 기타 업무상
            개인정보의 취급이 불가피한 자로 제한하며, 개인정보를 취급하는 직원에
            대한 수시 교육을 통하여 개인정보취급방침의 준수를 항상 강조하고
            있습니다. 위와 같은 회사의 노력 이외에 회원은 아이디와 비밀번호,
            주민등록번호 등 개인정보가 인터넷 상에 노출되거나 타인에게 유출되지
            않도록 주의하여야 합니다. 회원 본인의 부주의나 관리소홀로 아이디와
            비밀번호 등 개인정보가 유출되었다면 이에 대해서 회사는 책임을 지지
            않습니다. 따라서, 회원의 아이디와 비밀번호는 반드시 본인만
            사용하시고, 비밀번호를 자주 바꿔주시는 것이 좋으며, 비밀번호는
            영문자, 숫자를 혼합하여 타인이 유추하기 어려운 번호를 사용하는 것이
            좋습니다. 또한 서비스의 이용을 마친 후에는 항상 로그아웃을 하여
            주시고 웹 브라우저를 종료하는 것이 좋습니다. 특히, 다른 사람과
            컴퓨터를 공유하거나, 공공장소에서 이용하는 경우에 개인정보의 보안을
            위해서는 이와 같은 절차가 더욱 필요합니다. 채팅, 게시판, 이메일 등을
            통해 자신이 자발적으로 제공하는 개인정보는 다른 사람들에 의하여
            본인의 의도와는 다르게 이용될 수 있다는 사실을 염두에 두어야 합니다.
            회원님의 로그인 패스워드에 대한 보안을 유지할 책임은 회원님 자신에게
            있으므로, 다른 사람에게도 공개되어 있는 공간에는 자신의 개인정보를
            함부로 남겨서는 안됩니다. 또한 PC방이나, 기타 공공장소 등 주변에
            다른 사람들이 많은 곳에서는 서비스를 이용하고 있는 동안 다른
            사람들이 자신의 컴퓨터 화면을 볼 수도 있다는 사실을 염두에 두고
            개인정보가 노출되지 않도록 주의하여야 합니다.
          </p>
        </div>
        <p className={styles.para}>12. 개인정보관련 신고 및 분쟁조정</p>
        <div className={styles.t_box}>
          <p className={styles.t_box_p}>
            개인정보침해에 대한 신고, 상담이 필요하신 경우에는
            한국정보보호진흥원(KISA) 개인 정보 침해신고센터로 문의하시기
            바랍니다. 또한, 귀하가 개인정보침해를 통한 금전적, 정신적 피해를
            입으신 경우에는 개인정보분쟁조정위원회에 피해구제를 신청하실 수
            있습니다.
          </p>
          <div className={styles.t_box2}>
            <p className={styles.t_box_p}>
              개인정보 침해신고센터 (
              <a href="http://www.cyberprivacy.or.kr" className={styles.link}>
                http://www.cyberprivacy.or.kr
              </a>
              , 전화 1336)
            </p>
            <p className={styles.t_box_p}>
              개인정보 분쟁조정위원회 (
              <a href="http://www.kopico.or.kr" className={styles.link}>
                http://www.kopico.or.kr
              </a>
              , 전화 1336)
            </p>
            <p className={styles.t_box_p}>
              정보보호마크 인증위원회 (
              <a href="http://www.privacymark.or.kr" className={styles.link}>
                http://www.privacymark.or.kr
              </a>
              , 전화 02-580-0533)
            </p>
            <p className={styles.t_box_p}>
              대검찰청 인터넷범죄수사센터 (
              <a href="http://www.spo.go.kr" className={styles.link}>
                http://www.spo.go.kr
              </a>
              , 전화 02-3480-3600)
            </p>
            <p className={styles.t_box_p}>
              경찰청 사이버테러대응센터 (
              <a href="http://www.ctrc.go.kr" className={styles.link}>
                http://www.ctrc.go.kr
              </a>
              , 전화 02-392-0330)
            </p>
            <p className={styles.t_box_p}>
              경찰청 (
              <a href="http://www.police.go.kr" className={styles.link}>
                http://www.police.go.kr
              </a>
              )
            </p>
          </div>
        </div>
        <p className={styles.t_last}>시행일자 : 2012 년 01월 09일</p>
      </>
    </PageFrame>
  );
}
