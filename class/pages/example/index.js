import { useState } from "react";

export default function Example() {
  const onChangeContent = (event) => {
    console.log(event.target.value);
    if (event.target.value) {
      setIsFilled(true);
    } else {
      setIsFilled(false);
    }
  };
  const [isFilled, setIsFilled] = useState(false);
  return (
    <div>
      <input onChange={onChangeContent} />
      {isFilled ? <div>내용이 채워짐</div> : <div>내용이 채워지지않음</div>}
    </div>
  );
}
