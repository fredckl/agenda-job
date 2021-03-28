import { useEffect }  from 'react';
import { propEq } from 'rambda';

/**
 * change class of body
 * @param {string} classBody
 * @param {string} prefix
 */
const useHtmlClassBody = (classBody, prefix = 'body') => {
  useEffect(() => {
    if (propEq('browser', true, process)) {
      window.document.body.classList.add(`${prefix}-${classBody}`);
    }
  }, [classBody, prefix]);
};

export default useHtmlClassBody;