import {isFunction} from "hooks-plus/utils";
import {useState} from 'react';

const useSetState = (initialState: any) => {
  const [state, setState] = useState(initialState);
  const setMergedState = (props: any) => {
    setState((preState: any) => {
      const newState = isFunction(props) ? props(preState) : props;
      return {...preState, ...newState}
    })
  }
  return [state, setMergedState];
}

export default useSetState;
