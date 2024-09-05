import { Box, styled, TextField, Grid, Typography, Button, Link, Checkbox } from "@mui/material"
import Dashboard from "../Dashboard";
import { Link as routerLink } from "react-router-dom"
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
    // height: "100%",

}))
const Component = styled(Grid)(({ theme }) => ({
    width: "80%",

    marginInline: "auto",

}))


export default function PanCard() {
    const [editPerInfo, setEditPerInfo] = useState(true);
    const [editEmail, setEditEmail] = useState(true);
    const [editMobile, setEditMobile] = useState(true);

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

                                    <Box className=" ">
                                        <Typography className="text-bold" style={{ fontSize: "19px" }} >PAN Card Information</Typography>
                                        <Box className="mt-3" >
                                            <Box>
                                                <TextField style={{ width: "300px", color: "#878787" }} id="outlined-basic" label="PAN Card Number" variant="outlined" />
                                            </Box>
                                            <Box className="my-3">
                                                <TextField style={{ width: "300px", color: "#878787" }} id="outlined-basic" label="Full Name" variant="outlined" />
                                            </Box>
                                            <Box style={{ border: "solid 1px #e0e0e0", backgroundColor: "white", width: "300px" }} className="p-3">
                                                <input type="file" style={{ width: "300px", }} lable="Upload PAN Card (Only JPEG file is allowed)" />

                                            </Box>

                                        </Box>
                                        <Box className="mt-3 d-flex  " style={{ alignItems: "flex-start" }}>
                                            <FormControlLabel control={<Checkbox defaultChecked />} label="" />
                                            <Typography variant="span" className="mt-2" style={{ fontSize: "14px" }}>I do hereby declare that PAN furnished/stated above is correct and belongs to me, registered as an account holder with www.flipkart.com. I further declare that I shall solely be held responsible for the consequences, in case of any false PAN declaration.</Typography>
                                        </Box>
                                        <Box className="mt-5">
                                            <Button variant="contained" className="text-bold" style={{ backgroundColor: "#2874f0" }}>UPLOAD</Button>
                                        </Box>
                                        <Link className="text-bold d-block mt-5" to="/account/terms" component={routerLink}>
                                            Read Terms & Conditions of PAN Card Information
                                        </Link>
                                    </Box>
                                </Box>
                            </ComponentBox>
                        </Grid>

                    </Grid>
                </Component>
            </Wrapper >
        </>

    )

}