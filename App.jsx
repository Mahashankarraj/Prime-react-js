import React, { useState } from 'react';

const PrimeChecker = () => {
    const [number, setNumber] = useState('');
    const [isPrime, setIsPrime] = useState(null);

    const handleChange = (e) => {
        setNumber(e.target.value);
    };

    const checkPrime = (num) => {
        if (num <= 1) return false;
        for (let i = 2; i < num; i++) {
            if (num % i === 0) return false;
        }
        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const num = parseInt(number, 10);
        if (isNaN(num)) {
            setIsPrime(null);
            return;
        }
        setIsPrime(checkPrime(num));
    };

    return (
        <div>
            <h2>Prime Number Checker</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={number}
                    onChange={handleChange}
                    placeholder="Enter a number"
                />
                <button type="submit">Check</button>
            </form>
            {isPrime !== null && (
                <p>{number} is {isPrime ? 'a prime number' : 'not a prime number'}.</p>
            )}
        </div>
    );
};

export default PrimeChecker;
