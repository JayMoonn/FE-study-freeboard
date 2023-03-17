import NavigationUI from "./Navigation.presenter";
import { useRouter } from "next/router";
import { MouseEvent } from "react";

export default function Navigation() {
  const router = useRouter();
  const onClickMenu = (event: MouseEvent<HTMLDivElement>) => {
    router.push(`/${event.currentTarget.id}`);
  };

  return <NavigationUI onClickMenu={onClickMenu} />;
}
