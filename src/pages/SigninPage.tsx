import styled from 'styled-components';

const SigninPage = () => {
  return (
    <SigninPageLayout>
      <SigninPageMainLayer>
        <h1> Sc0up </h1>
      </SigninPageMainLayer>
      
    </SigninPageLayout>
  )
}

const SigninPageLayout = styled.div`
  width: 100%;
  background-color: #C4C4C4;
`;

const SigninPageMainLayer = styled.section`
  max-width: 1440px;
  width: 100%;
  margin: auto;
`

export default SigninPage;