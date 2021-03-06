import React from 'react'
import { Link } from 'react-router-dom'

const LoginForm = (props) => {
    return (
      <div className="column">
          <h2 className="ui primary image header">
            {/*<img src="assets/images/logo.png" className="image" />*/}
            <div className="content">
              Log-in to your account
            </div>
          </h2>
          <form className="ui medium form">
            <div className="ui stacked segment">
              <div className="field">
                <div className="ui left icon input">
                  <i className="user icon"></i>
                  <input onChange={props.handleLoginFormChange} type="text" name="email" placeholder="E-mail address" />
                </div>
              </div>
              <div className="field">
                <div className="ui left icon input">
                  <i className="lock icon"></i>
                  <input onChange={props.handleLoginFormChange} type="password" name="password" placeholder="Password" />
                </div>
              </div>
              <button onClick={(e) => props.handleLoginSubmit(e)} className="ui fluid large blue submit button">Login</button>
            </div>

            <div className="ui error message"></div>

          </form>

          <div className="ui message">
             <Link to='/signup'>Sign Up</Link>
          </div>
        </div>
    )
  }

export default LoginForm
