import { MouseEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IBoardDetailUIProps {
  isLike: boolean;
  isDislike: boolean;
  onClickLikeIcon: () => void;
  onClickDislikeIcon: () => void;
  onClickDeleteBoard: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickMoveToBoardList: () => void;
  onClickMoveToBoardEdit: () => void;
  data?: Pick<IQuery, "fetchBoard">;
}

export interface ILikeIconWrapper {
  isLike: boolean;
}

export interface IDislikeIconWrapper {
  isDislike: boolean;
}
