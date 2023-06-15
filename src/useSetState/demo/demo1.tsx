import React from 'react';
import {useSetState} from 'hooks-plus';


export default () => {
  const [state, setState] = useSetState({hello: ''});

  return (
    <div>
      <pre>{JSON.stringify(state, null, 2)}</pre>
      <p>
        <button type="button" onClick={() => setState({hello: 'world'})}>
          set hello
        </button>
        <button type="button" onClick={() => setState({foo: 'bar'})} style={{margin: '0 8px'}}>
          set foo
        </button>
      </p>
    </div>
  );
};
