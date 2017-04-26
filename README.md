# react-livephoto - A LivePhoto component for React.JS

This is a simple component for React.JS build around [livephotokit](https://developer.apple.com/reference/livephotoskitjs) to make it easy to embed LivePhotos in your application.

## Usage

The easiest way to use react-livephoto is to install it from NPM.
```
npm install --save react-livephoto
```
At this point you can import react-livephoto in your application as follows:
```js
import LivePhoto from 'react-livephoto';

<LivePhoto
    width={500}
    height={500}
    imageSrc="http://myhost.com/img.JPG"
    videoSrc="http://myhost.com/img.mov"
/>
```

## Props


| Property        | Type           | Description  |
| ------------- |:-------------:|-----|
| `width`      | number | The width in px of the LivePhoto component, this prop is required for the element to render. |
| `height`      | number | The height in px of the LivePhoto component, this prop is required for the element to render. |
| `imageSrc` | string      | The path of your livephoto .jpg file. This is the image which will be displayed as preview. |
| `videoSrc` | string      |    The path of your livephoto .mov file. This is the video which will play when the `Live` label is hovered. |

## Contributing

Developing

* Running the project - **npm start** - Runs the development server at *localhost:8080* and use Hot Module Replacement. You can override the default host and port through env (`HOST`, `PORT`).

Testing

The test setup is based on Jest. Code coverage report is generated to `coverage/`. The coverage information is also uploaded to codecov.io after a successful Travis build.

* Running tests once - **npm test**
* Running tests continuously - **npm run test:watch**
* Running individual tests - **npm test -- <pattern>** - Works with `test:watch` too.
* Linting - **npm run test:lint** - Runs ESLint.

## License

*react-livephoto* is available under MIT. See LICENSE for more details.

