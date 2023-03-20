# Style man in Seoul

장난이고, style 강의 정리.

## 가장 쉬운 방법

index.html에서 script 태그 안에 css 추가해준다.

주의할 것, id, className의 차이.

id는 유일한 값. 반복되면 안된다.

## CSS는 아닌, JS를 쓰는 방식

객체를 넘기는 방식

```js
export default function App (){
    const style = {
        color:'blue'
    }

    return (
        <>
            <div style={style}>hello</div>
.
.
.
```

이런거 가능

```js
<div
  style={{
    color: "blue",
  }}
>
  hello
</div>
```

변수에 담거나 함수 활용도 가능.

```js
const primaryColor = "green";

const bool_tissue = false;

function tissueColor() {
  return bool_tissue ? "red" : "blue";
}

export default function Greeting() {
  return (
    <>
      <p className="greeting">Greeting</p>

      <div style={{ color: primaryColor }}>green color</div>

      <div style={{ color: tissueColor() }}>빨간 휴지줄까, 파란 휴지줄까</div>
    </>
  );
}
```

## styled-components

설치

```js
npm i styled-components

npm i -D @types/styled-components @swc/plugin-styled-components
```

vscode-styled-components 설치해줘야 편하다.

Babel Plugin을 SWC에서 쓸 수 있도록 포팅한 것도 함께 설치하자(SSR 지원 등을 위한 공식 권장사항).

```js
// .swcrc 파일 작성

{
 "jsc": {
  "experimental": {
   "plugins": [
    [
     "@swc/plugin-styled-components",
     {
      "displayName": true,
      "ssr": true
     }
    ]
   ]
  }
 }
}
```

예제는 파일 참고

```js
import styled from "styled-components";

export default function Greeting() {
  return <SmallHelloWorld />;
}

function HelloWorld() {
  return (
    <>
      <Paragraph>
        Small Hello <strong>!</strong>
      </Paragraph>

      <BigParagraph>Big hello</BigParagraph>
    </>
  );
}

const SmallHelloWorld = styled(HelloWorld)`
  font-size: 0.1em;
`;

const Paragraph = styled.p`
  color: blue;

  strong {
    color: red;
    font-size: 2em;
  }
`;

const BigParagraph = styled(Paragraph)`
  // 괄호를 이용한 상속
  color: teal;
  font-size: 3em;
`;
```

function형으로 만든 컴포넌트는 <이런/> jsx로 표현이 물론 가능 하지만,

styled(Paragraph) 같은걸 하면 클래스네임이 추가되는건데

그게 무시됨.

```js
function HelloWorld({ className }: { className: string }) {
  return (
    <>
      <Paragraph className={className}>
        Small Hello <strong>!</strong>
      </Paragraph>

      <BigParagraph>Big hello</BigParagraph>
    </>
  );
}
```

이런 식으로 props로 받아서 클래스네임 적용해줘야 됨.

그러나, 이건 기본적인 거라서 타이핑도 기본적인게 있다.

```js
function HelloWorld({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <>
      <Paragraph className={className}>
        Small Hello <strong>!</strong>
      </Paragraph>

      <BigParagraph>Big hello</BigParagraph>
    </>
  );
}
```

## props

usehooks-ts 설치

```js
npm i usehooks-ts
```

함수로 빼는 스타일

```js
import styled from "styled-components";
import { useBoolean } from "usehooks-ts";

type ButtonProps = {
  active: boolean,
};

function background(props: ButtonProps) {
  return props.active ? "teal" : "#FFF";
}

export default function Switch() {
  const { value: active, toggle } = useBoolean(false);
  return (
    <Button type="button" onClick={toggle} active={active}>
      On/Off
    </Button>
  );
}

const Button =
  styled.button <
  ButtonProps >
  `
  padding: 20px;
  background: ${background};
  color: #000;
  border: 1px solid #888;
  border-radius: 20px; ;
`;
```

간단히 하는 법

```js
import styled from "styled-components";
import { useBoolean } from "usehooks-ts";

export default function Switch() {
  const { value: active, toggle } = useBoolean(false);
  return (
    <Button type="button" onClick={toggle} active={active}>
      On/Off
    </Button>
  );
}

const Button =
  styled.button <
  { active: boolean } >
  `
  padding: 20px;
  background: ${(props) => (props.active ? "teal" : "#FFF")};
  color: #000;
  border: 1px solid #888;
  border-radius: 20px; ;
`;
```

밑으로 ${} 스크립트 부분을 밑으로 빼서 이런 식으로도 가능

```js
const Button =
  styled.button <
  { active: boolean } >
  `
  padding: 20px;
  background: ${(props) => (props.active ? "teal" : "#FFF")};
  color: #000;
  border: 1px solid #888;
  border-radius: 20px;

  ${(props) =>
    props.active &&
    css`
      // 여기 css 안써도 되지만 스타일드 컴포넌트 확장의 도움을 받기 위해서임. 컬러가 키, 밸류 구분이 됨.
      background: #f00;
      color: yellow;
    `}
`;
```

## attrs

주구장창 반복되는 ,. button의 attribute type 같은거 반복을 제거하기 위해 쓴다.

```js
const Button =
  styled.button.attrs({
    type: "button",
  }) <
  { active: boolean } >
  `
  padding: 20px;
  background: ${(props) => (props.active ? "teal" : "#FFF")};
  color: #000;
  border: 1px solid #888;
  border-radius: 20px;

  ${(props) =>
    props.active &&
    css`
      background: #f00;
      color: yellow;
    `}
`;
```

ButtonProps로 빼주기

```js
import styled, { css } from "styled-components";
import { useBoolean } from "usehooks-ts";

type ButtonProps = {
  type?: "button" | "submit" | "reset",
  active?: boolean,
};

export default function Switch() {
  const { value: active, toggle } = useBoolean(false);
  return (
    <Button onClick={toggle} active={active}>
      On/Off
    </Button>
  );
}

const Button =
  styled.button.attrs <
  ButtonProps >
  {
    type: "button",
  } <
  ButtonProps > //모양이 참 ;;
  `
  padding: 20px;
  background: ${(props) => (props.active ? "teal" : "#FFF")};
  color: #000;
  border: 1px solid #888;
  border-radius: 20px;

  ${(props) =>
    props.active &&
    css`
      background: #f00;
      color: yellow;
    `}
`;
```

Button type이 있을때, 없을때 옵셔널 처리 해줄수도 있다.

```js
export default function Switch() {
  const { value: active, toggle } = useBoolean(false);
  return (
    <Button type="submit" onClick={toggle} active={active}>
      On/Off
    </Button>
  );
}

const Button =
  styled.button.attrs <
  ButtonProps >
  ((props) => ({
    type: props.type ?? "button",
  })) <
  ButtonProps >
  `
  padding: 20px;
  background: ${(props) => (props.active ? "teal" : "#FFF")};
  color: #000;
  border: 1px solid #888;
  border-radius: 20px;

  ${(props) =>
    props.active &&
    css`
      background: #f00;
      color: yellow;
    `}
`;
```

primary일때 active를 따로 잡아줄 수 있다.

```js
const PrimaryButton = styled(Button)`
  background: #eee;

  ${(props) =>
    props.active &&
    css`
      background: #f0f;
      color: yellow;
    `}
`;
```

## Global CSS

설치

```js
npm i styled-reset
```

```js
import Switch from "./components/Switch";
import { Reset } from "styled-reset";

export default function App() {
  return (
    <>
      <Reset />
      <Switch />
    </>
  );
}
```

설치하고 import해서 쓰기만 하면 default로 먹어있는 스타일이 reset 된다.

## global style을 만들어 보자

참고

/styles/GlobalStyle.ts

**이 모든 것들은 theme을 활용할 때 빛난다.**

## theme

```js
const defaultTheme = {
  colors: {
    background: "#FFF",
    text: "#000",
    primary: "#F00",
    secondary: "#00F",
  },
};

export default defaultTheme;
```

이런 식으로 잡아주고,

타입을 정해 DefaultTheme을 기준으로 프로퍼티가 추가되거나 제거된 걸 알수 있다.

```js

참고 !!

Theme.ts

defaultTheme.ts

darkTheme.ts
```

이렇게 타이핑해주고 GlobalStyle에 태운다 !

```js
// GlobalStyle.ts

 body {
  font-size: 1.6rem;
  background: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.background};
 }

```

이렇게 하면 colors 두 곳에 빨간줄이 쳐지는데, 타입 문제이다.

d.ts 파일로 타입 정해줘야함.

```js
import 'styled-components';

declare module 'styled-components' {
 export interface DefaultTheme extends Theme {
  colors: {
   background: string;
   text: string;
   primary: string;
   secondary: string;
  }
 }
}
```

type을 정의하고 defaultTheme을 맞추는 게 불편하니,

반대로 defaultTheme에서 타입을 추출하자.

```js
import defaultTheme from "./defaultTheme";

type Theme = typeof defaultTheme;

export default Theme;
```

## window.matchMedia is not a function error

다크모드, 토글 버튼까지 구현하고 나면 에러가 난다.

Jest 공식문서에 내용이 있다.

테스트 최상단에 공식문서의 코드를 붙여줘야함. setupTests.ts 참고.
