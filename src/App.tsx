import styled from 'styled-components';


function App() {
  return (
    <Title>
      Hello World
    </Title>
  );
}

export const Title = styled.div`
  color: ${props => props.theme.colors.secondary};
`;


export default App;
