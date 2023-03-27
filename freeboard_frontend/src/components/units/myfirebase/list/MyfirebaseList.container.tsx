import MyfirebaseUI from "./MyfirebaseList.presenter";
import { collection, getDocs, getFirestore } from "firebase/firestore/lite";
import { firebaseApp } from "../../../../commons/libraries/firebase";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

interface IPropsDataBoards {
  id: string;
  writer: string;
  title: string;
  contents: string;
}

export default function MyfirebaseList() {
  const router = useRouter();

  const [dataBoards, setDataBoards] = useState<IPropsDataBoards[]>([]);

  const onClickWriteBtn = () => {
    router.push(`/boards-firebase/new`);
  };

  useEffect(() => {
    const fetchFireBaseBoard = async () => {
      const board = collection(getFirestore(firebaseApp), "board");
      const result = await getDocs(board);
      const datas = result.docs.map((el) => el.data());
      setDataBoards(datas);
    };
    fetchFireBaseBoard();
  }, []);

  return (
    <>
      <MyfirebaseUI dataBoards={dataBoards} />
      <button onClick={onClickWriteBtn}>글작성</button>
    </>
  );
}
