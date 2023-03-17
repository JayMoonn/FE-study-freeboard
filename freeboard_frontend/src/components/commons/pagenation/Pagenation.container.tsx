import { MouseEvent, useState } from "react";
import PagenationUI from "./Pagenation.presenter";
import { IPagenationProps } from "./Pagenation.types";

export default function Pagenation(props: IPagenationProps) {
  const [activePage, setActivePage] = useState(1);
  const [startPage, setStartPage] = useState(1);
  const lastPage = Math.ceil(Number(props.count) / 10);
  const onClickPrev = () => {
    if (startPage === 1) return;
    setStartPage(startPage - 10);
    setActivePage(startPage - 10);
    props.refetch({ page: startPage - 10 });
  };
  const onClickNext = () => {
    console.log(lastPage);
    if (startPage + 10 > lastPage) return;
    setStartPage(startPage + 10);
    setActivePage(startPage + 10);
    props.refetch({ page: startPage + 10 });
  };
  const onClickPage = (event: MouseEvent<HTMLSpanElement>) => {
    const activedPage = Number(event.currentTarget.id);
    setActivePage(activedPage);
    void props.refetch({ page: activedPage });
  };

  return (
    <PagenationUI
      activePage={activePage}
      startPage={startPage}
      lastPage={lastPage}
      onClickPrev={onClickPrev}
      onClickNext={onClickNext}
      onClickPage={onClickPage}
    />
  );
}
