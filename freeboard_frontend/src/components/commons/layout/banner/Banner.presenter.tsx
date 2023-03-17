import * as S from "./Banner.styles";
import { Carousel } from "antd";
import { IBannerUIProps } from "./Banner.types";

export default function BannerUI(props: IBannerUIProps) {
  return (
    <Carousel afterChange={props.onChangeSlide}>
      <div>
        <S.Content src="https://images.unsplash.com/photo-1678135487929-0153e7eaf6e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2338&q=80" />
      </div>
      <div>
        <S.Content src="https://images.unsplash.com/photo-1677166869710-3a030637ecb3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2458&q=80" />
      </div>
      <div>
        <S.Content src="https://images.unsplash.com/photo-1676716918296-047300e0f59a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2338&q=80" />
      </div>
      <div>
        <S.Content src="https://images.unsplash.com/photo-1676716921321-034205b9295c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2338&q=80" />
      </div>
    </Carousel>
  );
}
