import * as S from "./Header.styles";
import { IHeaderUIProps } from "./Header.types";

export default function HeaderUI(props: IHeaderUIProps) {
  return (
    <S.Wrapper>
      <S.InnerWrapper>
        <S.Logo onClick={props.onClickLogo}>⚫️ ProblmZro</S.Logo>
        <div>
          <S.LoginBtn onClick={props.onClickLogin}>로그인</S.LoginBtn>
          <S.JoinBtn onClick={props.onClickJoin}>회원가입</S.JoinBtn>
        </div>
      </S.InnerWrapper>
    </S.Wrapper>
  );
}
