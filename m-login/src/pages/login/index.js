import React from 'react';
import './style/login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLockOpen } from '@fortawesome/free-solid-svg-icons';

class Login extends React.Component {
  render() {
    return (
      <div>

     <div className='page-title'>
       <div className='container'>
          <h1>Đăng nhập - Đăng ký</h1>
          <span>Bạn có thể đăng nhập và đăng ký tại đây</span>
      </div>
     </div>
      
<div className='container'>
      <table>
      <div className='acctitle'>
      <FontAwesomeIcon icon={faLockOpen} />
      <span> Đăng nhập vào tài khoản của bạn</span>
      </div>
        <div class="form-group">
          <label for="exampleFormEmail">Email address</label>
          <input type="email" className="form-control" id="exampleFormEmail" placeholder="email@example.com" />
        </div>
        <div class="form-group">
          <label for="exampleFormPassword">Password</label>
          <input type="password" className="form-control" id="exampleFormPassword" placeholder="Password" />
        </div>
        <div class="form-group">
          <div class="form-check">
            <input type="checkbox" className="form-check-input" id="Check" />
            <label class="form-check-label" for="Check">
              Remember me
      </label>
          </div>
        </div>
        <div className='button'>
          <div className='button-click'>
          <button type="submit" className="btn">Đăng nhập</button>
        </div>
        <div className='button-signup'>
          <a href='#' className="btn-link">Đăng ký</a>
        </div>
        </div>
        

      </table>

</div>
      </div>
    )
  }
}
export default Login;