import React from 'react';
import './SearchBar.css';

const sortByOptions = {
	bestMatch : 'best_match',
	highestRated : 'rating',
	mostReviewed : 'review_count',
}

class SearchBar extends React.Component{

	renderSortByOptions(){
		return Object.keys(sortByOptions).map(sortByOption => {
			let sortByOptionValue = sortByOptions[sortByOption];
			return <li key={sortByOptionValue}> {sortByOption} </li>;
		});
	}

	render(){
		return(
			<div className="SearchBar">
			  <div className="SearchBar-sort-options">
			    <ul>
			      <li>{this.renderSortByOptions()}</li>
			    </ul>
			  </div>
			  <div className="SearchBar-fields">
			    <input placeholder="Search Businesses" />
			    <input placeholder="Where?" />
			  </div>
			  <div className="SearchBar-submit">
			    <a>Let's Go</a>
			  </div>
			</div>
		);
	};
}

export default SearchBar;