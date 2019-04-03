import React, {Component} from 'react'

import {CachedImage} from "react-native-cached-image"
import ImageZoom from 'react-native-image-pan-zoom'
import {Dimensions, ImageProps, View} from 'react-native'
import {Button, ButtonModel, PopupDialog, RenderUtils} from "my-rn-base-component";
import {isIOS} from "my-rn-base-utils";

interface Props extends ImageProps{
    imgW: number
    imgH: number
}

export default class DialogShowImage extends Component<Props> {
    private ratio: number;
    private popupDialog: any;

    constructor(props) {
        super(props);
        if (this.props.imgW) {
            this.ratio = this.props.imgW / this.props.imgH;
        }
    }

    show(onShowed?) {
        this.popupDialog.show()
    }

    dismiss(onDismissed?) {
        this.popupDialog.dismiss()
    }


    render() {
        let {width, height} = Dimensions.get('window');
        let imgH;
        if (this.ratio) {
            imgH = this.ratio * height
        } else
            imgH = 200;
        return (
            <PopupDialog dialogStyle={{backgroundColor: "#000000AF"}} width={"100%"} height="100%"
                         ref={(popupDialog) => { this.popupDialog = popupDialog }}>
                <View style={{flex: 1}}>
                    <ImageZoom style={{flex: 1}} cropWidth={width}
                               cropHeight={height}
                               imageWidth={width}
                               imageHeight={imgH}>
                        <CachedImage style={{width: width, height: imgH, resizeMode: "contain"}}
                                     source={this.props.source}
                                     defaultSource={this.props.defaultSource}/>
                    </ImageZoom>

                    <Button model={ButtonModel.transparent} onPress={() => this.dismiss()}
                            style={{
                                width: 50, height: 50, paddingLeft: 0, paddingRight: 0, paddingTop: 0, paddingBottom: 0, position: 'absolute', right: 0,
                                top: isIOS() ? 12 : 5
                            }}>
                        {RenderUtils.renderIcon("md-close", 33, '#cc1a00')}
                    </Button>

                </View>
            </PopupDialog>

        )
    }
}
