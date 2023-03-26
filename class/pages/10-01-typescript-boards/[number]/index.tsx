import { useQuery, gql } from '@apollo/client'
import { useRouter } from 'next/router'

const FETCH_BOARD = gql`
    query fetchBoard($number: Int) {
        fetchBoard(number: $number){
            writer
            title
            contents
        }
    }
`

export default function StaticRoutedPage() {

    const router = useRouter()

    const { data } = useQuery(FETCH_BOARD, {
        variables: {
            number: Number(router.query.number)
        }
    })

    const onClickMoveToEdit = () => {
        router.push(`/10-01-typescript-boards/${router.query.number}/edit`)
    }

    return (
        <>
            <div>{router.query.number}번 페이지 이동 완료</div>
            <div>작성자 : {data && data.fetchBoard.writer}</div>
            {/* data && 붙여서 -> 동기 처리하기 (조건부 렌더링) */}
            {/* 방법 2 : data ? data.fetchBoard.writer : "로딩중" */}
            {/* 방법 3(옵셔널 체이닝) : data?.fetchBoard.writer */}
            <div>제목 : {data && data.fetchBoard.title}</div>
            <div>내용 : {data && data.fetchBoard.contents}</div>
            <button onClick={onClickMoveToEdit}>수정하러 이동하기</button>
        </>
    )
}