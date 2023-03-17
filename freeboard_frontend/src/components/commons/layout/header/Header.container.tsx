import HeaderUI from "./Header.presenter";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();

  const onClickLogo = () => {
    router.push("/");
  };

  const onClickLogin = () => {
    router.push("/login");
  };

  const onClickJoin = () => {
    router.push("/join");
  };

  return (
    <HeaderUI
      onClickLogo={onClickLogo}
      onClickLogin={onClickLogin}
      onClickJoin={onClickJoin}
    />
  );
}
