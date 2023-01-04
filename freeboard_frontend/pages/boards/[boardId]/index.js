import { AvatarWrapper, CardWrapper, Wrapper, Writer, CreateAt, Avatar, Info, Header, Body, Title, Contents, BottomWrapper, Button } from "../../../styles/emotion-detail";

import { useRouter } from "next/router"
import { gql, useQuery } from "@apollo/client"

const FETCH_BOARD = gql`
    query fetchBoard($boardId: ID!){
        fetchBoard(boardId:$boardId){
            writer
            title
            contents
            createdAt
        }
    }
`

export default function BoardDetailPage() {

    const router = useRouter()

    const { data } = useQuery(FETCH_BOARD, {
        variables: {
            boardId: router.query.boardId
        }
    })

    return (
        <Wrapper>
            <CardWrapper>
                <Header>
                    <AvatarWrapper>
                        <Avatar src="/images/avatar.png" />
                        <Info>
                            <Writer>{data?.fetchBoard.writer}</Writer>
                            <CreateAt>{data?.fetchBoard.createdAt}</CreateAt>
                        </Info>
                    </AvatarWrapper>
                </Header>
                <Body>
                    <Title>{data?.fetchBoard.title}</Title>
                    <Contents>{data?.fetchBoard.contents}</Contents>
                </Body>
            </CardWrapper>
            <BottomWrapper>
                <Button>목록으로</Button>
                <Button>수정하기</Button>
                <Button>삭제하기</Button>
            </BottomWrapper>
        </Wrapper>
    )
}