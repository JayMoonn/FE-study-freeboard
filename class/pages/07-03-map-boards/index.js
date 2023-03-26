import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      number
      writer
      title
      contents
    }
  }
`;

const Row = styled.div`
  display: flex;
`;

const Column = styled.div`
  width: 25%;
`;

export default function StaticRoutedPage() {
  const { data } = useQuery(FETCH_BOARDS);

  return (
    <>
      {data?.fetchBoards.map((el) => (
        <div>
          <span style={{ margin: "10px" }}>
            <input type="checkbox" />
          </span>
          <span style={{ margin: "10px" }}>{el.number}</span>
          <span style={{ margin: "10px" }}>{el.title}</span>
          <span style={{ margin: "10px" }}>{el.contents}</span>
        </div>
      ))}
    </>
  );
}
