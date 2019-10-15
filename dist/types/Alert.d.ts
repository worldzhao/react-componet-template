import t from 'prop-types';
import React from 'react';
import './Alert.less';
import { IAlert } from './type';
declare class Alert extends React.Component<IAlert, any> {
    static propTypes: {
        kind: t.Requireable<string>;
    };
    static defaultProps: {
        kind: string;
    };
    render(): JSX.Element;
}
export default Alert;
