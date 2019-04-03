import { Component } from 'react';
import { ImageProps } from 'react-native';
interface Props extends ImageProps {
    imgW: number;
    imgH: number;
}
export default class DialogShowImage extends Component<Props> {
    private ratio;
    private popupDialog;
    constructor(props: any);
    show(onShowed?: any): void;
    dismiss(onDismissed?: any): void;
    render(): JSX.Element;
}
export {};
