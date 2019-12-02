import React, { Fragment } from 'react';
import CreateFormHeading from './CreateFormHeading/CreateFormHeading';

const CreateAccessories = () => {
  return (
    <Fragment>
      <CreateFormHeading formName="Accessories" />
      <div className="row row-dark-grey">
        <div className="col-md-12">
          <form className="create-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" className="form-control" id="name" placeholder="Name" />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea className="form-control" placeholder="Description"></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="imageUrl">Image Url</label>
              <input type="text" className="form-control" id="imageUrl" placeholder="ImageUrl" />
            </div>
            <div className="form-group flex-container">
              <div>
                <label htmlFor="size">Size: </label>
                <select className="form-control size-select">
                  <option>XS</option>
                  <option>S</option>
                  <option>M</option>
                  <option>L</option>
                  <option>XL</option>
                  <option>No Size</option>
                </select>
              </div>
              <div>
                <label htmlFor="category">Category: </label>
                <select defaultValue="Choose category" className="form-control select-control">
                  <option disabled>Choose category</option>
                  <option>Hat</option>
                  <option>Workout Belt</option>
                  <option>Resistence Band</option>
                  <option>Wristbands</option>
                  <option>Gloves</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="price-container">
                <label htmlFor="category">Price: </label>
                <input className="form-control" type="number" placeholder="Price" min="1" />
              </div>
            </div>
            <button type="submit" className="btn btn-primary form-btn create-btn">Create</button>
          </form>
        </div>
      </div>
    </Fragment>
  )
};

export default CreateAccessories;