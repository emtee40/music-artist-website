import {useLayoutEffect} from 'react';

const ScrollToTop = function () {
    useLayoutEffect(() => window.scrollTo(0, 0), []);
    return null; // render nothing
}

export default ScrollToTop;
