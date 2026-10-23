import { useState, useMemo, useCallback } from "react";

function Optimization() {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  const evenNumbers = useMemo(() => {
    console.log("ლუწი რიცხვების გაფილტვრა...");
    return numbers.filter((num) => num % 2 === 0);
  }, [numbers]);

  const addNumber = useCallback(() => {
    setNumbers((prevNumbers) => [...prevNumbers, prevNumbers.length + 1]);
  }, []);

  return (
    <div
      style={{ padding: "1rem", border: "1px solid #2196F3", margin: "1rem 0" }}
    >
      <h3>3.5 useMemo & useCallback</h3>
      <p>ყველა რიცხვი: {numbers.join(", ")}</p>
      <p>მხოლოდ ლუწი რიცხვები (useMemo): {evenNumbers.join(", ")}</p>

      <button onClick={addNumber}>რიცხვის დამატება (useCallback)</button>
    </div>
  );
}

export default Optimization;
