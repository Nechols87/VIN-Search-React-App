import styled from "styled-components/macro";

export const Wrapper = styled.div`
  padding: 100px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  font-family: var(--font-family);
  font-style: normal;
  font-weight: 600;
  font-size: 47px;
  color: black;
  padding: 0 0 30px 0;
`;

export const Error = styled.p`
  font-size: 24px;
  font-weight: 400;
  font-style: normal;
  text-align: left;
  color: red;
  align-self: start;
`;

export const BackButton = styled.button`
  border-radius: 8px;
  border-width: 0px;
  width: 270px;
  margin: 1rem 0 1rem 0;
  padding: 1rem 1rem 1rem 1rem;
  background-color: #000000;
  color: white;
  cursor: pointer;
`;

export const SearchButton = styled.button`
  cursor: pointer;
`;

export const Table = styled.table`
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
  td,
  th {
    border: 1px solid black;
    padding: 18px;
  }
`;

export const Tablethead = styled.thead`
  background-color: #b9d9eb;
  font-weight: bold;
`;
