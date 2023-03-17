import { useRouter } from "next/router";
import { useMutation, useQuery } from "@apollo/client";
import BoardDetailUI from "./BoardDetail.presenter";
import {
  DELETE_BOARD,
  DISLIKE_BOARD,
  FETCH_BOARD,
  LIKE_BOARD,
} from "./BoardDetail.queries";
import {
  IMutation,
  IMutationDeleteBoardArgs,
  IMutationLikeBoardArgs,
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../commons/types/generated/types";
import { MouseEvent, useState } from "react";

export default function BoardDetail() {
  const router = useRouter();
  const [deleteBoard] = useMutation<
    Pick<IMutation, "deleteBoard">,
    IMutationDeleteBoardArgs
  >(DELETE_BOARD);
  const [likeBoard] = useMutation<
    Pick<IMutation, "likeBoard">,
    IMutationLikeBoardArgs
  >(LIKE_BOARD);
  const [dislikeBoard] = useMutation<
    Pick<IMutation, "dislikeBoard">,
    IMutationLikeBoardArgs
  >(DISLIKE_BOARD);
  const [isLike, setIsLike] = useState(false);
  const [isDislike, setIsDislike] = useState(false);

  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: {
        boardId: String(router.query.boardId),
      },
    }
  );

  const onClickLikeIcon = async () => {
    if (isLike) return;
    setIsLike(!isLike);
    try {
      await likeBoard({
        variables: {
          boardId: String(router.query.boardId),
        },
        refetchQueries: [
          {
            query: FETCH_BOARD,
            variables: { boardId: String(router.query.boardId) },
          },
        ],
      });
      console.log(data?.fetchBoard.boardAddress);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const onClickDislikeIcon = async () => {
    if (isDislike) return;
    setIsDislike(!isDislike);
    try {
      await dislikeBoard({
        variables: {
          boardId: String(router.query.boardId),
        },
        refetchQueries: [
          {
            query: FETCH_BOARD,
            variables: { boardId: String(router.query.boardId) },
          },
        ],
      });
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const onClickMoveToBoardList = () => {
    router.push("/boards");
  };

  const onClickMoveToBoardEdit = () => {
    router.push(`/boards/${router.query.boardId}/edit`);
  };

  const onClickDeleteBoard = async (event: MouseEvent<HTMLButtonElement>) => {
    try {
      await deleteBoard({
        variables: {
          boardId: (event.target as HTMLButtonElement).id,
        },
      });
      router.push("/boards");
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return (
    <BoardDetailUI
      isLike={isLike}
      isDislike={isDislike}
      onClickLikeIcon={onClickLikeIcon}
      onClickDislikeIcon={onClickDislikeIcon}
      onClickDeleteBoard={onClickDeleteBoard}
      onClickMoveToBoardList={onClickMoveToBoardList}
      onClickMoveToBoardEdit={onClickMoveToBoardEdit}
      data={data}
    />
  );
}
