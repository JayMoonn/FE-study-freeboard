import * as S from "./Pagenation.styles";
import { IPagenationUIProps } from "./Pagenation.types";

export default function PagenationUI(props: IPagenationUIProps) {
  return (
    <S.Pagenation>
      <S.PageNumber onClick={props.onClickPrev}>{` < `}</S.PageNumber>
      {new Array(10)
        .fill(1)
        .map(
          (_, index) =>
            props.startPage + index <= props.lastPage && (
              <S.PageNumber
                onClick={props.onClickPage}
                id={String(index + props.startPage)}
                key={index}
                isActive={props.startPage + index === props.activePage}
              >{` ${index + props.startPage} `}</S.PageNumber>
            )
        )}
      <S.PageNumber onClick={props.onClickNext}>{` > `}</S.PageNumber>
    </S.Pagenation>
  );
}
