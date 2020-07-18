import React from 'react';

function Release(props) {
    console.log(props.release);
    return props.release && (
        <div>
            <span>{props.release.title}</span>
        </div>
    );
}

export default Release;