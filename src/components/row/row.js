import React from 'react';

const Row = (props) => {
    return (
        <div className="row mb2">
            <div className="col-md-6">
                { props.left }
            </div>
            <div className="col-md-6">
                { props.rigth }
            </div>
        </div>
    )
};

export default Row;
