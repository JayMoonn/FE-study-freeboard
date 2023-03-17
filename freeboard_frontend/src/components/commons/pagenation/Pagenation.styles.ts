import styled from "@emotion/styled";

export const Pagenation = styled.div``;

interface IPageNumberProps {
  isActive?: boolean;
}
export const PageNumber = styled.span`
  color: ${(props: IPageNumberProps) => (props.isActive ? "teal" : "black")};
  font-weight: ${(props: IPageNumberProps) => (props.isActive ? 600 : 400)};
  font-size: 17px;
  padding: 5px;
  cursor: pointer;
`;
