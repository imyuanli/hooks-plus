import React from 'react';
import {useSetState} from 'hooks-plus';


export default () => {
  const [state, setState] = useSetState({
    hello: 'world',
    count: 0,
  });

  return (
    <div>
      <pre>{JSON.stringify(state, null, 2)}</pre>
      <p>
        <button type="button" onClick={() => setState((prev: any) => ({count: prev.count + 1}))}>
          count + 1
        </button>
      </p>
    </div>
  );
};
