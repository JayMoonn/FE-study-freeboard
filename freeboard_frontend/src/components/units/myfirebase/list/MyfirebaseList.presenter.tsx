import * as S from "../../board/list/BoardList.styles";
import { getDate } from "../../../../commons/libraries/utils";
import { IMyfirebaseUIProps } from "./MyfirebaseList.types";

export default function MyfirebaseUI(props: IMyfirebaseUIProps) {
  return (
    <S.Wrapper>
      <S.TableLine />
      <S.Row>
        <S.ColumnHeader1>ID</S.ColumnHeader1>
        <S.ColumnHeader2>제목</S.ColumnHeader2>
        <S.ColumnHeader1>작성자</S.ColumnHeader1>
        <S.ColumnHeader1>날짜</S.ColumnHeader1>
      </S.Row>
      {props.dataBoards.map((el) => (
        <S.Row>
          <S.ColumnHeader1>
            {String("qweqweqs").slice(-4).toUpperCase()}
          </S.ColumnHeader1>
          <S.ColumnHeader2>{el.title}</S.ColumnHeader2>
          <S.ColumnHeader1>{el.writer}</S.ColumnHeader1>
          <S.ColumnHeader1>{getDate("1223")}</S.ColumnHeader1>
        </S.Row>
      ))}
      <S.TableLine />
    </S.Wrapper>
  );
}
