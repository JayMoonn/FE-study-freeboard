import styled from "@emotion/styled";
import { Rate } from "antd";

export const Wrapper = styled.div`
  width: 1200px;
  margin: 0px 100px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 45px;
  border-top: 1px solid lightgray;
`;

export const PencilIcon = styled.img`
  margin-right: 3px;
`;

export const Star = styled(Rate)`
  color: red;
  margin-left: 10px;
  font-size: 15px;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  width: 180px;
  height: 52px;
  padding-left: 20px;
  border: 1px solid lightgray;
  margin-right: 20px;
`;

export const ContentsWrapper = styled.div`
  margin-bottom: 45px;
  border: 1px solid lightgray;
`;

export const Contents = styled.input`
  width: 100%;
  min-height: 108px;
  padding: 20px;
  border: none;
  border-bottom: 1px solid lightgray;
`;

export const BottomWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 51px;
  padding-left: 20px;
`;

export const ContentsLength = styled.div`
  height: 51px;
  line-height: 51px;
  color: gray;
`;

export const Button = styled.button`
  width: 91px;
  height: 100%;
  background-color: black;
  color: white;
  cursor: pointer;
`;
