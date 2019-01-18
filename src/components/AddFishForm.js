import React from 'react';
import propTypes from 'prop-types'

class AddFishForm extends React.Component {

    static propTypes = {
        addFish: propTypes.func
    }

    nameRef = React.createRef();  
    priceRef = React.createRef();
    statusRef = React.createRef();
    descRef = React.createRef();
    imageRef = React.createRef();

    createFish = event => {
        // Prevent from refresh
        event.preventDefault();

        const fish = {
            name: this.nameRef.current.value,
            price: parseFloat(this.priceRef.current.value),
            status: this.statusRef.current.value,
            desc: this.descRef.current.value,
            image: this.imageRef.current.value,
        };
        console.log(this);
        
        this.props.addFish(fish);
        // console.log(fish);
    
        //reset the form
        event.currentTarget.reset();
    };

    render() {
        return ( 
            
            <form className="fish-edit" onSubmit={this.createFish}>
                <input type="text" ref={this.nameRef} name="name" placeholder="Name"/>
                <input type="text" ref={this.priceRef} name="price" placeholder="Price"/>
                <select name="status" ref={this.statusRef}>
                    <option value="available"> Fresh! </option>
                    <option value="unavialable">Sold Out!</option>
                </select>
                <textarea name="desc" ref={this.descRef} placeholder="Description"></textarea>
                <input type="text" ref={this.imageRef} name="image" placeholder="Image"/>
                <button type="submit">+ Add Fish</button>
            </form>

        );
    }
}

export default AddFishForm;