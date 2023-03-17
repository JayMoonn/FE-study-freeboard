import styled from "@emotion/styled";
import { Rate } from "antd";

export const ItemWrapper = styled.div`
  width: 1200px;
  height: 111px;
  border-bottom: 1px solid lightgray;
  margin: 0px 100px;
  padding-top: 20px;
`;

export const FlexWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
`;

export const MainWrapper = styled.div`
  padding-left: 10px;
  width: 100%;
`;

export const WriterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 3px;
`;

export const Writer = styled.div`
  font-weight: bold;
`;

export const Star = styled(Rate)`
  margin-left: 10px;
  font-size: 14px;
  color: red;
`;

export const Contents = styled.div`
  font-size: 14px;
  color: gray;
`;

export const OptionWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const UpdateIcon = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

export const DeleteIcon = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

export const DateString = styled.div`
  color: lightgray;
  font-size: 11px;
  margin-left: 50px;
  margin-top: 18px;
`;
