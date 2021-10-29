import React, { Component } from "react";

class Likes extends Component {
  estadoLikes = {
    likes: 0,
  };

  Incrementar = () => {
    this.setState({ likes: this.estadoLikes.likes + 1 });
  };

  Decrementar = () => {
    this.setState({ likes: this.estadoLikes.likes - 1 });
  };

  render() {
    return (
      <div>
        <p>Likes: {this.estadoLikes.likes}</p>
        <button id="incrementar" onClick={this.Incrementar}>
          Like
        </button>
        <button id="decrementar" onClick={this.Decrementar}>
          {" "}
          Dislike
        </button>
      </div>
    );
  }
}

export default Likes;