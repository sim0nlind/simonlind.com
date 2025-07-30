import type { MetaFunction } from "@remix-run/node";
import { createMetaTags } from "~/utils/meta";
import { motion, useMotionValue, useTransform, animate } from "motion/react";
import { useState, useEffect, useRef } from "react";
import styles from "../styles/lab.003.module.css";

export const meta: MetaFunction = () => {
  return createMetaTags({
    title: "Lab experiment 003 | Simon Lind",
    description: "Lab experiment 003",
    url: "https://simonlind.com/lab/003",
  });
};

function AnimatedInput({
  value,
  onChange,
  ...props
}: {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  [key: string]: any;
}) {
  const motionValue = useMotionValue(parseFloat(value) || 0);
  const rounded = useTransform(motionValue, (latest) =>
    Math.round(latest).toString()
  );
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const numValue = parseFloat(value) || 0;
    const controls = animate(motionValue, numValue, {
      duration: 0.3,
      ease: "easeOut",
    });

    // Update the actual input value during animation
    const unsubscribe = motionValue.on("change", (latest) => {
      if (inputRef.current) {
        inputRef.current.value = Math.round(latest).toString();
      }
    });

    return () => {
      controls.stop();
      unsubscribe();
    };
  }, [motionValue, value]);

  return <input ref={inputRef} onChange={onChange} {...props} />;
}

function AnimatedNumber({ value }: { value: number }) {
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => Math.round(latest));

  useEffect(() => {
    const controls = animate(motionValue, value, {
      duration: 0.5,
      ease: "easeOut",
    });
    return controls.stop;
  }, [motionValue, value]);

  return <motion.span>{rounded}</motion.span>;
}

export default function Lab003() {
  const [step, setStep] = useState(1);
  const [ethAmount, setEthAmount] = useState("");

  const handleNext = () => {
    if (step === 1 && ethAmount) {
      setStep(2);
    } else if (step === 2) {
      setStep(3);
    }
  };

  const handleCancel = () => {
    setStep(1);
    setEthAmount("");
  };

  const handleIncrement = () => {
    const currentValue = parseInt(ethAmount) || 0;
    setEthAmount((currentValue + 1).toString());
  };

  const handleDecrement = () => {
    const currentValue = parseInt(ethAmount) || 0;
    if (currentValue > 0) {
      setEthAmount(Math.max(0, currentValue - 1).toString());
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <h1>Purchase ETH</h1>
            <div className={styles.inputGroup}>
              <button
                type="button"
                className={styles.incrementButton}
                onClick={handleDecrement}
              >
                −
              </button>
              <AnimatedInput
                type="number"
                value={ethAmount}
                onChange={(e) => setEthAmount(e.target.value)}
                placeholder="0"
                min="0"
                step="1"
              />
              <button
                type="button"
                className={styles.incrementButton}
                onClick={handleIncrement}
              >
                +
              </button>
            </div>
            <button onClick={handleNext} disabled={!ethAmount}>
              Next
            </button>
          </motion.div>
        );

      case 2:
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <h1>Confirm purchase</h1>
            <p>
              You are about to purchase{" "}
              <AnimatedNumber value={parseFloat(ethAmount) || 0} /> ETH
            </p>
            <div>
              <button onClick={handleCancel}>Cancel</button>
              <button onClick={handleNext}>Confirm</button>
            </div>
          </motion.div>
        );

      case 3:
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1>Purchase complete</h1>
            <p>
              You have purchased{" "}
              <AnimatedNumber value={parseFloat(ethAmount) || 0} /> ETH
            </p>
            <button onClick={handleCancel}>Start over</button>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return <div className={styles.container}>{renderStep()}</div>;
}
