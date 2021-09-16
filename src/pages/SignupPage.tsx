import styled from 'styled-components';

const SignupPage = () => {
  return (
    <SignupPageLayout>
      <SignupPageMainLayer>
        <SignupPageContentsBlock>
          <SignupPageTitle> Sc0up </SignupPageTitle>
          <SiginPageInputs>
            <SignupPageInput type="text" placeholder="이메일" /><br />
            <SignupPageInput type="password" placeholder="비밀번호" /><br />
          </SiginPageInputs>
          
        </SignupPageContentsBlock>
      </SignupPageMainLayer>
    </SignupPageLayout>
  )
}

const SignupPageLayout = styled.div`
  width: 100%;
  background-color: #C4C4C4;
`;

const SignupPageMainLayer = styled.section`
  max-width: 1440px;
  width: 100%;
  height: 100vh;
  margin: auto;
`;

const SignupPageContentsBlock = styled.div`
  display: flex;
  flex-direction: column;
  
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const SignupPageTitle = styled.div`
  font-size: 20px;
  font-weight: 700;
`;

const SiginPageInputs = styled.div`

`;

const SignupPageInput = styled.input`
  width: 340px;
  height: 64px;
  padding: 0px 24px;
  background: #EFF0F6;
  border-radius: 16px;
`;


export default SignupPage;