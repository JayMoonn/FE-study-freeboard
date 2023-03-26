import BoardWriteUI from "./BoardWrite.presenter"
import { useMutation } from '@apollo/client'
import { useState } from 'react'
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries"
import { useRouter } from 'next/router'

export default function BoardWrite(props) {
    const router = useRouter()

    const [mycolor, setMycolor] = useState(false)

    const [writer, setWriter] = useState("")
    const [title, setTitle] = useState("")
    const [contents, setContents] = useState("")
    const [나의함수] = useMutation(CREATE_BOARD)
    const [updateBoard] = useMutation(UPDATE_BOARD)

    const onClickSubmit = async () => {
        const result = await 나의함수({
            variables: {
                writer: writer,
                title: title,
                contents: contents
            }
        })
        alert(result.data.createBoard.message)
        router.push(`/09-01-boards/${result.data.createBoard.number}`)
    }

    const onClickUpdate = async () => {
        const myvariables = {
            number: Number(router.query.number)
        }
        if (writer) myvariables.writer = writer;
        if (title) myvariables.title = title;
        if (contents) myvariables.contents = contents;

        // 1. 수정하기 뮤테이션 날리기
        const result = await updateBoard({
            variables: myvariables
        })
        // 2. 상세 페이지로 이동하기
        alert(result.data.updateBoard.message)
        router.push(`/09-01-boards/${result.data.updateBoard.number}`)
    }

    const onChangeWriter = (event) => {
        setWriter(event.target.value)
        if (event.target.value && title && contents) {
            setMycolor(true)
        }
    }

    const onChangeTitle = (event) => {
        setTitle(event.target.value)
        if (writer && event.target.value && contents) {
            setMycolor(true)
        }
    }

    const onChangeContents = (event) => {
        setContents(event.target.value)
        if (writer && title && event.target.value) {
            setMycolor(true)
        }
    }

    return (
        <BoardWriteUI
            onClickUpdate={onClickUpdate}
            onClickSubmit={onClickSubmit}
            onChangeWriter={onChangeWriter}
            onChangeTitle={onChangeTitle}
            onChangeContents={onChangeContents}
            mycolor={mycolor}
            isEdit={props.isEdit}
            data={props.data}
        />
    )
}