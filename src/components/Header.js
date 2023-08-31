import styled from 'styled-components';
import React, { useState } from 'react';
import { FiSearch} from 'react-icons/fi';
import { AiOutlineBell } from 'react-icons/ai';

function Header(){

    const [iconSize, setIconSize] = useState(24);

    const handleIconHover = () => {
        setIconSize(28);
    };

    const handleIconLeave = () => {
        setIconSize(24);
    };

    return(
        <HeaderContainer>
            <div className="header-bar">
                {/* <a className="header-logo" href="">Quản lý tài sản</a> */}
                <div className="search-bar">
                    <input type="text" className="search-input" placeholder="Tên tài sản ..." />
                    <div className="search-btn">
                        <FiSearch className="search-icon" size={iconSize} onMouseEnter={handleIconHover} onMouseLeave={handleIconLeave}/>
                    </div>
                    
                </div>
                
                <div className="notify-bar">
                </div>
                <div className="user-container">
                    <div className="user-notify-container">
                        <AiOutlineBell size={24}/>
                        <div className="user-nortify-amount">
                            10
                        </div>
                    </div>
                    
                    <img className="user-current-avatar" src="https://toigingiuvedep.vn/wp-content/uploads/2023/03/hinh-anh-avatar-dep-chibi.jpg"/>
                    {/* <a className="header-current-user" href="">xuan duong</a> */}
                </div>
                
            </div>
        </HeaderContainer>
    );
}

export default Header;

const HeaderContainer = styled.div`
    width: 100%;
    background-color: var(--dark-blue);
    height: var(--header-height);
    color: white;
    box-sizing: border-box;
    padding: 20px; 
    box-shadow: 0 0px 10px var(--grey-blue);

    .header-bar{
        display: flex;
        text-align: center;
        align-items: center;
        width: 100%;
        height: 100%;
        justify-content: space-between;

        .header-logo{
            font-size: 28px;
            
        }

        .user-container{
            display: flex;
            align-items: center;
            width: 100px;
            justify-content: space-between;

            .user-notify-container{
                position: relative;

                .user-nortify-amount{
                    position: absolute;
                    z-index: 10;
                    top: -30%;
                    right: -30%;
                    background: red;
                    border-radius: 50%;
                    height: 20px;
                    width: 20px;
                    text-align: center;
                    align-items: center;
                    display: flex;
                }
            }

            .header-current-user{
                font-size: 14px;
            }
            .user-current-avatar{
                height: 40px;
                width: 40px;
                border-radius: 20px;
            }

        }

        

        a{
            color: white;
            text-decoration: none;
            transition: 0.2s;
        }

        a:hover{
            color: var(--main-orange);
        }

        .search-bar{
            border: solid 1px var(--grey-blue);
            border-radius: 20px;
            padding: 0 12px;
            width: 400px;
            height: 40px;
            display: flex;
            align-items: center;

            .search-btn{
                height: 32px;
                width: 32px;
                display: flex;
                justify-content: center;
                align-items: center;

                .search-icon{
                    cursor: pointer;
                    transition: 0.2s;
                }

            }

            
        }

        input{
            outline: none;
            border: none;
            
            width: 100px;
            padding: 4px 16px 4px 0;
            background-color: transparent;
            color: white;
            width: 100%;
        }

        input::placeholder{
            color: white;

        }
    }


`