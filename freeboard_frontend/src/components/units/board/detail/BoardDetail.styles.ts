import styled from "@emotion/styled";
import { IDislikeIconWrapper, ILikeIconWrapper } from "./BoardDetail.types";

export const Wrapper = styled.div`
  width: 1200px;
  margin: 100px;
`;

export const CardWrapper = styled.div`
  border: 1px solid black;
  padding: 80px 102px 100px 102px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  box-shadow: 0px 0px 10px gray;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #bdbdbd;
  padding-bottom: 20px;
`;

export const AvatarWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Avatar = styled.img`
  margin-right: 10px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const HeaderIconWrapper = styled.div`
  color: red;
  font-size: 25px;
`;

export const Writer = styled.div``;

export const CreateAt = styled.div``;

export const Address = styled.div`
  display: none;
  position: absolute;
  width: 200px;
  padding: 8px;
  border-radius: 8px;
  background: #333;
  color: #fff;
  font-size: 14px;
  text-align: center;
  right: 14%;
`;

export const AddressIconWrapper = styled.span`
  margin-left: 10px;
  :hover + .address {
    display: block;
  }
`;

export const Body = styled.div`
  width: 100%;
  min-height: 800px;
`;

export const Title = styled.h1`
  padding-top: 80px;
`;

export const Contents = styled.div`
  padding-top: 40px;
  padding-bottom: 120px;
`;

export const Youtube = styled.iframe`
  width: 560px;
  height: 315px;
  text-align: center;
`;

export const BottomWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 80px;
`;

export const LikeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  color: gray;
  font-size: 20px;
  cursor: pointer;
`;

export const LikeIconWrapper = styled.div`
  margin: 15px;
  color: ${(props: ILikeIconWrapper) => (props.isLike ? "blue" : "gray")};
`;

export const DislikeIconWrapper = styled.div`
  margin: 15px;
  color: ${(props: IDislikeIconWrapper) => (props.isDislike ? "red" : "gray")};
`;

export const Button = styled.button`
  width: 179px;
  height: 45px;
  margin: 0px 12px;
  cursor: pointer;
  background-color: white;
  border: 1px solid gray;

  :hover {
    background-color: gold;
    border-color: white;
  }
`;
