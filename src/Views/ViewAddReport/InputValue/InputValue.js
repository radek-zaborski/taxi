import "./InputValue.css";

export const InputValue = ({ id, type, name, useHandle }) => (
  <form>
    <label>{name}</label>
    <input
      className="border-solid border-2 border-gray-700 mx-2"
      type={type}
      id={id}
      name={id}
      onChange={useHandle}
    />
  </form>
);
