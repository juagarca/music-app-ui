import styled from "styled-components";

import Button from "./Button";

const SearchForm = () => {
  return (
    <Form action="/" accept-charset="UTF-8" method="get">
      <InputWrapper>
        <Input type="text" name="search[query]" id="search-query" />
        <Button label="Search" />
      </InputWrapper>
    </Form>
  );
};

const Form = styled.form``;

const InputWrapper = styled.div`
  position: relative;

  button {
    position: absolute;
    top: 0;
    right: 0;
  }
`;

const Input = styled.input`
  height: 2.5rem;
  width: 100%;
  padding: 0.5rem 1rem;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.darkGray};
  border: 1px solid ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-sizing: border-box;

  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.green};
    outline: none !important;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
  }
`;

export default SearchForm;
