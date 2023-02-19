import "./menu.scss";
import { FaProjectDiagram } from 'react-icons/fa';
import { BsChevronLeft } from 'react-icons/bs';
import { CgProfile, CgWorkAlt} from 'react-icons/cg';
import { GiSkills } from 'react-icons/gi';
import { MdOutlineHistoryEdu } from 'react-icons/md';
import { HiOutlineMail } from 'react-icons/hi';
import { useEffect } from "react";
export const Menu = () => {


    function drawer(){
        const m = document.querySelector('.menu-container');
        const arrow = document.querySelector('.menu-arrow');
        if(m.classList.contains('menu-open')){
            m.classList.remove('menu-open');
            arrow.classList.remove('closed')

        }
        else{
            m.classList.add('menu-open');
            arrow.classList.add('closed')
        }
    
    }


    return (
        <div className="menu-container"> 

            <div className="profile-container">
             
                 <div className="profile">
                    <BsChevronLeft className="menu-arrow" onClick={drawer}/>
                    <h1 className="user-name-full">Reza Hossaini</h1>
                    <h1 className="user-name-short">RH</h1>
                 </div> 
                 
                <div className="line"></div>
            </div>

            <div className="menu-list-container">
                <ul className="menu-list">
                    <li className="selected"> <p className="menu-item-name"> About Me </p>  <CgProfile className="menu-icon profile"/></li>
                    <li> <p className="menu-item-name">Projects  </p> <FaProjectDiagram className="menu-icon "/> </li>
                    <li> <p className="menu-item-name">Educations </p>  <MdOutlineHistoryEdu className="menu-icon "/> </li>
                    <li> <p className="menu-item-name">Works </p>  <CgWorkAlt className="menu-icon "/> </li>
                    <li className=""> <p className="menu-item-name">Skills </p>  <GiSkills className="menu-icon "/> </li>
                </ul>
                <div className="line"></div>
            </div>

            <div className="menu-bottom-container">
                <div className="contact-btn"> <p className="menu-item-name">Contact </p>  <HiOutlineMail className="menu-icon "/> </div>
            </div>
        </div>
    )
};
