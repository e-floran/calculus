export default function MathButton({
  buttonFunction,
  buttonParameter,
  activeButton,
}) {
  return (
    <button
      className={activeButton ? "mathButton activeMathButton" : "mathButton"}
      onClick={() => {
        buttonFunction(buttonParameter);
      }}
    >
      {buttonParameter}
    </button>
  );
}
