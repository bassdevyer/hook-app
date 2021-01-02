import { useState, useEffect, useRef } from 'react'

export const useFetch = (url) => {

  const isMounted = useRef(true);
  const initState = { data: null, loading: true, error: null };

  const [state, setState] = useState(initState);

  useEffect(() => {
    return () => {
      isMounted.current = false;
    }
  }, [])

  useEffect(() => {
    setState(initState)
    fetch(url)
    .then((resp) => resp.json())
    .then((data) => {
      if (isMounted.current) {
        setState({
          loading: false,
          error: null,
          data
        })
      }

    })
  }, [url]);

  return state;
}
