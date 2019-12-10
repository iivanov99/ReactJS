import React, { Fragment, useState } from 'react';
import * as yup from 'yup';

import apparelService from '../../../services/apparel-service';
import redirectWithNotification from '../../../utils/redirect-with-notification';
import handleErrors from '../../../utils/handle-errors';

import './EditForm.css';

const schema = yup.object().shape({
  name: yup.string()
    .required('Name is required!')
    .min(2, 'Name must be atleast 2 symbols!'),
  description: yup.string()
    .required('Description is required!')
    .min(10, 'Description must be atleast 10 symbols!')
    .max(200, 'Description must not exceed 200 symbols!'),
  imageUrl: yup.string()
    .required('Image Url is required!')
    .url('Image Url is not valid!'),
  category: yup.string()
    .notOneOf(['Choose category'], 'Please choose category!'),
  price: yup.number()
    .min(1, 'Price must be a positive number!')
    .required('Price is required!')
});

const EditForm = ({ formName, categoryOptions, history, apparel }) => {

  const [name, setName] = useState(apparel.name);
  const [description, setDescription] = useState(apparel.description);
  const [imageUrl, setImageUrl] = useState(apparel.imageUrl);
  const [size, setSize] = useState(apparel.size);
  const [category, setCategory] = useState(apparel.category);
  const [price, setPrice] = useState(apparel.price);

  const formSubmitHandler = async (ev) => {
    ev.preventDefault();

    try {
      await schema.validate({ name, description, imageUrl, category, price: +price }, { abortEarly: false });
      await apparelService.edit(formName, apparel._id, { name, description, imageUrl, size, category, price });
      redirectWithNotification(history, `/apparel/${formName.toLowerCase()}`, 'success', `${name} successfuly edited!`);
    } catch (err) {
      handleErrors(err);
    }
  }

  return (
    <Fragment>
      <div className="row row-dark-grey">
        <div className="col-md-12">
          <form onSubmit={formSubmitHandler} className="edit-form">
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
                  {categoryOptions.map((option, index) => <option key={index}>{option}</option>)}
                </select>
              </div>
              <div className="price-container">
                <label htmlFor="category">Price: </label>
                <input onChange={ev => setPrice(ev.target.value)} value={price} className="form-control"
                  type="number" placeholder="Price" />
              </div>
            </div>
            <button type="submit" className="btn form-btn edit-btn">Edit</button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default EditForm;