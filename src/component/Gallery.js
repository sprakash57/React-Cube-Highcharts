import React, { Component } from "react";

class Gallery extends Component {
  render() {
    return (
      <div className="row">
        {this.props.books.map((book, index) => {
          let {
            title,
            pageCount,
            imageLinks: { thumbnail: cover }
          } = book.volumeInfo;
          return (
            <div key={index} className="card col-sm-6 col-md-3">
              <img
                src={cover !== undefined ? cover : ""}
                alt={"Avatar"}
                style={{ width: "80%" }}
              />
              <div className="contain">
                <h4>
                  <b>{title}</b>
                </h4>
                <p>{pageCount}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Gallery;
