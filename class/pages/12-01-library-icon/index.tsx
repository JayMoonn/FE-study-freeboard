import { Rate } from "antd";
import styled from "@emotion/styled";
import { useState } from "react";

const MyStar = styled(Rate)({
  color: "red",
  fontSize: "30px",
});

export default function LibraryIconPage() {
  const [value, setValue] = useState(3);

  // const qqq = (value: number) => {
  //     setValue(value);
  // };

  return <MyStar onChange={setValue} />;
}
