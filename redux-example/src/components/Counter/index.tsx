import { useAppDispatch } from "../../store";
import { decreaseCounterAction } from "../../store/actions/decreaseCounter";
import { increaseCounterAction } from "../../store/actions/increaseCounter";
import useStoreSelector from "../../store/selectors/useStoreSelector";

export default function Counter() {
  const dispatch = useAppDispatch();
  const count = useStoreSelector((store) => store.counter.count);

  const handleIncrease = () => {
		dispatch(increaseCounterAction({ count: count + 1 }))
	};

  const handleDecrease = () => {
		dispatch(decreaseCounterAction({ count: count - 1 }))
	};

  return (
    <>
      <div style={{ marginBottom: 20 }}>{count}</div>
      <div style={{ display: "flex" }}>
        <button onClick={handleIncrease}>Increase</button>
        <button onClick={handleDecrease}>Decrease</button>
      </div>
    </>
  );
}
