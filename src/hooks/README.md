# `@saifudinhasan/hooks`

Collection of my custom [React hooks](https://reactjs.org/docs/hooks-intro.html).

## Instalation

```shell
npm i @saifudinhasan/hooks
```

## Usage

1. [useWindowScroll()](#window-scroll) - get x axis, y axis and window scroll direction (up, down, left, right)

### Window scroll

#### Reference

Default value for delay / throttle (milisecond) is 0

```ts
interface Scroll {
  x: number;
  y: number;
  direction: "up" | "down" | "right" | "left" | undefined;
}
const useWindowScroll = (delay = 0): Scroll => {};
```

#### Example

```tsx
import React from "react";
import { useWindowScroll } from "@saifudinhasan/hooks";

const Component = () => {
  const { x, y, direction } = useWindowScroll(200);

  useEffect(
    {
      // do something
    },
    [direction]
  );

  return <div />;
};

export default Component;
```
