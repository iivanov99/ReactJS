import React from 'react';
import PostAuthor from '../PostAuthor/PostAuthor';
import image from '../../images/blue-origami-bird.png'
import './Post.css';

const Post = () => {
  return (
    <div className="Post">
      <img src={image} alt="Origami" />
      <p className="description">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam fugiat, fugit eum ad veniam distinctio. Totam aut corrupti, aliquid dolores dolorem qui voluptates autem quidem necessitatibus, veritatis, pariatur explicabo culpa! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum laboriosam odio facilis nam. Officiis rem, id voluptate sit odit voluptates quae pariatur soluta, vitae repudiandae inventore. Incidunt voluptates atque explicabo! Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit maxime architecto, repudiandae debitis id facere! Quisquam, magni omnis cupiditate maxime tenetur rem. Voluptate optio itaque nihil nobis. Corporis, expedita voluptatibus!
      </p>
      <PostAuthor />
    </div>
  );
};

export default Post;