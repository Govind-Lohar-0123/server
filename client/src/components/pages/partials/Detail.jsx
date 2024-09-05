import DemoAll from "../Home/DemoAll";
import { Box, Link } from "@mui/material";
import Background from "../Home/Background";
import Slide from "../Home/Slide";
import { useGetProductsQuery } from "../../react_redux/app/services/productApiSlice";
import { styled } from "@mui/material";
import MidSlide from "../Home/MidSlide";
import MidSection from "../Home/MidSection";
import { useEffect } from "react";
import { getProducts } from "../../react_redux/redux/actions/productAction";
import { useDispatch, useSelector } from "react-redux";
import Slide2 from "../Home/Slides/Slide2";
import { Link as routerLink } from "react-router-dom"
import Slide3 from "../Home/Slides/Slide3";
import Navbar from "./Navbar1";
import FilterProduct from "../FilterProduct/FilterProduct";



export default function Detail() {
   

    return (
        <>

            <Navbar/>
            <FilterProduct/>
             


        </>
    )


}





