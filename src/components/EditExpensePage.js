import React from 'react';

const EditExpensePage = (props) => {
	console.log(props);
	return (
		<div>
			<p>Edit expense page with the id of {props.match.params.id}</p>
		</div>
	);
};

export default EditExpensePage;