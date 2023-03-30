import styled from "@emotion/styled";
import { ChangeEvent, useRef } from "react";

interface IUploadImgBtnProps {
  onChangeFile: (event: ChangeEvent<HTMLInputElement>) => void;
  imgUrl: string;
  index: number;
}

export default function UploadImgBtn(props: IUploadImgBtnProps) {
  const fileRef = useRef<HTMLInputElement>(null);
  const onClickImg = () => {
    return fileRef.current?.click();
  };

  return (
    <>
      {props.imgUrl ? (
        <FilledImg src={`https://storage.googleapis.com/${props.imgUrl}`} />
      ) : (
        <NotFilledImg onClick={onClickImg}>+</NotFilledImg>
      )}
      <input
        type="file"
        style={{ display: "none" }}
        onChange={props.onChangeFile}
        accept="image/jpg, image/png"
        ref={fileRef}
        id={String(props.index)}
      />
    </>
  );
}

const FilledImg = styled.img`
  width: 78px;
  height: 78px;
  margin-right: 24px;
`;

const NotFilledImg = styled.button`
  width: 78px;
  height: 78px;
  background-color: #bdbdbd;
  margin-right: 24px;
  outline: none;
  border: none;
  cursor: pointer;
`;
