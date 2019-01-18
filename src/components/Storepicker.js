import React from 'react';
import propTypes from 'prop-types';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {

    static propTypes = {
        history: propTypes.object
    }

    myInput = React.createRef();

    goToStore = event => {
        // steps for stoping refresh
        event.preventDefault();

        //get the input
        var storeName = this.myInput.current.value;
    
        //go to route by user
        this.props.history.push(`/store/${storeName}`);
    };


    render() { 
        return (
            <form className="store-selector" onSubmit={this.goToStore}>
                <h2>Please Enter A Store</h2>
                <input type="text" ref={this.myInput} 
                required placeholder="Store Name" 
                defaultValue={getFunName()} />
                <button type="submit">Vist Store</button>
            </form>
        );
    }
}

export default StorePicker;