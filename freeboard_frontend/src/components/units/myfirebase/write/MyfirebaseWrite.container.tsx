import MyfirebaseWriteUI from "./MyfirebaseWrite.presenter";
import { collection, addDoc, getFirestore } from "firebase/firestore/lite";
import { firebaseApp } from "../../../../commons/libraries/firebase";
import { useState } from "react";
import { useRouter } from "next/router";

export default function MyfirebaseWrite() {
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const route = useRouter();

  const onClickSubmit = () => {
    const board = collection(getFirestore(firebaseApp), "board");
    void addDoc(board, {
      writer,
      title,
      contents,
    });
    route.push(`/boards-firebase`);
  };

  const onChangeWriter = (event) => {
    setWriter(event.target.value);
  };
  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  };
  const onChangeContents = (event) => {
    setContents(event.target.value);
  };

  return (
    <MyfirebaseWriteUI
      onChangeWriter={onChangeWriter}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      onClickSubmit={onClickSubmit}
    />
  );
}
