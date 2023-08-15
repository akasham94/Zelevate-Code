import "./App.css";

const App = () => {
  return (
    <div className="outer-table">
      <div className="first-table">
        <div className="circle" />
        <div className="threeSquareContainer">
          <div className="square" />
          <div className="square" />
          <div className="square" />
        </div>
        <div className="circle" />
      </div>
      <div className="secondTableContainer">
        <div className="secondTableBoxes" />
        <div className="secondTableBoxes" />
        <div className="secondTableBoxes" />
        <div className="secondTableBoxes" />
      </div>
    </div>
  );
}
export default App