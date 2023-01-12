import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, ImgUrl, NewsUrl, author, date, source } =
      this.props;
    return (
      <div className="my-3">
        <div className="card">
          <span
            className="position-absolute top-0  translate-middle badge rounded-pill bg-danger"
            style={{ left: "90%", zIndex: "1" }}
          >
            {source}
          </span>
          <img
            src={
              !ImgUrl
                ? "https://images.hindustantimes.com/img/2023/01/11/1600x900/joshimath_malari_inn_owner_latest_1673415541166_1673415541536_1673415541536.jpg"
                : ImgUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>

            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-muted">
                {" "}
                <strong>
                  By {!author ? "unknown" : author} on{" "}
                  {new Date(date).toGMTString()}
                </strong>
              </small>
            </p>
            <a href={NewsUrl} className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
