const Greeter = ({ name, age, excitement = 1 }) => {
  const greet = () => {
    alert(`Hello ${name}`);
  };

  return (
    <div>
      <h1>
        Hi there, {name} is {age} years old{'!'.repeat(excitement)}
      </h1>
      <button onClick={greet}>Click Me </button>
    </div>
  );
};

Greeter.defaultProps = {
  name: 'Nick',
};

export default Greeter;
