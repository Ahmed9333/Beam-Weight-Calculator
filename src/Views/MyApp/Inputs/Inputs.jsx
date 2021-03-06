import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ChartElem from '../../../Components/ChartElem';
import InputElem from '../../../Components/InputElem';
import CardElem from '../../../Components/CardElem';
import Beam from './Beam.png';
const useStyles = makeStyles(theme => ({
  
  
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const Inputs = ({
  inputsData,
  updateValue
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <CardElem
            title="My Inputs"
            subtitle="Beam Geometry"
           >
            <div>
              <InputElem 
                data={inputsData.h}
                updateValue={updateValue}
              />
              <InputElem 
                data={inputsData.b}
                updateValue={updateValue}
              />
              <InputElem 
                data={inputsData.L}
                updateValue={updateValue}
              />
              <InputElem 
                data={inputsData.rho}
                updateValue={updateValue}
              />
              <img src={Beam}/>
            </div>
          </CardElem>
        </Grid>
        <Grid item xs={12} sm={6}>
          <CardElem
            title="My Chart"
            subtitle="Section"
          >
            <ChartElem
                dataForChart={{
                  chartTitle: 'Section Rectangulaire',
                  value: [
                    {x: 0, y: 0},
                    {x: inputsData.b.value, y: 0},
                    {x: inputsData.b.value, y: inputsData.h.value},
                    {x: 0, y: inputsData.h.value},
                    {x: 0, y: 0}
                  ],
                  axisName: {x: 'Largeur de la Section ', y: 'Hauteur de la section '},
                  unit: {x: 'm', y: 'm'}
                }}
              />
          </CardElem>
        </Grid>
        <Grid item xs={12} sm={6}>
          <CardElem
            title="My Chart"
            subtitle="Plan View"
          >
            <ChartElem
                dataForChart={{
                  chartTitle: 'Section Rectangulaire',
                  value: [
                    {x: 0, y: 0},
                    {x: inputsData.L.value, y: 0},
                    {x: inputsData.L.value, y: inputsData.h.value},
                    {x: 0, y: inputsData.h.value},
                    {x: 0, y: 0}
                  ],
                  axisName: {x: 'Longueur de la poutre ', y: 'Hauteur de la poutre '},
                  unit: {x: 'm', y: 'm'}
                }}
              />
          </CardElem>
        </Grid>
      </Grid>
    </div>
  )
}

export default Inputs;
