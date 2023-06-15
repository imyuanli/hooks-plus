import {useMemo, useState} from "react";


const useBoolean = (defaultValue = false) => {
  const [state, setState] = useState<boolean>(defaultValue)
  const actions: any = useMemo(() => {
    return {
      toggle: () => setState((s: boolean) => (s ? false : true)),
      setTrue: () => setState(true),
      setFalse: () => setState(false),
    };
  }, []);

  return [state, actions]
}

export default useBoolean;
