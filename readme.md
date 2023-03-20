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
