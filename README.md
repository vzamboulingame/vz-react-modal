# vz-react-modal

> This package is meant to be used for educational purpose. It is not intended to be maintained and could be deleted in the future.

![React](https://img.shields.io/badge/React-18.2-teal)
![React DOM](https://img.shields.io/badge/React_dom-18.2-orange)
![Documentation](https://img.shields.io/badge/documentation-yes-brightgreen.svg)
![MIT licensed](https://img.shields.io/badge/license-MIT-blue.svg)

## About

A lightweight React modal component based on the HTML dialog element.

## Install

```bash
# npm
npm install -D vz-react-modal

# yarn
yarn add -D vz-react-modal

# pnpm
pnpm add -D vz-react-modal
```

## Usage

```jsx
import { useState } from "react";
// Import the Modal component
import Modal from "vz-react-modal";

/**
 * Renders the main App component.
 *
 * @return {JSX.Element} The rendered App component.
 */
export default function App(): JSX.Element {
  // Define state to track whether the modal is open or not
  const [isOpen, setIsOpen] = useState(false);

  // Add function to handle the close event of the modal
  const handleClose = () => {
    setIsOpen(false);
  };

  // Add function to handle the open event of the modal
  const handleClick = () => {
    setIsOpen(true);
  };

  return (
    <div
      style={{
        margin: "0 auto",
        textAlign: "center",
        minHeight: "100vh",
        padding: "1rem"
      }}
    >
      <p style={{ fontSize: "2rem", color: "#333", margin: "auto" }}>
        vz-react-modal
      </p>
      <button
        style={{
          backgroundColor: "#0074E4",
          padding: "0.5rem 1rem",
          fontWeight: "bold",
          color: "#fff",
          cursor: "pointer",
          borderRadius: "0.25rem",
          marginTop: "1rem"
        }}
        onClick={handleClick}
      >
        Open Modal
      </button>
      {/* Pass the props to the Modal component */}
      <Modal
        modalTitle="Modal title"
        modalMessage="Modal message"
        modalType="basic"
        isOpen={isOpen}
        handleClose={handleClose}
      />{" "}
    </div>
  );
}
```

## Props

The vz-react-modal component accepts the following props:

| Name           | Type       | Description                                                                             |
| -------------- | ---------- | --------------------------------------------------------------------------------------- |
| `modalTitle`   | `string`   | The title of the modal                                                                  |
| `modalMessage` | `string`   | The message to be displayed in the modal                                                |
| `modalType`    | `string`   | The type of the modal (allowed values : "basic", "info", "success", "warning", "error") |
| `isOpen`       | `boolean`  | A boolean indicating whether the modal is open or not                                   |
| `handleClose`  | `function` | A function to handle the close event of the modal                                       |

## Examples

You can find below examples of the different modal types :

|  Type   |                                            Example                                            |
| :-----: | :-------------------------------------------------------------------------------------------: |
|  Basic  |   ![Basic](https://github.com/vzamboulingame/vz-react-modal/blob/main/src/assets/basic.png)   |
|  Info   |    ![Info](https://github.com/vzamboulingame/vz-react-modal/blob/main/src/assets/info.png)    |
| Success | ![Success](https://github.com/vzamboulingame/vz-react-modal/blob/main/src/assets/success.png) |
| Warning | ![Warning](https://github.com/vzamboulingame/vz-react-modal/blob/main/src/assets/warning.png) |
|  Error  |   ![Error](https://github.com/vzamboulingame/vz-react-modal/blob/main/src/assets/error.png)   |

## Styling

The vz-react-modal component is styled with Tailwind CSS.

## License

MIT © [vzamboulingame](https://github.com/vzamboulingame)
