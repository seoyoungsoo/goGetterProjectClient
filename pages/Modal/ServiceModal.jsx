import React from 'react';
import styled from 'styled-components';

const serviceModal = ({ serviceModalOpen, setServiceModalOpen }) => {
  const text = [
    {
      mainText: '이용약관, 개인정보 수집 및 이용에 동의합니다.(필수)',
      subText: `수집하는 개인정보의 항목 및 수집방법
  우리도 독서 (이하 '우도독' 이라 함)는 정보통신망 이용촉진 및 정보보호 등에 관한 법률(이하 ‘정보통신망법’라 함), 개인정보보호법 등 모임이 준수하여야 할 국내 개인정보 보호 법령을 준수하며, 관련 법령에 의거한 개인정보처리방침을 정하여 이용자 권익 보호에 최선을 다하고 있습니다.
  
  본 개인정보처리방침은  'Go-Getter'가 운영하는 우도독 관련 제반 서비스(이하 '프로젝트 모임'이라 함)에 적용되며 다음과 같은 내용을 담고 있습니다.
  
  이 개인정보처리방침에서 사용하는 용어의 의미는 관련 법령 및 우도독의 이용약관에서 정한 바에 따르며, 그 밖의 사항은 일반적인 상관례에 따릅니다.
  
  
  가. 수집하는 개인정보의 항목
  우도독은 '커뮤니티 및 기타' 서비스 이용을 위해 회원 가입을 할 경우, 서비스 제공에 필요한 개인 정보를 회원가입을 통해 수집합니다.
  
  1. ‘이름, 이메일, 닉네임, 휴대전화 번호’가 필수항목으로 수집됩니다.
  
  나. 개인정보의 수집방법
  
  우도독은 다음과 같은 방법으로 개인정보를 수집합니다.
  
  1) 본 회원가입을 통해 귀하의 개인정보를 수집합니다.
  
  1. 개인정보의 수집 및 이용 목적
  
  우도독은 각종 홈페이지 내의 회원 관리, 서비스 제공과 개발 및 개선 등의 목적으로만 개인정보를 이용합니다.
  
    1) 회원 식별을 위해 이용합니다. 
    2) 법령 및 우도독 이용약관을 위반하는 회원에 대한 이용 제한 조치, 부정 이용 행위를 포함하여        
      서비스의 원활한 운영에 지장을 주는 행위에 대한 방지 및 제재, 약관 개정 등의 고지사항 
      전달, 분쟁조정을 위한 기록 보존, 회원 문의 처리 등 회원 보호 및  서비스 운영을 위해 
      이용합니다.
  
  2. 개인정보의 제공 및 위탁
  
  우도독은 회원의 사전 동의 없이 개인정보를 제3자 혹은 외부에 제공하지 않습니다. 
  
  단, 법령에 따라 필요할 경우 회원에게 해당 내용을 고지합니다.
  
  가. 개인정보의 제3자 제공
      1) 회원이 사전에 동의한 경우
      2) 법률에 특별한 규정이 있거나, 수사 목적으로 법률에 정해진 절차와 방법에 따라 수사기관의 
        요구가 있는 경우
  
  3. 개인정보 보유 및 이용기간
  
  우도독는 원칙적으로 회원의 개인정보를 회원 탈퇴 시 지체없이 파기하고 있습니다.
  
  단, 회원에게 개인정보 보관기간에 대해 별도의 동의를 얻은 경우, 또는 법령에서 일정 기간 정보보관 의무를 부과하는 경우에는 해당 기간 동안 개인정보를 안전하게 보관합니다.
  
  1) 내부 방침에 의한 보관
    - 부정이용기록은 부정 이용 방지를 위해 1년간 보관됩니다.
  
  2) 관련 법령에 의한 보관
    - 계약 또는 청약철회 등에 관한 기록 보유 : 5년 (전자상거래 등에서의 소비자보호에 관한 법률)
    - 대금결제 및 재화 등의 공급에 관한 기록 보유 : 5년 
      (전자상거래 등에서의 소비자보호에 관한 법률)
    - 소비자 불만 또는 분쟁처리에 관한 기록 보유 : 3년 
      (전자상거래 등에서의 소비자보호에 관한 법률)
    - 방문에 관한 기록 보유 : 3개월 (통신비밀보호법)
  
  4. 회원의 권리
  
  가. 회원은 언제든지 '마이페이지'의 회원 수정을 통해 자신의 개인정보를 수정할 수 있습니다.
  나. 회원이 개인정보의 오류에 대한 정정을 요청한 경우, 정정을 완료하기 전까지 해당 개인정보를      
      이용 또는 제공하지 않습니다.
      또한 잘못된 개인정보를 제3자에게 이미 제공한 경우에는 정정 처리결과를 제3자에게 지체없이 
      통지하여 정정이 이루어지도록 하겠습니다.
  
  5. 회원의 권리와 의무
  
  회원은 개인정보를 보호받을 권리와 함께 스스로를 보호하고 타인의 정보를 침해하지 않을 의무도 가지고 있습니다. 회원의 개인정보가 유출되지 않도록 조심하시고 게시물을 포함한 타인의 개인정보를 훼손하지 않도록 유의해 주십시오.
  
  회원이 입력한 부정확한 정보로 인해 발생하는 사고의 책임은 회원 자신에게 있습니다. 회원은 개인정보를 최신의 상태로 정확하게 입력하여 불의의 사고를 예방하여야 할 의무가 있습니다.
  
  회원이 위 책임을 다하지 못하고 타인의 정보 및 존엄성을 훼손할 시에는 『정보통신망 이용촉진 및 정보보호 등에 관한 법률』 등 관련 법률에 의해 처벌받을 수 있습니다.
  
  6. 기타
  
  우도독 내에 링크되어 있는 웹사이트 등 타 서비스들이 개인정보를 수집하는 행위에 대해서는 본 우도독 개인정보처리방침이 적용되지 않음을 알려드립니다.
  
  우도독에 회원가입 시 제출해 주신 개인정보 및 모든 내용은 우도독 관리자 혹은 관리자가 허가한 사람에 한해 관리 및 감독 / 열람 할 수 있습니다.
  
  7. 고지의 의무
  
  현 개인정보처리방침 내용 추가, 삭제 및 수정이 있을 시에는 시행일 최소 7일전부터 본 홈페이지 공지사항에 공지할 것입니다. 다만, 이용자 권리의 중대한 변경이 발생할 때에는 최소 30일 전에 공지하도록 하며 필요 시 이용자의 동의를 다시 받을 수도 있습니다.
  
  공고일자 : 2020. 05. 29.
  
  시행일자 : 2020. 06. 05.`,
    },
    {
      mainText: '마케팅 동의',
      subText: `제 1조 어쩌구저쩌구`,
    },
  ];

  return (
    <>
      <Modal signUpModal={serviceModalOpen} />
      <Container signUpModal={serviceModalOpen}>
        <ModalWrapper>
          <MainText>{text[0].mainText}</MainText>
          <SubText>{text[0].subText}</SubText>
          <ModalBtn>
            <OKBtn
              onClick={() => {
                setServiceModalOpen(false);
              }}
            >
              동의
            </OKBtn>
            <NoBtn
              onClick={() => {
                setServiceModalOpen(false);
              }}
            >
              비동의
            </NoBtn>
          </ModalBtn>
        </ModalWrapper>
      </Container>
    </>
  );
};

export default serviceModal;

const Modal = styled.div`
  display: ${(props) => (props.signUpModal ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9;
  opacity: 1;
  background-color: rgba(0, 0, 0, 0.6);
`;

const ModalBtn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const OKBtn = styled.button`
  border-radius: 3px;
  border: none;
  background-color: #0f4c81;
  width: 100px;
  height: 39px;
  color: white;
  margin-left: 7px;
  cursor: pointer;
  margin-top: 35px;

  &:hover {
    background-color: rgba(15, 76, 129, 0.8);
    border: none;
  }
`;

const NoBtn = styled.button`
  border-radius: 3px;
  border: none;
  background-color: #939597;
  width: 100px;
  height: 39px;
  color: white;
  margin-left: 7px;
  cursor: pointer;
  margin-top: 35px;

  &:hover {
    background-color: rgba(147, 149, 151, 0.8);
    border: none;
  }
`;

const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  height: 100%;
`;

const MainText = styled.div`
  font-size: 16px;
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #ced4da;
`;

const SubText = styled.textarea`
  padding: 10px;
  font-size: 12px;
  color: #4e4e4e;
  width: 460px;
  height: 200px;
  border: 1px solid #ced4da;
`;

const Container = styled.div`
  width: 500px;
  height: 350px;
  background-color: white;
  display: ${(props) => (props.signUpModal ? 'block' : 'none')};
  position: fixed;
  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  z-index: 99;
`;
