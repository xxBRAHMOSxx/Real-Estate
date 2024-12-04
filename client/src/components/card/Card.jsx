import { Link, useLoaderData } from "react-router-dom";
import "./card.scss";
import { useState } from "react";

function Card({ item }) {
  const post = useLoaderData()
  const {postResponse,chatResponse} = post
  const [saved, setSaved] = useState(post.isSaved)
  
    const handleSave = async () => {
      console.log(import.meta.env.VITE_REACT_APP_MAP_URI);
      
      // setSaved((prev) => !prev)
      
      // if (!currentUser) {
      //   navigate("/login")
      // }
  
      // try {
      //   await apiRequest.post("/users/save", { postId: post.id })
  
      // } catch (err) {
      //   console.log(err);
      //   setSaved((prev) => !prev)
      //   setError(err.response.data.message)
      // }
  
    }
  return (
    <div className="card">
      <Link to={`/${item.id}`} className="imageContainer">
        <img src={item.images[0]} alt="" />
      </Link>
      <div className="textContainer">
        <h2 className="title">
          <Link to={`/${item.id}`}>{item.title}</Link>
        </h2>
        <p className="address">
          <img src="/pin.png" alt="" />
          <span>{item.address}</span>
        </p>
        <p className="price">$ {item.price}</p>
        <div className="bottom">
          <div className="features">
            <div className="feature">
              <img src="/bed.png" alt="" />
              <span>{item.bedroom} bedroom</span>
            </div>
            <div className="feature">
              <img src="/bath.png" alt="" />
              <span>{item.bathroom} bathroom</span>
            </div>
          </div>
          <div className="icons">
            <div className="icon">
            {/* {put here any thing to add to card} */}
            <button onClick={handleSave} className="save">button</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
