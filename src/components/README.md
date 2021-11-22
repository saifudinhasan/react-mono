# `@sh4/components`

Collections of custom components for ReactJS

## Instalation

```shell
npm i @sh4/components
```

## Usage

1. [AutoHideNavbar](#AutoHideNavbar)

### AutoHideNavbar

- Automatically hide the navbar when user scroll down the page
- And show the navbar when user scroll up the page
- It can be used with styled-components or plain CSS
- This components using [useWindowScroll()](https://www.npmjs.com/package/@sh4/hooks#window-scroll) from [@sh4/hooks](https://www.npmjs.com/package/@sh4/hooks)

#### Reference

Default value for delay / throttle (milisecond) is 0

```ts
interface Options {
  height: number;
  children: ReactNode;
  delay?: number;
  className?: string;
}
const AutoHideNavbar = ({
  height,
  children,
  className,
  delay = 0,
}: Options): JSX.Element => {};
```

#### Example with styled-components

```tsx
import styled from "styled-components";
import { AutoHideNavbar } from "@sh4/components";

const Navbar = (): JSX.Element => {
  return (
    <Container>
      <NavbarContainer height={80} delay={200}>
        {/* ... children */}
      </NavbarContainer>
    </Container>
  );
};

export default Navbar;

const NavbarContainer = styled(AutoHideNavbar)`
  // Styles goes here ...
`;
```

#### Example with css / based on className

```tsx
import { AutoHideNavbar } from "@sh4/components";
import "./style.css"; // style with css / sass

const Navbar = (): JSX.Element => {
  return (
    <Container>
      <AutoHideNavbar height={80} delay={200} className="navbar-container">
        {/* ... children */}
      </AutoHideNavbar>
    </Container>
  );
};

export default Navbar;
```
