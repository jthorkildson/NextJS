import React, { useState, useEffect } from "react";
import "./Products.css"

const Products = (props) => {
	const url = "https://fakestoreapi.com/products/"
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		fetch(url)
		   .then((response) => response.json())
		   .then((data) => {
			  console.log(data);
			  setPosts(data);
		   })
		   .catch((err) => {
			  console.log(err.message);
		   });
	 }, []);
	 console.log(props.searchValue)
	 const filteredProducts = posts.filter((post) => {
		return post.title.includes(props.search)
	 })

	return (
		<div id="product-grid">
			{filteredProducts.map((post) => {
         		return (
            		<div className="product" key={post.id}>
						<img src={post.image} alt=""></img>
						<p className="post-title">{post.title}</p>
						<p>${post.price}</p>
					</div>
         );
      })}
		</div>
	)
}

export default Products
