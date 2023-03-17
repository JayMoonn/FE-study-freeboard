import { FetchMoreQueryOptions } from "@apollo/client";
import { MouseEvent } from "react";
import {
  IBoardComment,
  IQuery,
  IQueryFetchBoardCommentsArgs,
  IQueryFetchBoardsArgs,
} from "../../../../commons/types/generated/types";

export interface IBoardCommentListUIProps {
  data?: Pick<IQuery, "fetchBoardComments">;
  onLoadMore: () => void;
  onClickDeleteComment: (event: MouseEvent<HTMLImageElement>) => void;
}

export interface IBoardCommentListUIItemProps {
  key: string;
  el: IBoardComment;
  onClickDeleteComment: (event: MouseEvent<HTMLImageElement>) => void;
}
