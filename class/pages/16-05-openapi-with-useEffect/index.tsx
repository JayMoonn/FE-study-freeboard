import axios from "axios";
import { useEffect, useState } from "react";

export default function OpenApiWithUseEffectPage() {
  // 1. REST API
  // 그냥 받으면 무한 루프 빠지기 때문에 useEffect 사용해서 한 번만 렌더링되게 함
  const [dogUrl, setDogUrl] = useState("");

  useEffect(() => {
    const fetchDog = async () => {
      const result = await axios.get("https://dog.ceo/api/breeds/image/random");
      setDogUrl(result.data.message);
    };
    void fetchDog();
  }, []);

  return <img src={dogUrl} />;
}
