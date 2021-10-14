import { useSelector } from "react-redux";
import { Store } from "../types";

export default function useStoreSelector<TSelected>(
  selector: (state: Store) => TSelected
) {
  return useSelector(selector);
}
