import React, { ComponentType } from 'react';
import { connect } from "react-redux";
import { compose } from 'redux';
import { AppState } from '../store';
import { isFtue } from '../store/ux/reducers';
import { setFTUEComplete } from '../store/ux/actions';

interface withFtueProps {
    isFtue: boolean;
}

const withFtue = (Component: ComponentType) => ({ isFtue, ...rest }: withFtueProps) => {
    if (isFtue) {
        // window.alert('users first time!');
        return <Component {...rest}  />
        
    }

    return <Component {...rest} />

}

const mapStateToProps = (state: AppState) => {
    return {
        isFtue: isFtue(state.ux)
    }
}

const mapDispatchToProps = { setFTUEComplete }

const ftue = (component: ComponentType) => connect(mapStateToProps, mapDispatchToProps)(withFtue(component));

export default ftue;