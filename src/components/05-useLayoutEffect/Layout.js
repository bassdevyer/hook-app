import React, { useState, useLayoutEffect, useRef } from 'react';
import './layout.css'
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';

const Layout = () => {

  const { counter, increment } = useCounter(1)

  const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)

  const { quote } = !!data && data[0]

  const [boxSize, setBoxSize] = useState({});

  useLayoutEffect(() => {
    setBoxSize(pTag.current.getBoundingClientRect())
  }, [quote])

  const pTag = useRef();

  return (
    <div>
      <h1>LayoutEffect</h1>
      <hr/>
      <blockquote className="blockquote text-end">
        <p
          ref={pTag}
        >
          {quote}
        </p>
      </blockquote>
      <pre>
        {JSON.stringify(boxSize, null, 3)}
      </pre>
      <button type="button" className="btn btn-primary" onClick={increment}>
        Siguiente Quote
      </button>
    </div>
  );
};

export default Layout;
