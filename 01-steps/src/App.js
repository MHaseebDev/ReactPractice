import { useState, useEffect } from "react";

// const messages = [
//   "Learn React ⚛️",
//   "Apply for jobs 💼",
//   "Invest your new income 🤑",
// ];

// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

export default function App() {
  const [number, setNumber] = useState(1);
  useEffect(() => {
    // setNumber((n) => n + 1);
  });

  return (
    <div>
      <Button key={number}>{number}</Button>
    </div>
  );
}

// export default function App() {
//   const [amount, setAmount] = useState(1);
//   const [from, setFrom] = useState("EUR");
//   const [to, setTo] = useState("USD");
//   const [convertedAmount, setConvertedAmount] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     const conversion = async () => {
//       try {
//         setIsLoading(true);
//         const res = await fetch(
//           `https://api.frankfurter.app/latest?amount=${amount}&from=${from}&to=${to}`
//         );
//         const data = await res.json();

//         setConvertedAmount(data.rates[to]);
//       } catch (err) {
//         console.log(err.message);
//       } finally {
//         setIsLoading(false);
//       }
//     };
//     if (!amount) return;
//     if (from === to) {
//       setConvertedAmount(amount);
//       return;
//     }
//     conversion();
//   }, [amount, from, to]);

//   return (
//     <div>
//       <input
//         type="text"
//         onChange={(e) => setAmount(Number(e.target.value))}
//         value={amount}
//         disabled={isLoading}
//       />
//       <select
//         value={from}
//         onChange={(e) => setFrom(e.target.value)}
//         disabled={isLoading}
//       >
//         <option value="USD">USD</option>
//         <option value="EUR">EUR</option>
//         <option value="CAD">CAD</option>
//         <option value="INR">INR</option>
//       </select>
//       <select
//         value={to}
//         onChange={(e) => setTo(e.target.value)}
//         disabled={isLoading}
//       >
//         <option value="USD">USD</option>
//         <option value="EUR">EUR</option>
//         <option value="CAD">CAD</option>
//         <option value="INR">INR</option>
//       </select>
//       <p>
//         {convertedAmount} {to}
//       </p>
//     </div>
//   );
// }

// export default function App() {
//   const [bill, setBill] = useState("");
//   const [tip, setTip] = useState(0);
//   const [friendTip, setFriendTip] = useState(0);

//   const totalTip = bill * ((tip + friendTip) / 2 / 100);

//   const handleReset = () => {
//     setBill("");
//     setTip(0);
//     setFriendTip(0);
//   };
//   return (
//     <div>
//       <BillInput bill={bill} onBillChange={setBill} />
//       <SelectPercentage tip={tip} onTipChange={setTip}>
//         <h2>How did you like the service?</h2>
//       </SelectPercentage>
//       <SelectPercentage tip={friendTip} onTipChange={setFriendTip}>
//         <h2>How did your friend like the service?</h2>
//       </SelectPercentage>
//       {bill && (
//         <>
//           <TotalBill bill={bill} totalTip={totalTip} />
//           <Button onClick={handleReset}>Reset</Button>
//         </>
//       )}

//       {/* <Steps /> */}
//       {/* <Steps /> */}
//       {/* <Test /> */}
//     </div>
//   );
// }

// function BillInput({ bill, onBillChange }) {
//   return (
//     <h2>
//       How much was the bill?{" "}
//       <input
//         type="text"
//         value={bill}
//         onChange={(e) => onBillChange(Number(e.target.value))}
//       />
//     </h2>
//   );
// }

// function SelectPercentage({ children, tip, onTipChange }) {
//   return (
//     <div className="percentage">
//       {children}
//       <select value={tip} onChange={(e) => onTipChange(Number(e.target.value))}>
//         <option value={0}>Dissatisfied (0%)</option>
//         <option value={5}>It was okay (5%)</option>
//         <option value={10}>It was good (10%)</option>
//         <option value={20}>Absolutely amazing! (20%)</option>
//       </select>
//     </div>
//   );
// }

// function TotalBill({ bill, totalTip }) {
//   return (
//     <h1>
//       You pay ${bill + totalTip} (${bill} + ${totalTip})
//     </h1>
//   );
// }
// function Test() {
//   const [step, setStep] = useState(1);
//   const [counter, setCounter] = useState(0);
//   const date = new Date();
//   date.setDate(date.getDate() + counter);
//   // const [date, setDate] = useState(new Date().toDateString());

//   const handleCounterIncrement = function () {
//     setCounter((c) => c + step);
//     // setDate(
//     //   new Date(
//     //     new Date().getTime() + (counter + step) * 24 * 60 * 60 * 1000
//     //   ).toDateString()
//     // );
//   };
//   const handleCounterDecrement = function () {
//     setCounter((c) => c - step);
//     // setDate(
//     //   new Date(
//     //     new Date().getTime() + (counter - step) * 24 * 60 * 60 * 1000
//     //   ).toDateString()
//     // );
//   };
//   const handleCounterChange = function (e) {
//     setCounter(Number(e.target.value));
//   };
//   const handleSliderChange = function (e) {
//     setStep(Number(e.target.value));
//   };
//   const handleReset = function () {
//     setStep(1);
//     setCounter(0);
//   };
//   return (
//     <div className="steps">
//       <div className="steps-inside">
//         {/* <button onClick={() => setStep((s) => s - 1)}>-</button>
//         <div> Step: {step} </div>
//         <button onClick={() => setStep((s) => s + 1)}>+</button> */}

//         <input
//           type="range"
//           min="0"
//           max="10"
//           value={step}
//           onChange={handleSliderChange}
//         />
//         <div> {step} </div>
//       </div>
//       <div className="steps-inside">
//         <button onClick={handleCounterDecrement}>-</button>
//         <input type="number" value={counter} onChange={handleCounterChange} />
//         {/* <div>Counter: {counter}</div> */}
//         <button onClick={handleCounterIncrement}>+</button>
//       </div>

//       <p>
//         <span>
//           {counter === 0
//             ? "Today is "
//             : counter > 0
//             ? `${counter} day${counter === 1 ? "" : "s"} from today is `
//             : `${Math.abs(counter)} day${counter === -1 ? "" : "s"} ago was `}
//         </span>
//         {date.toDateString()}
//       </p>

//       {(step !== 1 || counter !== 0) && (
//         <div>
//           <button onClick={handleReset}> Reset </button>
//         </div>
//       )}
//     </div>
//   );
// }

// function Steps() {
//   const [step, setStep] = useState(1);
//   const [isOpen, setIsOpen] = useState(true);
//   // const [test, setTest] = useState({ name: "Haseeb" });

//   const handlePrevious = function () {
//     step > 1 && setStep((s) => s - 1);
//   };
//   const handleNext = function () {
//     step < 3 && setStep((s) => s + 1);

//     //BAD PRACTICE
//     // test.name = "Fred";

//     // GOOD PRACTICE
//     // setTest({ name: "Hammad" });
//   };
//   return (
//     <>
//       <button className="close" onClick={() => setIsOpen((is) => !is)}>
//         {isOpen ? "✖" : "✔"}
//       </button>
//       {isOpen && (
//         <div className="steps">
//           <div className="numbers">
//             <div className={step >= 1 ? "active" : ""}>1</div>
//             <div className={step >= 2 ? "active" : ""}>2</div>
//             <div className={step >= 3 ? "active" : ""}>3</div>
//           </div>

//           <p className="message">
//             Step {step}: {messages[step - 1]}
//           </p>

//           <div className="buttons">
//             <Button bgColor="#7950f2" textColor="#fff" onClick={handlePrevious}>
//               <span>👈</span>Previous
//             </Button>
//             <Button bgColor="#7950f2" textColor="#fff" onClick={handleNext}>
//               Next<span>👉</span>
//             </Button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

function Button({ bgColor, textColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
