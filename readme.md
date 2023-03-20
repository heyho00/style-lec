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
