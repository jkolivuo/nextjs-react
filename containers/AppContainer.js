import Header from '../components/Header';
import React from 'react'
import { observer } from 'mobx-react';

const withAppLayout =  (ComposedComponent) => {
    class Applayout extends React.Component {
        render() {
            return (
                <div>
                    <Header/>
                    <ComposedComponent {...this.props}/>
                </div>
            )
        }
    }
    return Applayout;
};

export default withAppLayout;