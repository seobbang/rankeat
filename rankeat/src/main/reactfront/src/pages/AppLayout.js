import '../css/AppLayout.css';
import React, {useState} from "react";
import { MdSettings } from "react-icons/md"
import {AiOutlineMenu, AiOutlineClose, AiOutlineSearch} from "react-icons/ai"
import { GrFormClose } from "react-icons/gr"

const AppLayout = ({loginState}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
