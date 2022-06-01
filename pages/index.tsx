import styled from 'styled-components';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <PageWrapper>
      <Header>
        <HeaderWrapper>
          <Input type="text" placeholder="Task..." />
          <Input type="number" placeholder="Deadline ..." />
        </HeaderWrapper>
        <Button>Add</Button>
      </Header>
      <Todolist></Todolist>
    </PageWrapper>
  );
};

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 200px;
  height: 40px;
  border: none;
  border-bottom-left-radius: 8px;
  border-top-left-radius: 8px;
  padding-left: 12px;
  font-size: 1rem;
  border: 1px solid gray;
  // remove border on input focus
  outline: none;
`;

const Button = styled.button`
  width: 70px;
  height: 78px;
  border-bottom-right-radius: 8px;
  border-top-right-radius: 8px;
  cursor: pointer;
  border: none;
`;

const Header = styled.header`
  flex: 30%;
  background-color: tomato;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Todolist = styled.main`
  flex: 70%;
  width: 100%;
`;

export default Home;
