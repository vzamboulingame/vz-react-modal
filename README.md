# vz-react-modal

> This package is meant to be used for educational purpose. It is not intended to be maintained and could be deleted in the future.

![NPM](https://img.shields.io/npm/v/@vzamboulingame/vz-react-modal.svg)
![React](https://img.shields.io/badge/React-18.2-teal)
![React DOM](https://img.shields.io/badge/React_dom-18.2-orange)
![Documentation](https://img.shields.io/badge/documentation-yes-brightgreen.svg)
![MIT licensed](https://img.shields.io/badge/license-MIT-blue.svg)

## About

A simple react modal component created for OpenClassrooms Project #14.


## Install

```bash
npm i -D vz-react-modal
```

## Usage

```jsx
import Modal from "./libs";
import { useState } from "react";

/**
 * Renders the main App component.
 *
 * @return {JSX.Element} The rendered App component.
 */
export default function App(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => {
    setIsOpen(false);
  };

  const handleClick = () => {
    setIsOpen(true);
  };

  return (
    <div className="flex flex-col tex-center items-center min-h-screen p-4">
      <p className="text-2xl text-gray-900 mx-auto">vz-react-modal</p>

      <Modal
        modalTitle="Modal title"
        modalMessage="Modal message"
        modalType="basic"
        isOpen={isOpen}
        handleClose={handleClose}
      />

      <button
        className="bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 rounded my-8"
        onClick={handleClick}
      >
        Open Modal
      </button>
    </div>
  );
}
```


## Props

The vz-react-modal component accepts the following props:

| Name | Type | Description |
|-----------|-------------|----------------------------------------------------|
| `modalTitle` | `string` | The title of the modal |
| `modalMessage` | `string` | The message to be displayed in the modal |
| `modalType` | `string` | The type of the modal (allowed values : "basic", "info", "success", "warning", "error") |
| `isOpen` | `boolean` | A boolean indicating whether the modal is open or not |
| `handleClose` | `function` | A function to handle the close event of the modal |


## Examples

You can find below examples of the different modal types :

| Type | Example |
| :--------------: | :----------------: |
| Basic | ![Basic](https://github.com/vzamboulingame/vz-react-modal/blob/main/src/assets/basic.png) |
| Info | ![Info](https://github.com/vzamboulingame/vz-react-modal/blob/main/src/assets/info.png) |
| Success | ![Success](https://github.com/vzamboulingame/vz-react-modal/blob/main/src/assets/success.png) |
| Warning | ![Warning](https://github.com/vzamboulingame/vz-react-modal/blob/main/src/assets/warning.png) |
| Error | ![Error](https://github.com/vzamboulingame/vz-react-modal/blob/main/src/assets/error.png) |


## License

MIT © [vzamboulingame](https://github.com/vzamboulingame)
