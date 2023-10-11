import { useState, type Dispatch, type SetStateAction } from "react";

export default function useAllTruthy(
	initialState: boolean[]
): [boolean, Dispatch<SetStateAction<boolean[]>>] {
	const [state, setState] = useState(initialState);
	const allTruthy = state.length === 0 ? false : state.every((value) => value === true);

	return [allTruthy, setState];
}
