import * as React from "react";
import { connect } from "react-redux";
import { Link, withRouter, RouteComponentProps } from "react-router-dom";
import { findVideoByTitle } from "../features/find-videos/routine";
import "../assets/styles/_Header.scss";
export interface IHeaderProps extends RouteComponentProps {
  findVideoByTitle(title: string): any;
}

class Header extends React.Component<IHeaderProps> {
  state = {
    title: ""
  };

  onChangeInput = (e: any) => {
    this.setState({ title: e.target.value });
  };

  onSubmitForm = (e: any) => {
    this.props.findVideoByTitle(this.state.title);
    this.props.history.push("/videos");
    e.preventDefault();
  };

  public render() {
    return (
      <React.Fragment>
        <header className="header">
          <div className="logo">
            <Link to="/">
              <img
                className="img"
                src="https://raw.githubusercontent.com/eliasvolkov/youtube-clone/master/src/components/Header/di-U4RRNM.png"
                alt="logo"
              />
            </Link>
          </div>
          <div className="search">
            <form className="form" onSubmit={this.onSubmitForm}>
              <div className="inputGroup">
                <input
                  type="text"
                  className="searchInput"
                  placeholder="Введите запрос"
                  onChange={this.onChangeInput}
                  value={this.state.title}
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

export default withRouter(
  connect(
    null,
    { findVideoByTitle }
  )(Header)
);
