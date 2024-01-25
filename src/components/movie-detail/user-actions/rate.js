"use client";
import { useEffect, useRef, useState } from "react";
import Button from "../../ui/button";

const UserRate = () => {
  const [rate, setRate] = useState(null);
  const [useReset, setUseReset] = useState(false);
  const ref = useRef();
  const handleSubmitRate = () => {
    console.log(rate);
  };
  const handleRateChange = () => {
    setRate(ref.current.value);
  };

  useEffect(() => {
    if (useReset) {
      handleSubmitRate();
      setUseReset(false);
    }
  }, [useReset]);
  const handleResetRate = () => {
    setRate(null);
    setUseReset(true);
    ref.current.value = "5";
  };

  return (
    <div className="mb-6 pb-6 border-b border-color3">
      <p className="font-bold text-lg">Rate</p>
      <div>
        <input
          id="rate"
          type="range"
          ref={ref}
          min="0"
          max="10"
          step="0.1"
          className="w-full h-2 bg-color3 rounded-lg appearance-none cursor-pointer dark:text-color3 accent-color5"
          onChange={handleRateChange}
          onMouseUp={handleSubmitRate}
          onTouchEnd={handleSubmitRate}
        />
        {rate && (
          <div>
            <p className="mb-2">
              Your rate: <span className="font-bold text-2xl">{rate}</span>
            </p>
            <Button handleClick={handleResetRate}>Remove Rate</Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserRate;
