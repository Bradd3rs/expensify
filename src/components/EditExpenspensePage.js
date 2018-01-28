import React from 'react';

const EditExpenspensePage = (props) => {
    return (
        <div>
            This is from the edit expense id: {props.match.params.id}
        </div>
    );
};

export default EditExpenspensePage;