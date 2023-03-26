export default function MyfirebaseWriteUI(props) {
  return (
    <>
      <div>작성자</div>
      <input type="text" onChange={props.onChangeWriter} />
      <div>제목</div>
      <input type="text" onChange={props.onChangeTitle} />
      <div>내용</div>
      <input type="text" onChange={props.onChangeContent} />

      <button onClick={props.onClickSubmit}>제출</button>
    </>
  );
}
