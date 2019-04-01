## Installation

##### Thêm Vào package.json
```
"my-rn-clickable-zoom-image": "git+https://gitlab.com/react-native-my-libs/my-rn-clickable-zoom-image.git",
```

Chạy  lệnh sau
```
yarn install
```

## Sử dụng

```javascript
<CacheImageClickAble source={{uri: img}} imgH={question.heightImg} imgW={question.widthImg}
                                    style={{height: heightImg, resizeMode: "contain"}}/>
```
