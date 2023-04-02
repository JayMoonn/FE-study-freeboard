import { getDate } from "../../../../commons/libraries/utils";
import * as S from "./BoardDetail.styles";
import { IBoardDetailUIProps } from "./BoardDetail.types";
import {
  LikeOutlined,
  DislikeOutlined,
  ShareAltOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";

export default function BoardDetailUI(props: IBoardDetailUIProps) {
  return (
    <S.Wrapper>
      <S.CardWrapper>
        <S.Header>
          <S.AvatarWrapper>
            <S.Avatar src="/images/avatar.png" />
            <S.Info>
              <S.Writer>{props.data?.fetchBoard.writer}</S.Writer>
              <S.CreateAt>
                {getDate(props.data?.fetchBoard.createdAt)}
              </S.CreateAt>
            </S.Info>
          </S.AvatarWrapper>
          <S.HeaderIconWrapper>
            <ShareAltOutlined />
            <S.AddressIconWrapper>
              <EnvironmentOutlined />
            </S.AddressIconWrapper>
            <S.Address className="address">
              {props.data?.fetchBoard.boardAddress?.address ||
                "주소가 작성되지 않았습니다."}
              <br />
              {props.data?.fetchBoard.boardAddress?.addressDetail || ""}
            </S.Address>
          </S.HeaderIconWrapper>
        </S.Header>
        <S.Body>
          <S.Title>{props.data?.fetchBoard.title}</S.Title>
          <S.Contents>{props.data?.fetchBoard.contents}</S.Contents>
          <div style={{ textAlign: "center" }}>
            <S.Youtube
              src={props.data?.fetchBoard.youtubeUrl || ""}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></S.Youtube>
            {props.data?.fetchBoard.images
              ?.filter((el: string) => el !== "")
              .map((el: string) => (
                <div>
                  <S.Image src={`https://storage.googleapis.com/${el}`} />
                </div>
              ))}
          </div>
        </S.Body>
        <S.LikeWrapper>
          <S.LikeIconWrapper
            onClick={props.onClickLikeIcon}
            isLike={props.isLike}
          >
            <LikeOutlined />
            <div>{props.data?.fetchBoard.likeCount}</div>
          </S.LikeIconWrapper>
          <S.DislikeIconWrapper
            onClick={props.onClickDislikeIcon}
            isDislike={props.isDislike}
          >
            <DislikeOutlined />
            <div>{props.data?.fetchBoard.dislikeCount}</div>
          </S.DislikeIconWrapper>
        </S.LikeWrapper>
      </S.CardWrapper>
      <S.BottomWrapper>
        <S.Button onClick={props.onClickMoveToBoardList}>목록으로</S.Button>
        <S.Button onClick={props.onClickMoveToBoardEdit}>수정하기</S.Button>
        <S.Button
          id={props.data?.fetchBoard._id}
          onClick={props.onClickDeleteBoard}
        >
          삭제하기
        </S.Button>
      </S.BottomWrapper>
    </S.Wrapper>
  );
}
