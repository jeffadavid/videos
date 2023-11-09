import React from 'react';

class SearchBar extends React.Component{
    state = { term: '' };

    onInputChange = event => {
        this.setState({ term: event.target.value });
    };

    onFormSubmit = event => {
        event.preventDefault();

        //This is a call callback from the parent component passed as a prop
        this.props.onFormSubmit( this.state.term );
    };

    render(){
        return (
            <div className='search-bar ui segment'>
                <form onSubmit={ this.onFormSubmit } className='ui form'>
                    <div className='field'>
                        <label>Video Search</label>
                        <input 
                            name='video search'
                            type='text' 
                            value={ this.state.term } 
                            onChange={ this.onInputChange }
                        />
                    </div>
                </form>
            </div>
        );
     };
};

export default SearchBar;