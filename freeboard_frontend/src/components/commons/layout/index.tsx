import Header from "./header/Header.container";
import Banner from "./banner/Banner.container";
import styled from "@emotion/styled";
import Navigation from "./navigation/Navigation.container";

const Body = styled.div`
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

interface ILayoutProps {
  children: JSX.Element;
}
export default function Layout(props: ILayoutProps) {
  return (
    <>
      <Header />
      <Banner />
      <Navigation />
      <Body>{props.children}</Body>
    </>
  );
}
