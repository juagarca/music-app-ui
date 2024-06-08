import { useState } from "react";
import styled from "styled-components";

import Button from "./Button";
import { Magnifier } from "../icons";

import ROUTES from "../routes";
import { Artist } from "../types";
import artistsData from "../data/artists.json";

interface SearchFormProps {
  setArtists: React.Dispatch<React.SetStateAction<Artist[]>>;
}

const SearchForm = ({ setArtists }: SearchFormProps) => {
  const [value, setValue] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setValue(value);

    if (value === "") {
      setArtists(artistsData as Artist[]);
    }

    const filteredArtists = artistsData.filter((artist) =>
      artist.artistName?.toLowerCase().includes(value.toLowerCase())
    );
    setArtists(filteredArtists);
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
        <Button>
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
    top: 10px;
    right: 12px;
  }
`;

const Input = styled.input`
  height: 3.5rem;
  width: 100%;
  font-size: ${({ theme }) => theme.textSize};
  padding: ${({ theme }) => theme.defaultMargin};
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.mediumGray};
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: rgba(0, 0, 0, 0.3) 0px 10px 50px;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.white};
  }
`;

export default SearchForm;
