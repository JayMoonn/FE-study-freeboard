import { useState } from "react";
import { getDate } from "../../../../commons/libraries/utils";
import BoardCommentWrite from "../write/BoardCommentWrite.container";
import * as S from "./BoardCommentList.styles";
import { IBoardCommentListUIItemProps } from "./BoardCommentList.types";

export default function BoardCommentListUIItem(
  props: IBoardCommentListUIItemProps
) {
  // const onClickUpdateComment = () => {};
  const [isEdit, setIsEdit] = useState(false);

  return (
    <>
      {!isEdit && (
        <S.ItemWrapper>
          <S.FlexWrapper>
            <S.Avatar src="/images/avatar.png" />
            <S.MainWrapper>
              <S.WriterWrapper>
                <S.Writer>{props.el?.writer}</S.Writer>
                <S.Star disabled defaultValue={props.el?.rating} />
              </S.WriterWrapper>
              <S.Contents>{props.el?.contents}</S.Contents>
            </S.MainWrapper>
            <S.OptionWrapper>
              <S.UpdateIcon
                src="/images/boardComment/list/option_update_icon.png/"
                onClick={() => {
                  setIsEdit(true);
                }}
              />
              <S.DeleteIcon
                id={props.el._id}
                src="/images/boardComment/list/option_delete_icon.png/"
                onClick={props.onClickDeleteComment}
              />
            </S.OptionWrapper>
          </S.FlexWrapper>
          <S.DateString>{getDate(props.el.createdAt)}</S.DateString>
        </S.ItemWrapper>
      )}
      {isEdit && (
        <BoardCommentWrite isEdit={true} setIsEdit={setIsEdit} el={props.el} />
      )}
    </>
  );
}
