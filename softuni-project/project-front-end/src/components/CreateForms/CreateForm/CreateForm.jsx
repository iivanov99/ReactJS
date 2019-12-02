import React, { Fragment, useState } from 'react';
import './CreateForm.css';

const CreateForm = ({ formName, categoryOptions }) => {

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [size, setSize] = useState('XS');
  const [category, setCategory] = useState('Choose category');
  const [price, setPrice] = useState('');

  console.log({ name, description, imageUrl, size, category, price });

  return (
    <Fragment>
      <div className="row row-dark-grey">
        <div className="col-md-12">
          <form className="create-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input onChange={ev => setName(ev.target.value)} value={name} className="form-control"
                type="text" id="name" placeholder="Name" />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea onChange={ev => setDescription(ev.target.value)} value={description} className="form-control"
                placeholder="Description"></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="imageUrl">Image Url</label>
              <input onChange={ev => setImageUrl(ev.target.value)} value={imageUrl} className="form-control"
                type="text" id="imageUrl" placeholder="ImageUrl" />
            </div>
            <div className="form-group flex-container">
              <div>
                <label htmlFor="size">Size: </label>
                <select onChange={ev => setSize(ev.target.value)} value={size} className="form-control size-select">
                  <option>XS</option>
                  <option>S</option>
                  <option>M</option>
                  <option>L</option>
                  <option>XL</option>
                  {formName === 'Accessories' ? (<option>No Size</option>) : null}
                </select>
              </div>
              <div>
                <label htmlFor="category">Category: </label>
                <select onChange={ev => setCategory(ev.target.value)} value={category} className="form-control select-control" >
                  <option disabled>Choose category</option>
                  {categoryOptions.map(option => <option>{option}</option>)}
                </select>
              </div>
              <div className="price-container">
                <label htmlFor="category">Price: </label>
                <input onChange={ev => setPrice(ev.target.value)} value={price} className="form-control"
                  type="number" placeholder="Price" min="1" />
              </div>
            </div>
            <button type="submit" className="btn form-btn create-btn">Create</button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default CreateForm;