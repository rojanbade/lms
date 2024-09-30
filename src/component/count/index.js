// import React, { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import {
//   decrement,
//   increment,
//   incrementByAmount,
// } from "../../redux/slice/counterSlice";

// const Count = () => {
//   const count = useSelector((state) => state.counter.value);
//   const dispatch = useDispatch();

//   const [amount, setAmount] = useState(0);

//   const handleChange = (e) => {
//     setAmount(parseInt(e.target.value));
//   };

//   return (
//     <div>
//       <button onClick={() => dispatch(increment())}>Increment</button>
//       <h1>{count}</h1>
//       <button onClick={() => dispatch(decrement())}>Decrement</button>
//       <input type="number" value={amount} onChange={handleChange} />
//       <button onClick={() => dispatch(incrementByAmount(amount))}>
//         Increment by amount
//       </button>
//     </div>
//   );
// };

// export default Count;
