import { memo, useMemo, useState } from "react";

const SlowComponent = memo(function SlowComponent({ dataObj }) {
  // If this is too slow on your maching, reduce the `length`
  const words = Array.from({ length: 100_000 }, () => "WORD");
  return (
    <ul>
      {words.map((word, i) => (
        <li key={i}>
          {i}: {word} : {dataObj.title}
        </li>
      ))}
    </ul>
  );
});
// function Counter({ children }) {
//   const [count, setCount] = useState(0);
//   return (
//     <div>
//       <h1>Slow counter?!?</h1>
//       <button onClick={() => setCount((c) => c + 1)}>Increase: {count}</button>
//       {children}
//     </div>
//   );
// }
// export default function Test() {
//   return (
//     <div>
//       <Counter>
//         <SlowComponent />
//       </Counter>
//     </div>
//   );
// }

export default function Test() {
  const [count, setCount] = useState(0);
  const dataObj = useMemo(() => {
    return {
      title: "Slow",
      description: "Component",
    };
  }, []);

  return (
    <div>
      <h1>Slow counter?!?</h1>
      <button onClick={() => setCount((c) => c + 1)}>Increase: {count}</button>
      <SlowComponent dataObj={dataObj} />
    </div>
  );
}
