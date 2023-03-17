import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { IBoardComment } from "../../../../commons/types/generated/types";

export interface IBoardCommentWriteProps {
  isEdit?: boolean;
  setIsEdit?: Dispatch<SetStateAction<boolean>>;
  el?: IBoardComment;
}

export interface IBoardCommentWriteUIProps {
  rate: number;
  setRate: Dispatch<SetStateAction<number>>;
  contents: string;
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickCreateComment: () => void;
  onClickUpdateComment: () => void;
  isEdit?: boolean;
  el?: IBoardComment;
}

export interface IUpdateBoardCommentInputProps {
  contents?: string;
  rating?: number;
}
