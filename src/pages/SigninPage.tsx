import styled, { css } from "styled-components";
import Logo from 'assets/images/logo'

const SigninPage = () => {
  return (
    <SigninLayout>
      <SigninLayer>
        <SigninBlock>
          <LogoArea>
            <Logo.svg.scoup />
          </LogoArea>
          <FormArea>
            <Input type="text" placeholder="이메일 입력" />
            <Input type="password" placeholder="비밀번호 입력" />
            <Button onClick={() => (window.location as any) = "https://www.figma.com/proto/VsiKqsBVIsZKXGRtoFjVq4/%EC%8A%A4%EC%BF%B1-%EB%94%94%EC%9E%90%EC%9D%B8?node-id=514%3A10380&scaling=min-zoom&page-id=59%3A2"}> 로그인 </Button>    
          </FormArea>
          <FindArea>
            비밀번호 찾기 | 회원가입
          </FindArea>
          <SocialArea>
            <Hr />
            <span> 간편 로그인 </span>
            <div style={{ width: '100%' }}>
              <button>카카오</button>
              <button>카카오</button>
              <button>카카오</button>
            </div>
          </SocialArea>
          
        </SigninBlock>
      </SigninLayer>
      <WelcomeLayer>
        <img src="https://pbs.twimg.com/media/EjDeTwRVgAE8QUF.jpg" />
      </WelcomeLayer>
      
      
    </SigninLayout>
  )
}

const SigninLayout = styled.div`
  /* max-width: 1080px; */
  
  height: 100vh;
  width: 100%;
  
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SigninLayer = styled.div`
  flex-grow: 1;
`;
const WelcomeLayer = styled.div`
  flex-grow: 1;
`;

const SigninBlock = styled.div`
  width: 360px;
  height: 432px;
  
  margin: auto;
  
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SigninCentered = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;


const LogoArea = styled.div`
  width: 100%;
  margin: 12px 24px;
  
  ${SigninCentered}
`
const FormArea = styled.div`
  width: 100%;
  margin: 12px 24px;
  
  ${SigninCentered}
`;
const FindArea = styled.div`
width: 100%;
  margin: 12px 0;
  
  ${SigninCentered}
`;
const SocialArea = styled.div`
  width: 100%;
  margin: 12px 0;
  font-size: 12px;
  
  ${SigninCentered}
  
  span {
    padding: 0 8px;
    color: grey;
    background-color: white;
    z-index: 1;
  }
`

const Input = styled.input`
  width: 100%;
  height: 48px;
  padding: 13px 12px;
  line-height: 1.47;
  font-size: 15px;
  border: 1px solid #dee2e6;
  border-radius: 4px;
  background-color: #fff;

  & + & {
    margin-top: 12px;
  }
`;

const Button = styled.button`
  width: 100%;
  height: 48px;

  margin-top: 12px;
  padding: 13px 12px;
  font-size: 15px;
  color: #0E003F;
  
  border-radius: 4px;
  background-color: #fff;
  border-color: #15E1FF;
  font-weight: 700;
  background-color: #15E1FF;
  
`
const Hr = styled.hr`
  position: relative;
  bottom: -8px;
  display: block;
  margin: 0;
  width: 100%;
  height: 1px;
  background-color: grey;
  border: none;
`;

export default SigninPage;