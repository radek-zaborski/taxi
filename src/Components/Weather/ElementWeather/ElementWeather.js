import "./ElementWeather.css";

function ElementWeather(props) {
  console.log(props);
  return (
    <article className="flex flex-wrap justify-center w-full">
      <h2 className="my-1 mx-2 font-medium">{props.id}: </h2>
      <h3 className="my-1">{props.value}</h3>
    </article>
  );
}

export default ElementWeather;
