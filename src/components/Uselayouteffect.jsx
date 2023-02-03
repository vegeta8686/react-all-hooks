import React, { useLayoutEffect, useRef } from 'react'

export const Uselayouteffect = () => {
    const popup = useRef();
    
    useLayoutEffect(() => {
        popup.current.style.marginTop = '10px';
    }, []);

    return (
        <div className="p-3">
            <button type="button" className="btn btn-danger">open popup</button>
            <div ref={popup}>
                <span>popup is opened</span>
            </div>
        </div>
    );
}
