import React, { PureComponent } from 'react';
import DialogShowImage from "./DialogShowImage";
import { CachedImage } from "my-rn-cached-image";
import { TouchableOpacity } from 'react-native';
import { DialogUtils } from "my-rn-base-component";
export class CacheImageClickAble extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        let { imgW, imgH, ...imgProps } = this.props;
        return (<TouchableOpacity onPress={() => {
            DialogUtils.showDialog(<DialogShowImage source={this.props.source} imgW={imgW} imgH={imgH}/>);
        }}>
                <CachedImage {...imgProps}/>
            </TouchableOpacity>);
    }
}
