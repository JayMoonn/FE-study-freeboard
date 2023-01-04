import { useRouter } from 'next/router'

export default function StaticRoutingPage() {

    const router = useRouter()

    const onClickMove1 = () => {
        router.push("/05-08-dynamic-routed-board-query/512")
    }
    const onClickMove2 = () => {
        router.push("/05-08-dynamic-routed-board-query/522")
    }
    const onClickMove3 = () => {
        router.push("/05-08-dynamic-routed-board-query/523")
    }
    const onClickMove100 = () => {
        router.push("/05-08-dynamic-routed-board-query/530")
    }

    return (
        <>
            <button onClick={onClickMove1}>512번 게시글로 이동하기</button>
            <button onClick={onClickMove2}>522번 게시글로 이동하기</button>
            <button onClick={onClickMove3}>523번 게시글로 이동하기</button>
            <button onClick={onClickMove100}>530번 게시글로 이동하기</button>
        </>
    )
}