import React from 'react';
import { Grid, Card, CardContent, Typography } from '@material-ui/core';
import CountUp from 'react-countup';
import styles from './Cards.module.css';
import cx from 'classnames';
import _ from 'lodash';
import moment from 'moment';

const Cards = ({covid19Data}) => {
    if(_.isEmpty(covid19Data)) {
        return 'Loading...'
    }
    const {Confirmed, Recovered, Deaths, Date} = covid19Data;
    return (
        <section className={styles.container}>
            <Grid container justify="center" spacing={3}>
                <Grid item xs={12} md={3} component={Card} className={styles.cardWrapper} >
                    <CardContent className={cx(styles.card, styles.infected)}>
                        <Typography color="textSecondary" gutterBottom variant="h6">Confirmed</Typography>
                        <Typography variant="h3">
                            <CountUp end={(Confirmed - 0)} duration={2} separator=","/>
                        </Typography>
                        <Typography color="textSecondary">{moment(Date).format('YYYY-MM-DD hh:mm a')}</Typography>
                        <Typography>Number of confirmed cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item xs={12} md={3} component={Card} className={styles.cardWrapper} >
                    <CardContent className={cx(styles.card, styles.recovered)}>
                        <Typography color="textSecondary" gutterBottom variant="h6">Recovered</Typography>
                        <Typography variant="h3">
                            <CountUp end={(Recovered - 0)} duration={2} separator=","/>
                        </Typography>
                        <Typography color="textSecondary">{moment(Date).format('YYYY-MM-DD hh:mm a')}</Typography>
                        <Typography>Number of recovered cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item xs={12} md={3} component={Card} className={styles.cardWrapper} >
                    <CardContent className={cx(styles.card, styles.deaths)}>
                        <Typography color="textSecondary" gutterBottom variant="h6">Deaths</Typography>
                        <Typography variant="h3">
                            <CountUp end={(Deaths - 0)} duration={2} separator=","/>
                        </Typography>
                        <Typography color="textSecondary">{moment(Date).format('YYYY-MM-DD hh:mm a')}</Typography>
                        <Typography>Number of deaths cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </section>

    );
}

export default Cards;