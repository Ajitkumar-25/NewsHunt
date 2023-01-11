import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  // articles = [
  //   {
  //     source: {
  //       id: "news-com-au",
  //       name: "News.com.au",
  //     },
  //     author: null,
  //     title: "‘Devastating’: Cricket icon dead at 37",
  //     description:
  //       "<p>Zimbabwe cricket coach Sinikiwe Mpofu has died aged 37.</p>",
  //     url: "https://www.news.com.au/sport/cricket/zimbabwe-cricket-icon-sinikiwe-mpofu-dies-less-than-a-month-after-husband/news-story/5b00694d60af496f7c337c65bb07d1ce",
  //     urlToImage:
  //       "https://content.api.news/v3/images/bin/d806b7b794b03768d363da7aabe0208a",
  //     publishedAt: "2023-01-11T04:29:00Z",
  //     content:
  //       "Zimbabwe cricket coach Sinikiwe Mpofu has died aged 37.\r\nThe national women’s assistant coach’s passing comes less than a month after the death of her husband Shepherd Makunura.\r\nWatch the Pakistan W… [+1822 chars]",
  //   },
  //   {
  //     source: {
  //       id: "bbc-sport",
  //       name: "BBC Sport",
  //     },
  //     author: null,
  //     title: "Archer takes three wickets in impressive comeback",
  //     description:
  //       "Jofra Archer takes three wickets as the England bowler makes an impressive return to competitive cricket after 17 months out with injury.",
  //     url: "http://www.bbc.co.uk/sport/cricket/64227297",
  //     urlToImage:
  //       "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/BB3F/production/_128253974_spcs8573.jpg",
  //     publishedAt: "2023-01-10T18:07:28.6843289Z",
  //     content:
  //       "Archer's last match was a T20 for Sussex 541 days ago\r\nJofra Archer took three wickets as the England bowler made an impressive return to competitive cricket after 17 months out with injury.\r\nArcher … [+1754 chars]",
  //   },
  //   {
  //     source: {
  //       id: "espn-cric-info",
  //       name: "ESPN Cric Info",
  //     },
  //     author: null,
  //     title:
  //       "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
  //     description:
  //       "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
  //     url: "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
  //     urlToImage:
  //       "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
  //     publishedAt: "2020-04-27T11:41:47Z",
  //     content:
  //       "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]",
  //   },
  //   {
  //     source: {
  //       id: "espn-cric-info",
  //       name: "ESPN Cric Info",
  //     },
  //     author: null,
  //     title:
  //       "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
  //     description:
  //       "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
  //     url: "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
  //     urlToImage:
  //       "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
  //     publishedAt: "2020-03-30T15:26:05Z",
  //     content:
  //       "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]",
  //   },
  // ];

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=4b7f0afcb8d2442fb6f2a0a0639564d3&page=1";
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
    });
  }

  handlepreviouspage = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=4b7f0afcb8d2442fb6f2a0a0639564d3&page=${
      this.state.page - 1
    }&pagesize=20`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles, page: this.state.page - 1 });
  };

  handlenextpage = async () => {
    if (this.state.page + 1 > Math.ceil(this.state.totalResults/20)) {
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=4b7f0afcb8d2442fb6f2a0a0639564d3&page=${
        this.state.page + 1
      }&pagesize=20`;
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        articles: parsedData.articles,
        page: this.state.page + 1,
      });
    }
  };

  render() {
    return (
      <div className="container">
        <h1>NewsHunt Top Headlines</h1>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0.4) : ""}
                  description={
                    element.description ? element.description.slice(0, 70) : ""
                  }
                  ImgUrl={element.urlToImage}
                  NewsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container">
          <div className="container d-flex justify-content-between">
            <button
              disabled={this.state.page <= 1}
              type="button"
              className="btn btn-dark"
              onClick={this.handlepreviouspage}
            >
              {" "}
              &larr; Previous
            </button>
            <button
              type="button"
              className="btn btn-dark"
              onClick={this.handlenextpage}
            >
              Next &rarr;
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default News;
