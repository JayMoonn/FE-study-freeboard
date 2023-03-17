import { ApolloQueryResult } from "@apollo/client";
import { MouseEvent } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../commons/types/generated/types";

export interface IPagenationProps {
  refetch: (
    variables?: Partial<IQueryFetchBoardsArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
  count?: number;
}

export interface IPagenationUIProps {
  activePage: number;
  startPage: number;
  lastPage: number;
  onClickPrev: () => void;
  onClickNext: () => void;
  onClickPage: (event: MouseEvent<HTMLSpanElement>) => void;
}
