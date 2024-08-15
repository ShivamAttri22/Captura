import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
`;

const SearchWrapper = styled.div`
  border-radius: 0.5rem;
  background-color: transparent;
  padding: 20px;
`;

const SearchBox = styled.div`
  display: flex;
`;

const IconWrapper = styled.div`
  display: flex;
  width: 40px;
  align-items: center;
  justify-content: center;
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  border-right: 1px solid #e5e7eb;
  background-color: white;
  padding: 20px;
  position: relative;
`;

const Icon = styled.svg`
  pointer-events: none;
  position: absolute;
  width: 20px;
  fill: #6b7280;
  transition: all 0.2s;
`;

const Input = styled.input`
  width: 450px;

  background-color: white;
  border: none;
  font-family: default;
  padding-left: 8px;
  font-size: 1.6rem;
  font-weight: 500;
  outline: none;
  transition: all 0.4s;

  &::placeholder {
    font-size: 1.4rem;
    font-weight: 400;
    letter-spacing: 1.2px;
  }
`;

const Button = styled.input`
  font-family: "Antic Didone";
  letter-spacing: 1px;

  border: none;
  background-color: #80a0a2;
  padding: 8px;
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  color: white;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.8s;

  &:hover {
    background-color: #566c6d;
  }
`;

const SearchBar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [query, setQuery] = useState("");
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const recentSearches = ["Black car", "flower in hand", "flower"];
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleItemClick = (item) => {
    setQuery(item);
    setDropdownVisible(false);
  };
  return (
    <Container>
      <SearchWrapper>
        <SearchBox>
          <IconWrapper>
            <Icon viewBox="0 0 20 20" aria-hidden="true">
              <path d="M16.72 17.78a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 14.5A5.5 5.5 0 0 1 3.5 9H2a7 7 0 0 0 7 7v-1.5ZM3.5 9A5.5 5.5 0 0 1 9 3.5V2a7 7 0 0 0-7 7h1.5ZM9 3.5A5.5 5.5 0 0 1 14.5 9H16a7 7 0 0 0-7-7v1.5Zm3.89 10.45 3.83 3.83 1.06-1.06-3.83-3.83-1.06 1.06ZM14.5 9a5.48 5.48 0 0 1-1.61 3.89l1.06 1.06A6.98 6.98 0 0 0 16 9h-1.5Zm-1.61 3.89A5.48 5.48 0 0 1 9 14.5V16a6.98 6.98 0 0 0 4.95-2.05l-1.06-1.06Z"></path>
            </Icon>
          </IconWrapper>
          <Input
            value={query}
            onFocus={() => setDropdownVisible(true)}
            onBlur={() => setDropdownVisible(false)}
            onChange={handleInputChange}
            type="text"
            placeholder="What image sparks your interest?"
            id=""
          />
          <Button onClick={() => setQuery("")} type="button" value="Search" />
        </SearchBox>
      </SearchWrapper>
      {dropdownVisible && (
        <DropdownContainer>
          <DropdownSection>
            <SectionTitle>Recent searches</SectionTitle>
            {recentSearches.map((item) => (
              <DropdownItem key={item} onClick={() => handleItemClick(item)}>
                {item}
                <RemoveButton onClick={() => setQuery(query.replace(item, ""))}>
                  &times;
                </RemoveButton>
              </DropdownItem>
            ))}
          </DropdownSection>
        </DropdownContainer>
      )}
    </Container>
  );
};

export default SearchBar;

const DropdownContainer = styled.div`
  position: absolute;
  top: 35px;
  left: 60px;
  width: 450px;

  border-radius: 4px;
  background: #fff;

  z-index: 1000;
`;

const DropdownSection = styled.div`
  padding: 10px;
`;

const SectionTitle = styled.h4`
  margin: 0 0 10px;
  font-size: 14px;
  color: #666;
`;

const DropdownItem = styled.div`
  padding: 10px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    background: #f0f0f0;
  }
`;

const RemoveButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  font-size: 16px;
  color: #ccc;
`;
