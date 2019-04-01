import { PureComponent } from 'react';
import { ImageProps } from 'react-native';
interface Props extends ImageProps {
    imgW: number;
    imgH: number;
}
export declare class CacheImageClickAble extends PureComponent<Props> {
    constructor(props: any);
    render(): JSX.Element;
}
export {};
