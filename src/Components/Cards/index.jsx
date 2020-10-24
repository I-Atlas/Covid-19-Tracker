import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import Countup from "react-countup";
import cx from "classnames";
import styles from "./Cards.module.css";

const Cards = ({ data: { deaths, confirmed, recovered, lastUpdate } }) => {
  if (!confirmed) {
    return "No Confirmed";
  }
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.confirmed)}
        >
          <CardContent>
            <Typography
              variant="h6"
              color="textSecondary"
              gutterBottom
              className={styles.content}
            >
              Confirmed
            </Typography>
            <Typography variant="h5" className={styles.content}>
              <Countup
                start={0}
                end={confirmed.value}
                duration={1}
                separator={" "}
              />
            </Typography>
            <Typography color="textSecondary" className={styles.content}>
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography
              variant="body2"
              color="primary"
              className={styles.description}
            >
              Confirmed Covid-19 diseases
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.recovered)}
        >
          <CardContent>
            <Typography
              variant="h6"
              color="textSecondary"
              gutterBottom
              className={styles.content}
            >
              Recovered
            </Typography>
            <Typography variant="h5" className={styles.content}>
              <Countup
                start={0}
                end={recovered.value}
                duration={1}
                separator={" "}
              />
            </Typography>
            <Typography color="textSecondary" className={styles.content}>
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography
              variant="body2"
              color="primary"
              className={styles.description}
            >
              Number of recoveries from Covid-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.deaths)}
        >
          <CardContent>
            <Typography
              variant="h6"
              color="textSecondary"
              gutterBottom
              className={styles.content}
            >
              Deaths
            </Typography>
            <Typography variant="h5" className={styles.content}>
              <Countup
                start={0}
                end={deaths.value}
                duration={1}
                separator={" "}
              />
            </Typography>
            <Typography color="textSecondary" className={styles.content}>
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography
              variant="body2"
              color="primary"
              className={styles.description}
            >
              Number of deaths from Covid-19
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
