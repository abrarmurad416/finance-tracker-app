import React from "react";
import {
    Card,
    CardHeader,
    CardContent,
    Typography,
    Grid,
    Divider,
} from "@material-ui/core";

import useStyles from "./styles";

const Main = () => {
    const classes = useStyles();

    return (
        <div>
            <Card className={classes.root}>
                <CardHeader
                    title="Expenses Tracker"
                    subheader="Powered by Speechly"
                    titleTypographyProps={{
                        className: classes.font,
                        style: { fontFamily: "'Lexend Deca', sans-serif" },
                    }}
                />
                <CardContent>
                    <Typography
                        align="center"
                        variant="h5"
                        className={classes.font}
                    >
                        Total Balance $100
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        style={{
                            lineHeight: "1.5em",
                            marginTop: "20px",
                            color: "#999999",
                        }}
                    >
                        Try saying: Add income for $100 in Category Salary for
                        Monday...
                    </Typography>
                    <Divider />
                    {/* Form */}
                </CardContent>
                <CardContent className={classes.CardContent}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            {/* <List /> */}
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </div>
    );
};

export default Main;
