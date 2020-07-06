import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import Button from '@material-ui/core/Button'

export function ScrollTopButton({...props}){

    return(
        <Button>
            <ArrowUpwardIcon fontSize="large" color="inherit" />
        </Button>
    )
}