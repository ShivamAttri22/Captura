import styled from "styled-components";

export const StyledCreate = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: var(--color-brand-50);
`;
export const StyledForm = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: var(--color-brand-500);
  margin-top: 7rem;
  padding-right: 2rem;
  width: 100rem;
  gap: 2.5rem;
  box-shadow: rgba(36, 22, 22, 0.16) 0px 3px 6px,
    rgba(0, 0, 0, 0.23) 0px 3px 6px;
  position: relative;

  /* background: linear-gradient(
      to bottom right,
      var(--color-brand-900),
      var(--color-brand-1000)
    ); */
`;
export const StyledFileInput = styled.input`
  display: none;
`;

export const StyledFileLabel = styled.label`
  display: flex;
  justify-content: center;
  flex-direction: column;
  line-height: 1.2;
  align-items: center;
  background-color: var(--color-brand-50);

  width: 20rem;
  font-size: 1.4rem;
  padding: 1rem 2rem;
  border-radius: 10px;
  color: var(--color-brand-200);
`;
export const StyledSubmitButton = styled.button`
  background-color: var(--color-brand-200);
  display: inline-block;
  padding: 1rem 3rem;
  color: white;
  font-weight: 500;
  font-size: 1.2rem;

  text-transform: uppercase;
  font-family: "Antic Didone", sans-serif;
  border: 3px solid var(--color-brand-200);
  transition: all 1s;
  &:hover {
    background-color: transparent;
    border: 3px solid var(--color-brand-200);
    color: var(--color-brand-200);
  }
`;
export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;
export const StyledInput = styled.input`
  border: none;
  width: 100%;
  padding: 0.5rem 2rem;
`;
export const StyledDescription = styled.textarea`
  border: none;
  padding: 1rem 2rem;
  height: 15rem;

  &:disabled {
    background-color: #e5e7eb;
  }
`;
export const StyledLabel = styled.label`
  margin-bottom: 0.6rem;
  margin-left: 1rem;
  font-size: 1.4rem;
`;
export const StyledAddTagButton = styled.button`
  position: absolute;
  border: none;
  background: none;
  right: 8px;
  top: 30px;
`;
export const StyledTagWrapper = styled.div`
  min-height: 7.8rem;

  margin-bottom: 3rem;
`;
export const StyledTagsContainer = styled.ul`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

export const StyledTags = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1rem;
  background-color: var(--color-brand-200);
  color: var(--color-brand-50);
  border-radius: 5px;
  padding: 0.5rem 1rem;
`;
export const StyledTagDeleteButton = styled.button`
  background: none;
  border: none;
`;
export const StyledFormImage = styled.img`
  height: 100%;
`;
export const StyledWrapper = styled.div`
  padding-top: 5rem;
  padding-bottom: 2rem;
  > div:first-child {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;

    > h1 {
      font-family: "Antic Didone", sans-serif;
      color: var(--color-brand-400);
      line-height: 1.2;
      font-weight: 400;
      font-size: 4.8rem;
      margin-bottom: 1.6rem;
    }
  }
`;
export const StyledErrorWrapper = styled.div`
  min-height: 2.3rem;
`;
export const StyledErrors = styled.p`
  color: #ff3333;
  font-size: 1.2rem;
  padding-top: 0.5rem;
`;

export const StyledImageName = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const StyledImageWrapper = styled.div`
  display: grid;
  grid-template-columns: 0.75fr 1.25fr;
  margin-bottom: 1.5rem;
  gap: 1rem;
  align-items: center;
`;
