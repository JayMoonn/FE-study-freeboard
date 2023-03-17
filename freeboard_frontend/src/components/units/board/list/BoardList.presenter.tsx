import * as S from "./BoardList.styles";
import { getDate } from "../../../../commons/libraries/utils";
import { IBoardListUIProps } from "./BoardList.types";
import Pagenation from "../../../commons/pagenation/Pagenation.container";

export default function BoardListUI(props: IBoardListUIProps) {
  return (
    <S.Wrapper>
      <S.TableLine />
      <S.Row>
        <S.ColumnHeader1>ID</S.ColumnHeader1>
        <S.ColumnHeader2>제목</S.ColumnHeader2>
        <S.ColumnHeader1>작성자</S.ColumnHeader1>
        <S.ColumnHeader1>날짜</S.ColumnHeader1>
      </S.Row>
      {props.data?.fetchBoards.map((el) => (
        <S.Row
          key={el._id}
          id={el._id}
          onClick={props.onClickMoveToBoardDetail}
        >
          <S.ColumnHeader1>
            {String(el._id).slice(-4).toUpperCase()}
          </S.ColumnHeader1>
          <S.ColumnHeader2>{el.title}</S.ColumnHeader2>
          <S.ColumnHeader1>{el.writer}</S.ColumnHeader1>
          <S.ColumnHeader1>{getDate(el.createdAt)}</S.ColumnHeader1>
        </S.Row>
      ))}
      <S.TableLine />
      <S.Footer>
        <Pagenation refetch={props.refetch} count={props.count} />
        <S.Button onClick={props.onClickMoveToBoardNew}>
          <S.PencilIcon src="/images/board/list/write.png" />
          게시물 등록하기
        </S.Button>
      </S.Footer>
    </S.Wrapper>
  );
}
