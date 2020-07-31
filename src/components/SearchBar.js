import React, { useState } from "react";

const SearchBar = ({onFormSubmit}) => {
	const [searchText, setSearchText] = useState("");

	const onSubmit = (event) => {
		event.preventDefault();
		onFormSubmit(searchText);
	};

	return (
		<div className="search-bar ui segment">
			<form onSubmit={onSubmit} action="" className="ui form">
				<div className="field">
					<label htmlFor="">Search for a video</label>
					<input type="text" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
				</div>
			</form>
		</div>
	);
};

export default SearchBar;
