import BannerUI from "./Banner.presenter";

export default function Banner() {
  const onChangeSlide = (currentSlide: number) => {
    console.log(currentSlide);
  };

  return <BannerUI onChangeSlide={onChangeSlide} />;
}
