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
