import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const useReduxService = (
  baseUrl,
  selector,
  dispatchFunc,
  text = "",
  hasCondition = false,
  options
) => {
  const dispatch = useDispatch();
  const selectorData = useSelector(selector);

  useEffect(() => {
    if (!hasCondition) {
      dispatch(dispatchFunc(baseUrl, options));
      return;
    }
    if (text.length >= 4) {
      dispatch(dispatchFunc(baseUrl, options));
    }
  }, [text]);

  return { selectorData };
};

export default useReduxService;
