import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function FunctionCounterPage() {
  const [count, setCount] = useState(0);
  const router = useRouter();

  useEffect(() => {
    console.log("그려지고 나서 실행!(처음 실행)");
  }, []);

  useEffect(() => {
    console.log("처음 실행 + 변경되고 나서 실행!");
  });

  useEffect(() => {
    return () => {
      console.log("사라질 때 실행!");
    };
  }, []);

  // ----- 1. 하나로 합치기 가능
  // useEffect(() => {
  //   console.log("그려지고 나서 실행!(처음 실행)");
  //   return () => {
  //     console.log("사라질 때 실행!");
  //   };
  // }, []);

  // useEffect(() => {
  //   console.log("처음 실행 + 변경되고 나서 실행!");
  // });

  // ----- 2. useEffect 잘못된 사용 예제
  // (useEffect 안에서 setState사용 : 두 번 렌더링 됨) - 지양
  // useEffect(() => {
  //   setCount((prev) => prev + 1);
  // }, []);

  const onClickCount = () => {
    console.log(count);
    setCount((prev) => prev + 1);
  };

  const onClickMove = () => {
    void router.push("/");
  };

  console.log("나는 언제 실행될까?");

  return (
    <>
      <div>{count}</div>
      <button onClick={onClickCount}>카운트 올리기!</button>
      <button onClick={onClickMove}>나가기!</button>
    </>
  );
}
