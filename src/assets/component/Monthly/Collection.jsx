import Square from "./Square";

export default function Collection({more}) {
  const date = new Date();

  return (
    <div>
      <h3 id="title">{date.getMonth()}, {date.getFullYear()}</h3>
      <div  id="weekdate">
        
      </div>
      <div id="collection">
        <Square change={more}>1</Square>
        <Square change={more}>1</Square>
        <Square change={more}>1</Square>
        <Square change={more}>1</Square>
        <Square change={more}>1</Square>
        <Square change={more}>1</Square>
        <Square change={more}>1</Square>
        <Square change={more}>1</Square>
        <Square change={more}>1</Square>
        <Square change={more}>1</Square>
        <Square change={more}>1</Square>
        <Square change={more}>1</Square>
        <Square change={more}>1</Square>
        <Square change={more}>1</Square>
        <Square change={more}>1</Square>
        <Square change={more}>1</Square>
        <Square change={more}>1</Square>
        <Square change={more}>1</Square>
        <Square change={more}>1</Square>
        <Square change={more}>1</Square>
        <Square change={more}>1</Square>
        <Square change={more}>1</Square>
        <Square change={more}>1</Square>
        <Square change={more}>1</Square>
        <Square change={more}>1</Square>
        <Square change={more}>1</Square>
        <Square change={more}>1</Square>
        <Square change={more}>1</Square>
      </div>      
    </div>

  );
};

