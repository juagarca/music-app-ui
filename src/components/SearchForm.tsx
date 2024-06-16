import { useState } from "react";
import styled from "styled-components";

import Button from "./Button";
import { Magnifier } from "../icons";

import ROUTES from "../routes";
import { IArtist } from "../types";
import { fetchArtists } from "../api";

interface SearchFormProps {
  setArtists: React.Dispatch<React.SetStateAction<IArtist[]>>;
}

const SearchForm = ({ setArtists }: SearchFormProps) => {
  const [value, setValue] = useState<string>("");

  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setValue(value);
    const artists = await fetchArtists(value);
    artists && setArtists(artists);
  };

  return (
    <Form action={ROUTES.artists} acceptCharset="UTF-8" method="get">
      <InputWrapper>
        <Input
          type="text"
          name="query"
          id="search-query"
          placeholder="Type an artist name"
          value={value}
          onChange={handleChange}
        />
        <Button variant="secondary">
          <Magnifier />
        </Button>
      </InputWrapper>
    </Form>
  );
};

const Form = styled.form``;

const InputWrapper = styled.div`
  position: relative;

  button {
    position: absolute;
    top: 13px;
    right: 13px;
  }
`;

const Input = styled.input`
  height: 3.5rem;
  width: 100%;
  font-size: ${({ theme }) => theme.fontSize.body};
  padding: ${({ theme }) => theme.margin.default};
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.gray};
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  border-radius: ${({ theme }) => theme.borderRadius.big};
  box-shadow: rgba(0, 0, 0, 0.3) 0px 10px 50px;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.white};
  }
`;

export default SearchForm;
