export default function Square({children, change}) {

  return (
    <div className="day-button">
      <button onClick={change}>{children}</button>
    </div>
  );
};