export const checkValidationFile = (file?: File) => {
  if (!file?.size) {
    alert("파일이 없습니다");
    return false;
  }
  if (file?.size > 5 * 1024 * 1024) {
    alert("파일 사이즈가 너무 큽니다 (5mb 제한)");
    return false;
  }
  if (file?.type.includes("jpeg") && file?.type.includes("png")) {
    alert("파일 확장자는 jpeg or png만 가능합니다");
    return false;
  }
  return true;
};
