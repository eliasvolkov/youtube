import * as React from "react";
import "../assets/styles/_Header.scss";
export interface IHeaderProps {}

export default class Header extends React.Component<IHeaderProps> {
  public render() {
    return (
      <React.Fragment>
        <header className="header">
          <div className="logo">
            <img
              className="img"
              src="https://raw.githubusercontent.com/eliasvolkov/youtube-clone/master/src/components/Header/di-U4RRNM.png"
              alt="logo"
            />
          </div>
          <div className="search">
            <form className="form">
              <div className="inputGroup">
                <input
                  type="text"
                  className="searchInput"
                  placeholder="Введите запрос"
                  //   onChange={this.onChangeInput}
                  //   value={this.state.title}
                />
                <button className="searchBtn">
                  <i className="fa fa-search" />
                </button>
              </div>
            </form>
          </div>
          <div className="icons">
            <i className="fa fa-video-camera" />
            <i className="fa fa-th" aria-hidden="true" />
            <i className="fa fa-comment" aria-hidden="true" />
            <i className="fa fa-bell" aria-hidden="true" />
          </div>
        </header>
      </React.Fragment>
    );
  }
}
