import React, { useState } from 'react';
import styled from 'styled-components';
import { LiaUserTieSolid } from 'react-icons/lia';
import { HiOutlineUserGroup } from 'react-icons/hi2';
import { PiComputerTowerThin, PiGitPullRequest } from 'react-icons/pi';
import { FaChevronDown } from 'react-icons/fa';


function Menu(){


    const [openSmallList, setOpenSmallList] = useState(false);
    const [downIconOpened, setDownIconOpened] =useState("down-icon");
    const clickOpenMenu =()=>{
        if(openSmallList==false){
            setOpenSmallList(true);
            setDownIconOpened("down-icon down-icon-opened")
        }
        else{
            setOpenSmallList(false);
            setDownIconOpened("down-icon")
        }
        
    }

    return(
        <MenuContainer>
            <div className="menu-container">
                <div className="logo-container">
                    <a className="logo-title" href="">Quản lý tài sản</a>
                </div>
                <ul className="menu-list">    
                    <li className="menu-item"> 
                        <a className="title-item" onClick={clickOpenMenu}> <PiComputerTowerThin size={24}/> Tài sản <FaChevronDown className={downIconOpened}/></a> 
                        
                        {openSmallList && (
                            <ul className="small-list">
                                <li><a className="title-item" href="">Màn hình</a> </li>
                                <li><a className="title-item" href="">Chuột</a> </li>
                                <li><a className="title-item" href="">Bành phím</a> </li>
                                <li><a className="title-item" href="">Case máy tính</a> </li>
                                <li><a className="title-item" href="">Laptop</a> </li>
                                <li><a className="title-item" href="">Ghế</a> </li>
                            </ul>
                        )}
                        
                    
                    </li>
                    <li  className="menu-item"> <a className="title-item" href="">
                        <LiaUserTieSolid size={24}/> Nhân viên 
                        </a> </li>
                    <li className="menu-item"> <a className="title-item" href=""> <PiGitPullRequest size={24}/> Sử dụng tài sản</a> </li>
                    <li className="menu-item"> <a className="title-item" href=""> <HiOutlineUserGroup size={24}/>Phòng ban</a> </li>
                </ul>
            </div>
        </MenuContainer>
        
    );
}

export default Menu;

const MenuContainer = styled.div`
    max-height: max-content;
    min-height: 100vh;
    width: var(--menu-width);
    background-color: var(--grey-blue);
    box-sizing: border-box;
    font-size: 14px;

    .logo-container{
        height: var(--header-height);
        text-align: center;
        align-items: center;
        display: flex;
        padding: 0 24px;
        

        .logo-title{
            width: 100%;
            font-size: 26px;
            font-weight: 800;
        }
    }

    

    a{
        text-decoration: none;
        color: white;
    }

    .menu-list{


        .menu-item{
            text-align: left;
            transition: 0.2s;
            box-sizing: border-box;

            .title-item{
                position: relative;
                transition: 0.2s;
                padding: 12px 24px;
                display: flex;
                align-items: center;
                cursor: pointer;

                .down-icon{
                    position: absolute;
                    right: 24px;
                    transition: 0.2s;
                }
                .down-icon.down-icon-opened{
                    transform: rotateX(180deg);
                }

                :first-child {
                    margin-right: 12px;
                }
            }
        }

        .small-list .title-item{
            padding: 12px 0 12px 60px;
            
        }



        .title-item:hover{
            background-color: var(--dark-blue);
            color: var(--main-orange);
        } 
    }

    
`