import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';
import './Header.scss';

class Header extends Component {
  handleLinkClick = () => {
    if (this.props.name) {
      this.props.signOut();
    } else {
      fetch('https://my-json-server.typicode.com/kevindongzg/demo/login')
        .then(response => response.json())
        .then(data => this.props.signIn(data));
      // this.props.signIn({
      //   name: 'Kevin',
      //   id: '273191',
      //   avatar: 'https://avatars2.githubusercontent.com/u/40817605',
      //   permissions: [
      //     'PROFILE',
      //     'NOTIFICATION'
      //   ]
      // });
    }
  };

  render() {
    const { name, avatar } = this.props;

    return (
      <header className="header">
        <div className="header-wrapper">
          <img src={avatar} alt="头像" />
          <span className="username">{name || '用户名'}</span>

          <a className="sign" onClick={this.handleLinkClick}>
            {name ? 'Sign out' : 'Sign in'}
          </a>
        </div>
      </header>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  name: user.name,
  avatar: user.avatar
});

const mapDispatchToProps = dispatch => ({
  signIn: user => dispatch(signIn(user)),
  signOut: () => dispatch(signOut())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
