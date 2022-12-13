import "./ElementWeather.css";

function ElementWeather(props) {
  const { id, value } = props;
  return (
    <article className="flex flex-wrap justify-center w-full">
      <h2 className="my-1 mx-2 font-medium">{id}: </h2>
      <h3 className="my-1">{value}</h3>
    </article>
  );
}

export default ElementWeather;
