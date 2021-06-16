import React, { useState, useEffect } from 'react';
const UkbButton = (props) => {
    const [isLoading, setLoading] = useState(false);
    let classNames = props.className ? `${props.className}` : `btn btn-primary`;
    useEffect(() => {
        if (isLoading) {
            props.onClick('hellow');
        }
      }, [isLoading]);
    const handleClick = (event) => {
        setLoading(true);
    }
    return (
        <button className={classNames} onClick={!isLoading ? handleClick : null} disabled={props.disabled}>{isLoading ? 'Loading…' : props.children}</button>
    );
}

export default UkbButton;