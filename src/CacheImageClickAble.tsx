import React, {Component, PureComponent} from 'react'
import DialogShowImage from "./DialogShowImage"
import {CachedImage} from "my-rn-cached-image"
import {ImageProps, TouchableOpacity} from 'react-native'
import {DialogUtils} from "my-rn-base-component";

interface Props extends ImageProps {
    imgW: number
    imgH: number
}

export class CacheImageClickAble extends PureComponent<Props> {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        let {imgW, imgH, ...imgProps} = this.props;
        return (
            <TouchableOpacity onPress={() => {
                DialogUtils.showDialog(<DialogShowImage source={this.props.source}
                                                        imgW={imgW} imgH={imgH}/>)
            }}>
                <CachedImage {...imgProps}/>
            </TouchableOpacity>
        )
    }
}
