import { Component } from 'react';
interface Props {
    source: any;
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
