import { useMutation } from "@apollo/client";
import { ChangeEvent, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { CREATE_BOARD, UPDATE_BOARD, UPLOAD_FILE } from "./BoardWrite.queries";
import BoardWriteUI from "./BoardWrite.presenter";
import { IBoardWriteProps, IUpdateBoardInput } from "./BoardWrite.types";
import {
  IMutation,
  IMutationCreateBoardArgs,
  IMutationUpdateBoardArgs,
  IMutationUploadFileArgs,
} from "../../../../commons/types/generated/types";

export default function BoardWrite(props: IBoardWriteProps) {
  const [isAllFilled, setIsAllFilled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [youtubeUrl, setYoutubeUrl] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [address, setAddress] = useState("");
  const [addressDetail, setAddressDetail] = useState("");
  const [imgUrl, setImgUrl] = useState(["", "", ""]);

  const [writerError, setWriterError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [contentsError, setContentsError] = useState("");

  const [createBoard] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);
  const [updateBoard] = useMutation<
    Pick<IMutation, "updateBoard">,
    IMutationUpdateBoardArgs
  >(UPDATE_BOARD);
  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const router = useRouter();

  function onChangeWriter(event: ChangeEvent<HTMLInputElement>) {
    setWriter(event.target.value);
    if (event.target.value !== "") {
      setWriterError("");
    }
    if (event.target.value && password && title && contents) {
      setIsAllFilled(true);
    } else setIsAllFilled(false);
  }

  function onChangePassword(event: ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
    if (event.target.value !== "") {
      setPasswordError("");
    }
    if (writer && event.target.value && title && contents) {
      setIsAllFilled(true);
    } else setIsAllFilled(false);
  }

  function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
    if (event.target.value !== "") {
      setTitleError("");
    }
    if (writer && password && event.target.value && contents) {
      setIsAllFilled(true);
    } else setIsAllFilled(false);
  }

  function onChangeContents(event: ChangeEvent<HTMLTextAreaElement>) {
    setContents(event.target.value);
    if (event.target.value !== "") {
      setContentsError("");
    }
    if (writer && password && title && event.target.value) {
      setIsAllFilled(true);
    } else setIsAllFilled(false);
  }

  function onChangeYoutubeUrl(event: ChangeEvent<HTMLInputElement>) {
    setYoutubeUrl(event.target.value);
  }

  function onChangeAddressDetail(event: ChangeEvent<HTMLInputElement>) {
    setAddressDetail(event.target.value);
  }

  const onClickAddressSearch = () => {
    setIsModalOpen((prev) => !prev);
  };

  const onCompleteAddressSearch = (data: any) => {
    setZipcode(data.zonecode);
    setAddress(data.address);
    setIsModalOpen((prev) => !prev);
  };

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    console.log(file);
    if (!file?.size) {
      alert("파일이 존재하지 않습니다.");
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      alert("파일의 사이즈가 너무 큽니다. (5MB 제한)");
      return;
    }
    const indexx = event.target.id;

    try {
      const result = await uploadFile({ variables: { file } });
      const newImgUrl = [...imgUrl];
      newImgUrl[Number(indexx)] = result.data?.uploadFile.url ?? "";
      setImgUrl(newImgUrl);
    } catch (error) {
      console.log(error);
    }
  };
  // 이미지 업로드 수정을 위한 부분
  useEffect(() => {
    if (props.data?.fetchBoard.images?.length) {
      setImgUrl([...props.data?.fetchBoard.images]);
    }
  }, [props.data]);
  // const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
  //   const file = event.target.files?.[0];
  //   console.log(file);
  //   if (!file?.size) {
  //     alert("파일이 존재하지 않습니다.");
  //     return;
  //   }
  //   if (file.size > 5 * 1024 * 1024) {
  //     alert("파일의 사이즈가 너무 큽니다. (5MB 제한)");
  //     return;
  //   }

  //   try {
  //     const result = await uploadFile({ variables: { file } });
  //     const newImgUrl = [...imgUrl];
  //     newImgUrl[0] = result.data?.uploadFile.url ?? "";
  //     setImgUrl(newImgUrl);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const onClickSubmit = async () => {
    if (!writer) {
      setWriterError("작성자를 입력해주세요.");
    }
    if (!password) {
      setPasswordError("비밀번호를 입력해주세요.");
    }
    if (!title) {
      setTitleError("제목을 입력해주세요.");
    }
    if (!contents) {
      setContentsError("내용을 입력해주세요.");
    }
    if (writer && password && title && contents) {
      try {
        const result = await createBoard({
          variables: {
            createBoardInput: {
              writer,
              password,
              title,
              contents,
              youtubeUrl,
              boardAddress: {
                zipcode,
                address,
                addressDetail,
              },
              images: [...imgUrl],
            },
          },
        });
        setIsAllFilled(true);
        alert("게시물이 등록되었습니다.");
        router.push(`/boards/${result.data?.createBoard?._id}`);
      } catch (error) {
        if (error instanceof Error) alert(error.message);
      }
    }
  };

  const onClickEdit = async () => {
    const updateBoardInput: IUpdateBoardInput = {};
    if (title) updateBoardInput.title = title;
    if (contents) updateBoardInput.contents = contents;
    if (youtubeUrl) updateBoardInput.youtubeUrl = youtubeUrl;
    if (zipcode || address || addressDetail) {
      updateBoardInput.boardAddress = {};
      if (zipcode) updateBoardInput.boardAddress.zipcode = zipcode;
      if (address) updateBoardInput.boardAddress.address = address;
      if (addressDetail)
        updateBoardInput.boardAddress.addressDetail = addressDetail;
    }
    try {
      const result = await updateBoard({
        variables: {
          boardId: String(router.query.boardId),
          password,
          updateBoardInput,
        },
      });
      setIsAllFilled(true);
      alert("게시물이 수정되었습니다.");
      router.push(`/boards/${result.data?.updateBoard._id}`);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return (
    <BoardWriteUI
      data={props.data}
      isModalOpen={isModalOpen}
      isEdit={props.isEdit}
      isAllFilled={isAllFilled}
      onChangeAddressDetail={onChangeAddressDetail}
      onChangeContents={onChangeContents}
      onChangeYoutubeUrl={onChangeYoutubeUrl}
      onChangeFile={onChangeFile}
      onChangePassword={onChangePassword}
      onChangeTitle={onChangeTitle}
      onChangeWriter={onChangeWriter}
      onClickSubmit={onClickSubmit}
      onClickEdit={onClickEdit}
      onClickAddressSearch={onClickAddressSearch}
      onCompleteAddressSearch={onCompleteAddressSearch}
      imgUrl={imgUrl}
      address={address}
      zipcode={zipcode}
      writerError={writerError}
      passwordError={passwordError}
      titleError={titleError}
      contentsError={contentsError}
    />
  );
}
