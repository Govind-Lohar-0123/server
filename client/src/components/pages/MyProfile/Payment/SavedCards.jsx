import { Box, styled, TextField, Grid, Typography, Button, Link } from "@mui/material"
import Dashboard from "../Dashboard";
import Input from "@mui/material"
import FilledInput from '@mui/material/FilledInput';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import InputLabel from '@mui/material/InputLabel';
import Radio from '@mui/material/Radio';
import { useState } from "react";
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

import FormLabel from '@mui/material/FormLabel';

const TextFieldStyled = styled(TextField)(({ theme }) => ({

    "label": {
        color: "black !important",
        fontWeight: "bold",
    }

}))
const RadioGroupStyled = styled(RadioGroup)(({ theme }) => ({

    "label": {
        color: " #878787 !important",
        cursor: "not-allowed",
    }

}))
const ComponentBox = styled(Box)(({ theme }) => ({
    "label": {
        color: "black !important",
        fontSize: "13px !important"
    }
}))
const FAQsStyled = styled(Box)(({ theme }) => ({
    "p": {
        fontSize: "13px", marginBlock: "20px"
    },
    "a": { fontSize: "13px", fontWeight: "bold" }


}))

const Wrapper = styled(Box)(({ theme }) => ({
    backgroundColor: "#f5f7fa !important",
    width: "100%",
    height: "100%",

}))
const Component = styled(Grid)(({ theme }) => ({
    width: "80%",

    marginInline: "auto",

}))

export default function SavedCards() {
    const [editPerInfo, setEditPerInfo] = useState(true);
    const [editEmail, setEditEmail] = useState(true);
    const [editMobile, setEditMobile] = useState(true);
    const Wrapper = styled(Box)(({ theme }) => ({
        backgroundColor: "#f5f7fa !important",
        width: "100%",
        height: "100%",

    }))
    return (
        <>

            <Wrapper className="mt-2">

                <Component className="mt-4">

                    <Grid container lg={12}>
                        <Grid item lg={3} >
                            <Dashboard />
                        </Grid>



                        <Grid item lg={8.86} style={{ backgroundColor: "white", marginLeft: "auto", boxShadow: "0 2px 4px 0 rgba(0, 0, 0, .08)" }}>
                            <ComponentBox className="" style={{

                            }}>
                                <Box className="p-4">

                                    <Box className="d-flex gap-4 align-item-center ">
                                        <Typography className="text-bold" style={{ fontSize: "19px" }} >Manage Saved Cards</Typography>
                                    </Box>
                                    <FAQsStyled className="mt-5">
                                        <Typography className="text-bold" style={{ fontSize: "16px" }}>FAQs</Typography>
                                        <Box>
                                            <Typography className="text-bold ">
                                                Why is my card being tokenised?
                                            </Typography>
                                            <Typography>
                                                As per the new RBI guidelines to make card data more secure, merchants like Flipkart cannot store the card details of users. As an alternative, RBI has authorised card networks and card issuers to offer card tokenisation services, which means the replacement of actual credit and debit card details with an alternate code called “token”. The user can either choose to tokenise their card by giving consent for future transactions or choose to continue without tokenisation.
                                            </Typography>
                                        </Box>
                                        <Box>
                                            <Typography className="text-bold ">
                                                What is a token?
                                            </Typography>
                                            <Typography>
                                                A token is generated when a user gives consent to Flipkart to tokenise their card. A token is a unique value for a combination of card, token requestor (Flipkart is a token requestor & accepts request from the customer for tokenisation of a card and passes it onto the card network to issue a corresponding token) and device. The token does not contain any personal information linked to your card and is generated only when a customer uses a new card for a successful transaction on Flipkart.
                                            </Typography>
                                        </Box>
                                        <Box>
                                            <Typography className="text-bold ">
                                                Is it safe to tokenise my card?
                                            </Typography>
                                            <Typography>
                                                Yes. A tokenised card transaction is considered safer as the actual card details are not shared with the Flipkart during transaction processing . Card information is stored with the authorised card networks or card issuers only and Flipkart does not store your 16-digit card number.
                                            </Typography>
                                        </Box>
                                        <Box>
                                            <Typography className="text-bold ">
                                                Is tokenisation of card mandatory?
                                            </Typography>
                                            <Typography>
                                                No, customer can choose whether or not to tokenise their card.
                                            </Typography>
                                        </Box>
                                        <Box>
                                            <Typography className="text-bold ">
                                                What happens if I don’t give consent to secure my card?
                                            </Typography>
                                            <Typography>
                                                If you don’t give consent to tokenise your card, you need to enter your card details for every transaction as stipulated under the RBI guidelines.
                                            </Typography>
                                        </Box>


                                        <Link className="text-bold mt-5" style={{ marginTop: "5rem" }}>View all FAQs</Link>



                                    </FAQsStyled>
                                </Box>



                            </ComponentBox>
                        </Grid>

                    </Grid>
                </Component>
            </Wrapper >
        </>

    )

}