import { useQuery } from "react-query";

//delayミリ秒だけ処理を休止するsleep関数
const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

const fetchWeather = async () => {
  //ダミーの遅延
  await sleep(2000);
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=Tokyo&lang=ja&appid=54f677953b12d3435edfd38259a99356`
  );
  if (res.ok) {
    return res.json();
  }
  throw new Error(res.statusText);
};

export default function QuerySuspense() {
  const { data } = useQuery("weather", fetchWeather);

  return (
    <figure>
      <img
        src={`https://openweathermap.org/img/wn/${data?.weather?.[0]?.icon}.png`}
        alt={data?.weather?.[0]?.main}
      />
      <figcaption>{data?.weather?.[0]?.description}</figcaption>
    </figure>
  );
}
