import React from "react";
import { Card, CardHeader, CardContent, Typography } from "@material-ui/core";
import { Doughnut } from "react-chartjs-2";
import useTransactions from "../../useTransactions";

import useStyles from "./styles";

const Details = ({ title }) => {
    const classes = useStyles();
    const {total, chartData} = useTransactions(title);

    return (
        <div>
            <Card
                className={
                    title === "Income" ? classes.income : classes.expense
                }
            >
                <CardHeader
                    title={title}
                    titleTypographyProps={{
                        className: classes.font,
                        style: { fontFamily: "'Lexend Deca', sans-serif" },
                    }}
                />
                <CardContent>
                    <Typography variant="h5" className={classes.font}>
                        ${total}
                    </Typography>
                    <Doughnut data={chartData} />
                </CardContent>
            </Card>
        </div>
    );
};

export default Details;
