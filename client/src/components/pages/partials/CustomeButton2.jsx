import React, { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Box, Button, Typography, IconButton, List, ListItem, Link } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import { Link as routerLink } from "react-router-dom"
import Login_Register from '../MyProfile/auth/Login_Register';
import { getUser, removeUser } from '../MyProfile/auth/userAction';
import { getToken, removeToken } from '../MyProfile/auth/tokenAction';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { getAllCarts } from '../../react_redux/redux/actions/cartAction';

const UserList = styled(Box)(({ them }) => ({
    position: "absolute",
    borderRadius: "1px",
    top: 56, left: -50,
    // width: "200px",
    boxShadow: "0px 0px 0px #e4e7e4",
    zIndex: 10,
    "svg": {
        marginRight: "10px"
    },
    "li": {
        fontSize: "13px", paddingBlock: "14px",
        borderBottom: "solid 1px #f7f3f3"
    },
    "img": {
        width: "17px !important", height: "17px !important"
    },
    "span": { color: "black" }

}))


const StyledLogin = styled(Button)(({ theme }) => ({
    backgroundColor: "white",
    color: "#2874f0",
    textTransform: "capitalize",
    fontWeight: "bold",
    fontSize: "1rem",
    height: "35px",
    paddingInline: "35px",

    borderRadius: 0,
    ":hover": {
        backgroundColor: "white",
    }

}));
const StyledBadge = styled(Badge)(({ theme }) => ({
    position: "absolute",
    top: -9,
    right: -3,
    paddingLeft: "3px",
    textAlign: "center",
    borderRadius: "7px",
    width: "18px",
    height: "18px",
    backgroundColor: "#ff6161",
    border: "1px solid #fff",
    fontWeight: 400,
    color: "#f0f0f0",
    lineHeight: "16px",
    fonSize: "12px",
}));

const StyledStack = styled(Stack)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    width: "100%",
    "span": {
        color: "white"
    },
    flexDirection: "row",
    textAlign: "center",
    justifyContent: "space-around",


    [theme.breakpoints.down("lg")]: {

        gap: "10px",
    }


}))



const MoreList = styled(Box)(({ them }) => ({
    position: "absolute",
    borderRadius: "8px",
    top: 50,
    right: 60,
    width: "250px",
    zIndex: 10,
    "a": { color: "black" },
    "svg": {
        marginRight: "10px"
    },

}))

const Seller = styled(Typography)(({ theme }) => ({
    [theme.breakpoints.down("lg")]: {
        display: "none"
    },
    [theme.breakpoints.down("md")]: {
        display: "inline"
    },
    [theme.breakpoints.down("sm")]: {
        display: "none"
    },

}))
const Cart = styled(Typography)(({ theme }) => ({
    [theme.breakpoints.down("lg")]: {
        display: "none"
    },
    [theme.breakpoints.down("md")]: {
        display: "inline"
    },
    [theme.breakpoints.down("sm")]: {
        display: "none"
    },

}))

export default function CustomeButton2() {
    const [account, setAccount] = useState({ isOpen: false, currAccount: true });
    
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllCarts());
    }, [])

    // console.log(getUser());
    const cartSize = useSelector(state => state.cart).prods;

    const logoutHandle = () => {
        removeToken();
        removeUser();
        window.location.href = "/"
    }
    return (
        <>

            <StyledStack className="text-dark" >
                {(getUser() != null) ?
                    <Box className="username" style={{ position: "relative", paddingBlock: "15px" }}>
                        <Box >

                            <Typography variant="contained" className="mx-2 text-bold" style={{ fontSize: "1rem" }} >{getUser().firstname}</Typography>
                            < Link ><svg style={{ transform: "rotate(271deg)" }} width="4.7" height="8" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" className="Wto0b0"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff" className="-dC5Le" ></path></svg></Link>
                        </Box>


                        <UserList className="bg-white text-dark user-dropdown-list d-none " width="230px">
                            <List className="gap-2">
                                <ListItem>

                                    <Link component={routerLink} to="/account">
                                        <img  src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/profile-52e0dc.svg" alt="My Profile" width="17" height="17" />
                                        <Typography variant="span" className="mx-2">My Profile</Typography>
                                    </Link>

                                </ListItem>
                                <ListItem>
                                    <Link component={routerLink} to="/supercoins">
                                        <img  src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/supercoin-ce8408.svg" alt="SuperCoin Zone" width="24" height="24" />
                                        <Typography variant="span" className="mx-2">Super Coins</Typography>
                                    </Link>
                                </ListItem>
                                <ListItem>
                                    <Link component={routerLink} to="/plus">
                                        <img  src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkplus-4ff29a.svg" alt="Flipkart Plus Zone" width="24" height="24" />
                                        <Typography variant="span" className="mx-2">Flipkart Plus Zone</Typography>
                                    </Link>
                                </ListItem>
                                <ListItem>
                                    <Link component={routerLink} to="/account/orders">
                                        <img  src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/orders-bfe8c4.svg" alt="Orders" width="24" height="24" />
                                        <Typography variant="span" className="mx-2">Ordered</Typography>
                                    </Link>
                                </ListItem>

                                <ListItem>
                                    <Link component={routerLink} to="account/coupons">
                                        <img  src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/coupons-083172.svg" alt="Coupons" width="24" height="24" />
                                        <Typography variant="span" className="mx-2">Coupons</Typography>

                                    </Link>
                                </ListItem>
                                <ListItem>
                                    <Link component={routerLink} to="/the-gift-card-store/1">
                                        <img  src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/giftCard-bd87e1.svg" alt="Gift Cards" width="24" height="24" />

                                        <Typography variant="span" className="mx-2">Gift Cards </Typography>
                                    </Link>
                                </ListItem>
                                <ListItem>
                                    <Link component={routerLink} to="notification">
                                        <img  src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/notificationPreferences-cfffaf.svg" alt="Notifications" width="24" height="24" />

                                        <Typography variant="span" className="mx-2">Notification</Typography>

                                    </Link>
                                </ListItem>
                                <ListItem>
                                    <Link onClick={logoutHandle} style={{ cursor: "pointer" }}>
                                        <img  src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/logout-e63ddf.svg" alt="Logout" width="24" height="24" />

                                        <Typography variant="span" className="mx-2">Logout</Typography>

                                    </Link>
                                </ListItem>




                            </List>
                        </UserList>
                    </Box>
                    :
                    <Box className="username" style={{ position: "relative", paddingBlock: "15px" }}>
                        <Box >
                            <Link to="/account/login" >
                                <Typography  className=" bg-white text-primary text-bold px-5 py-1" style={{ fontSize: "1rem" }} >Login</Typography>
                               
                            </Link>
                        </Box>




                        <UserList className="bg-white text-dark user-dropdown-list d-none" style={{ width: "240px" }}>
                            <List className="gap-1">
                                <ListItem className="p-3 d-flex align-item-center px-4" style={{ justifyContent: "space-between" }}>
                                    <Link to="/account/login" style={{ cursor: "pointer" }}><Typography className="text-muted text-bold" variant="span">New Customer ?</Typography></Link>
                                    <Link to="/account/login" style={{ cursor: "pointer" }}><Typography variant="span" className="text-primary text-bold">Sign Up</Typography></Link>
                                </ListItem>
                                <ListItem>
                                    <Link component={routerLink} to="/account">

                                        <Typography variant="span" className="mx-2">My Profile</Typography>
                                    </Link>
                                </ListItem>

                                <ListItem>
                                    <Link component={routerLink} to="/plus">
                                        <img  src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkplus-4ff29a.svg" alt="Flipkart Plus Zone" width="24" height="24" />
                                        <Typography variant="span" className="mx-2">Flipkart Plus Zone</Typography>
                                    </Link>
                                </ListItem>
                                <ListItem>
                                    <Link component={routerLink} to="/account/orders">
                                        <img  src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/orders-bfe8c4.svg" alt="Orders" width="24" height="24" />
                                        <Typography variant="span" className="mx-2">Ordered</Typography>
                                    </Link>
                                </ListItem>
                                <ListItem>
                                    <Link component={routerLink} to="/account/wishlist">
                                        <img  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDIwLjI0OUMxMiAyMC4yNDkgMi42MjUgMTQuOTk5IDIuNjI1IDguNjI0MDNDMi42MjUgNy40OTcwNSAzLjAxNTQ2IDYuNDA0ODggMy43Mjk5NiA1LjUzMzM0QzQuNDQ0NDUgNC42NjE3OSA1LjQzODg0IDQuMDY0NzIgNi41NDM5MyAzLjg0MzdDNy42NDkwMyAzLjYyMjY4IDguNzk2NTcgMy43OTEzNyA5Ljc5MTMxIDQuMzIxMDZDMTAuNzg2MSA0Ljg1MDc2IDExLjU2NjUgNS43MDg3NCAxMiA2Ljc0OTAzVjYuNzQ5MDNDMTIuNDMzNSA1LjcwODc0IDEzLjIxMzkgNC44NTA3NiAxNC4yMDg3IDQuMzIxMDZDMTUuMjAzNCAzLjc5MTM3IDE2LjM1MSAzLjYyMjY4IDE3LjQ1NjEgMy44NDM3QzE4LjU2MTIgNC4wNjQ3MiAxOS41NTU1IDQuNjYxNzkgMjAuMjcgNS41MzMzNEMyMC45ODQ1IDYuNDA0ODggMjEuMzc1IDcuNDk3MDUgMjEuMzc1IDguNjI0MDNDMjEuMzc1IDE0Ljk5OSAxMiAyMC4yNDkgMTIgMjAuMjQ5WiIgc3Ryb2tlPSIjMjEyMTIxIiBzdHJva2Utd2lkdGg9IjEuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=" alt="Wishlist (2)" width="24" height="24" />
                                        <Typography variant="span" className="mx-2">Wishlist</Typography>
                                    </Link>
                                </ListItem>

                                <ListItem>
                                    <Link component={routerLink} to="/account/rewards">
                                        <img  src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/rewards-fbd212.svg" alt="Rewards" width="24" height="24" />
                                        <Typography variant="span" className="mx-2">Rewards</Typography>

                                    </Link>
                                </ListItem>
                                <ListItem>
                                    <Link component={routerLink} to="/the-gift-card-store?1">
                                        <img  src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/giftCard-bd87e1.svg" alt="Gift Cards" width="24" height="24" />

                                        <Typography variant="span" className="mx-2">Gift Cards </Typography>
                                    </Link>
                                </ListItem>





                            </List>
                        </UserList>








                    </Box>
                }
                <Box>

                    <Seller variant="span" style={{ fontSize: "1rem" }} className="mx-1 text-bold "> Become a Seller</Seller>
                </Box>


                <Box className="username" style={{ position: "relative", paddingBlock: "10px" }} >
                    <Box className="  d-flex align-item-center">
                        <Typography className="p-2 text-white text-bold">More </Typography>
                        <Link>
                            <svg style={{ transform: "rotate(273deg)" }} width="4.7" height="8" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" className="Wto0b0"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff" className="-dC5Le" ></path></svg>
                        </Link>
                    </Box>

                    <UserList className="bg-white text-dark user-dropdown-list d-none" style={{ width: "240px" }}>



                        <List className="gap-1">

                            <ListItem>
                                <Link component={routerLink} to="/communication-preferences">
                                    <img  src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/profile-52e0dc.svg" alt="My Profile" width="17" height="17" />
                                    <Typography variant="span" className="mx-2">Notification Preffrence</Typography>
                                </Link>
                            </ListItem>

                            <ListItem>
                                <Link component={routerLink} to="/helpcentre">
                                    <img  src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkplus-4ff29a.svg" alt="Flipkart Plus Zone" width="24" height="24" />
                                    <Typography variant="span" className="mx-2">24 x 7 Customer Care</Typography>
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link component={routerLink} to="#">
                                    <img  src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/orders-bfe8c4.svg" alt="Orders" width="24" height="24" />
                                    <Typography variant="span" className="mx-2">Advertise</Typography>
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link component={routerLink} to="/download-app">
                                    <img  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDIwLjI0OUMxMiAyMC4yNDkgMi42MjUgMTQuOTk5IDIuNjI1IDguNjI0MDNDMi42MjUgNy40OTcwNSAzLjAxNTQ2IDYuNDA0ODggMy43Mjk5NiA1LjUzMzM0QzQuNDQ0NDUgNC42NjE3OSA1LjQzODg0IDQuMDY0NzIgNi41NDM5MyAzLjg0MzdDNy42NDkwMyAzLjYyMjY4IDguNzk2NTcgMy43OTEzNyA5Ljc5MTMxIDQuMzIxMDZDMTAuNzg2MSA0Ljg1MDc2IDExLjU2NjUgNS43MDg3NCAxMiA2Ljc0OTAzVjYuNzQ5MDNDMTIuNDMzNSA1LjcwODc0IDEzLjIxMzkgNC44NTA3NiAxNC4yMDg3IDQuMzIxMDZDMTUuMjAzNCAzLjc5MTM3IDE2LjM1MSAzLjYyMjY4IDE3LjQ1NjEgMy44NDM3QzE4LjU2MTIgNC4wNjQ3MiAxOS41NTU1IDQuNjYxNzkgMjAuMjcgNS41MzMzNEMyMC45ODQ1IDYuNDA0ODggMjEuMzc1IDcuNDk3MDUgMjEuMzc1IDguNjI0MDNDMjEuMzc1IDE0Ljk5OSAxMiAyMC4yNDkgMTIgMjAuMjQ5WiIgc3Ryb2tlPSIjMjEyMTIxIiBzdHJva2Utd2lkdGg9IjEuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=" alt="Wishlist (2)" width="24" height="24" />
                                    <Typography variant="span" className="mx-2">Download App</Typography>
                                </Link>
                            </ListItem>
                        </List>
                    </UserList>
                </Box>
                <Box >
                    <Link to="/view-carts" component={routerLink} style={{ position: "relative" }} className=" text-white">
                        <StyledBadge variant="span" className="text-center">{cartSize.length}</StyledBadge><ShoppingCartIcon />
                    </Link>
                    <Link to="/view-carts" component={routerLink}><Cart variant="span" style={{ fontSize: "1rem" }} className="mx-1 text-bold"> Cart</Cart></Link>
                </Box>

                {/* <Typography variant="contained" className='' ><i className="fa-1x  fa-solid fa-cart-shopping" style={{ fontSize: "1.5rem" }}></i>Card</Link></Typography> */}
            </StyledStack >


        </>
    )
}