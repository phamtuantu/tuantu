import React from 'react';
import './style/bootstrap.min.css';
import './style/headers.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faIdCard, faPhone, faBlenderPhone, faUserShield, faBookReader, faMailBulk, faSignInAlt, faUser } from '@fortawesome/free-solid-svg-icons';
class Headers extends React.Component {
  render() {
    return (
      <div className='full-background'>
        <div className='container'>
          <div className='row'>
            <div className='col-8'>
              <div className='row'>
                <div className='col-3 lefthead'>
                  <ul>
                    <li>
                      <FontAwesomeIcon icon={faBlenderPhone} />
                      <span> Call: </span>
                      <a href="#">
                        <span>0169.844.9393</span>
                      </a>

                    </li>
                  </ul>
                </div>
                <div className='col-4 lefthead'>
                  <ul>
                    <li>
                      <FontAwesomeIcon icon={faMailBulk} />
                      <span> email: </span>
                      <a href='#'>
                        <span>tuan.tulolicon@gmail.com</span>
                      </a>
                    </li>
                  </ul>

                </div>

                <div className='col-2 lefthead'>
                  <ul>
                    <li>
                      <FontAwesomeIcon icon={faBookReader} />
                      <a href="#">
                        <span> Regulations</span>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className='col-3 lefthead'>
                  <ul>
                    <li>
                      <FontAwesomeIcon icon={faUserShield} />
                      <a href="#">
                        <span> Privacy Policy</span>
                      </a>
                    </li>
                  </ul>
                </div>

              </div>
            </div>



            <div className='col-4'>
              <div className='row'>
                <div className='col-12'>
                  <div className='righthead'>
                    <ul>
                      <li>
                        <FontAwesomeIcon icon={faUser} />
                        <a href="#">
                          <span> Đăng Nhập</span>
                        </a>
                      </li>
                    </ul>
                  </div>

                </div>
              </div>

            </div>

          </div>
        </div>
      </div>

    )
  }
}
export default Headers;