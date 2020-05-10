import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';
import { red, green } from '@material-ui/core/colors';
import { PlayArrow, Replay } from '@material-ui/icons';
import { FormulasTextfield } from './FormulasTextfield';
import { MonitorTextfield } from './MonitorTextfield';
import { StartButton } from './StartButton';
import { startCalculate, reset } from '../redux/actions/mainViewActions';
import { ResetButton } from './ResetButton';
import { resetExperiments } from '../redux/actions/experimentsViewActions';
import {RESET_API} from '../constants';

const cfg = {
    intensity: 500,
    formulasTextfieldRows: 8,
    monitorTextfieldRows: 14,
    readOnly: true,
    themSpacing: 2
}

const useStyles = makeStyles((theme) => ({
    red: {
        color: red[cfg.intensity],
    },
    startButton: {
        color: green[cfg.intensity],
        marginTop: theme.spacing(cfg.themSpacing),
    },
    monitorSpacing: {
        marginTop: theme.spacing(cfg.themSpacing),
    }
}))

export function CalculationsMonitor({ formulas }) {
    const classes = useStyles();
    const socket = useSelector(state => state.mainView.socket);
    const isCalculating = useSelector(state => state.mainView.isCalculating);
    const dispatch = useDispatch();

    const handleStart = () => {
        dispatch(startCalculate());
        formulas.forEach(formula => {
            socket.send(formula);
        })
    }

    const handleReset = () => {
        dispatch(reset());
        dispatch(resetExperimentData());
    }

    function resetExperimentData() {
        return dispatch => fetch(RESET_API, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(dispatch(resetExperiments()))
    }

    return (
        <>
            <FormulasTextfield formulas={formulas} variant='outlined' rows={cfg.formulasTextfieldRows} label='Loaded Formulas' readOnly={cfg.readOnly} />
            <MonitorTextfield className={classes.monitorSpacing} socket={socket} variant='outlined' rows={cfg.monitorTextfieldRows} label='Calculations Monitor' readOnly={cfg.readOnly} />
            {
                isCalculating ?
                    <ResetButton onReset={handleReset} text='Restart' variant='outlined' startIcon={<Replay />} />
                    :
                    <StartButton onStart={handleStart} text='Start' variant='outlined' startIcon={<PlayArrow />} />
            }
        </>
    )

}