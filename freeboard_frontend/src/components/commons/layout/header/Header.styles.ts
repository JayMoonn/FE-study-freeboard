import styled from "@emotion/styled";

export const Wrapper = styled.div`
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0px 360px;
  padding: 5px;
`;

export const InnerWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Logo = styled.div`
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
`;

export const LoginBtn = styled.span`
  font-size: 15px;
  cursor: pointer;
  font-weight: bold;
  padding: 10px;
`;

export const JoinBtn = styled.span`
  font-size: 15px;
  cursor: pointer;
  font-weight: bold;
  padding: 10px;
  border-radius: 10px;
  background-color: #ffd600;
`;
