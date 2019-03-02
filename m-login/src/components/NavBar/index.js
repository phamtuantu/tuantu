import React from 'react';
import './style/bootstrap.min.css';
import './style/navs.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faIdCard, faPhone, faBlenderPhone, faUserShield, faBookReader, faMailBulk, faSignInAlt, faUser, faSearch } from '@fortawesome/free-solid-svg-icons';
class NavBar extends React.Component {
    render() {
        return (
            <div className='container'>          
                <div className='row navs'>
                    <div className='col-5 left'>
                        <a class="nav-link" href="#">link never die</a>
                    </div>
                    <div className='col-7 right'>
                        <div className='row navs'>
                            <div className='col-2 tag'>
                                <a class="nav-link" href="#">trang chủ</a>
                            </div>
                            <div className='col-2 tag'>
                                <a class="nav-link" href="#">phần mềm </a>
                            </div>
                            <div className='col-2 tag'>

                                <a class="nav-link" href="#">games</a>
                            </div>
                            <div className='col-3 tag'>
                                <a class="nav-link" href="#">phim hd - bluray</a>
                            </div>
                            <div className='col-2 tag'>

                                <a class="nav-link" href="#">faqs</a>
                            </div>
                            <div className='col-1 tag'>
                                <a href='#' className='nav-link'><FontAwesomeIcon icon={faSearch} /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
export default NavBar;