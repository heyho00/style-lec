import React from "react";
import styled from "styled-components";

export default function Greeting() {
  return (
    // <>
    //   <Paragraph>
    //     Small Hello <strong>!</strong>
    //   </Paragraph>

    //   <BigParagraph>Big hello</BigParagraph>
    // </>
    <SmallHelloWorld />
  );
}

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

const SmallHelloWorld = styled(HelloWorld)`
  // HelloWorld를 상속받아 만든 SmallHelloWorld의 내부 font-size를 줄이고 싶은 것.
  // 안된다. 왜일까?
  /* 일반 태그는 styled(Paragraph) 같은걸 하면 클래스 네임이 부여되는데
  그게 무시되는 것. */
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
