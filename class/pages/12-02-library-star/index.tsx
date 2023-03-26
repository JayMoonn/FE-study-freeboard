import { DownOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";

const MyIcon = styled(DownOutlined)`
  color: red;
  font-size: 30px;
`;

export default function LibraryIconPage() {
  return (
    <div>
      <MyIcon />
    </div>
  );
}
