import ChildComponent from "./ChildComponent";

type TProps = {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  handleIncreaseBtn: () => void;
};
const Couter = ({ count, setCount, handleIncreaseBtn }: TProps) => {
  return (
    <div className="border border-red-500 p-10 m-10">
      <button className="btn btn-accent" onClick={handleIncreaseBtn}>
        Increase
      </button>
      <ChildComponent count={count}></ChildComponent>
    </div>
  );
};

export default Couter;
