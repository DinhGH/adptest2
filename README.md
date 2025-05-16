# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


2. Component mẫu (ví dụ PrimeModal.js)
jsx
Copy
Edit
import React, { useState } from 'react';

const commonStyles = {
  container: {
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    marginBottom: '15px',
  },
  button: {
    padding: '10px 15px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  result: {
    marginTop: '15px',
    fontWeight: 'bold',
  },
};

function isPrime(num) {
  if (num <= 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }
  return true;
}

export default function PrimeModal() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    const numbers = input
      .trim()
      .split(/\s+/)
      .map(Number)
      .filter(n => !isNaN(n));
    const primes = numbers.filter(isPrime);
    setResult(primes.length ? primes.join(', ') : 'No prime numbers found');
  };

  return (
    <div style={commonStyles.container}>
      <h2>Prime Numbers</h2>
      <input
        style={commonStyles.input}
        type="text"
        placeholder="Enter numbers separated by space"
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <button style={commonStyles.button} onClick={handleCalculate}>Calculate</button>
      {result !== null && <div style={commonStyles.result}>{result}</div>}
    </div>
  );
}
3. Các component còn lại chỉ thay đổi logic xử lý và tiêu đề, style giống nhau
Mình sẽ viết toàn bộ các component theo logic tương tự. Bạn có thể copy và dán.

PositiveModal.js
jsx
Copy
Edit
import React, { useState } from 'react';

const commonStyles = {
  container: {
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    marginBottom: '15px',
  },
  button: {
    padding: '10px 15px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  result: {
    marginTop: '15px',
    fontWeight: 'bold',
  },
};

export default function PositiveModal() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    const numbers = input
      .trim()
      .split(/\s+/)
      .map(Number)
      .filter(n => !isNaN(n));
    const positives = numbers.filter(n => n > 0);
    setResult(positives.length ? positives.join(', ') : 'No positive numbers found');
  };

  return (
    <div style={commonStyles.container}>
      <h2>Positive Numbers</h2>
      <input
        style={commonStyles.input}
        type="text"
        placeholder="Enter numbers separated by space"
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <button style={commonStyles.button} onClick={handleCalculate}>Calculate</button>
      {result !== null && <div style={commonStyles.result}>{result}</div>}
    </div>
  );
}
OddModal.js
jsx
Copy
Edit
import React, { useState } from 'react';

const commonStyles = {
  container: {
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    marginBottom: '15px',
  },
  button: {
    padding: '10px 15px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  result: {
    marginTop: '15px',
    fontWeight: 'bold',
  },
};

export default function OddModal() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    const numbers = input
      .trim()
      .split(/\s+/)
      .map(Number)
      .filter(n => !isNaN(n));
    const odds = numbers.filter(n => n % 2 !== 0);
    setResult(odds.length ? odds.join(', ') : 'No odd numbers found');
  };

  return (
    <div style={commonStyles.container}>
      <h2>Odd Numbers</h2>
      <input
        style={commonStyles.input}
        type="text"
        placeholder="Enter numbers separated by space"
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <button style={commonStyles.button} onClick={handleCalculate}>Calculate</button>
      {result !== null && <div style={commonStyles.result}>{result}</div>}
    </div>
  );
}
EvenModal.js
jsx
Copy
Edit
import React, { useState } from 'react';

const commonStyles = {
  container: {
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    marginBottom: '15px',
  },
  button: {
    padding: '10px 15px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  result: {
    marginTop: '15px',
    fontWeight: 'bold',
  },
};

export default function EvenModal() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    const numbers = input
      .trim()
      .split(/\s+/)
      .map(Number)
      .filter(n => !isNaN(n));
    const evens = numbers.filter(n => n % 2 === 0);
    setResult(evens.length ? evens.join(', ') : 'No even numbers found');
  };

  return (
    <div style={commonStyles.container}>
      <h2>Even Numbers</h2>
      <input
        style={commonStyles.input}
        type="text"
        placeholder="Enter numbers separated by space"
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <button style={commonStyles.button} onClick={handleCalculate}>Calculate</button>
      {result !== null && <div style={commonStyles.result}>{result}</div>}
    </div>
  );
}
ReverseModal.js
jsx
Copy
Edit
import React, { useState } from 'react';

const commonStyles = {
  container: {
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    marginBottom: '15px',
  },
  button: {
    padding: '10px 15px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  result: {
    marginTop: '15px',
    fontWeight: 'bold',
  },
};

export default function ReverseModal() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    const items = input.trim().split(/\s+/);
    const reversed = items.reverse();
    setResult(reversed.length ? reversed.join(' ') : 'No numbers entered');
  };

  return (
    <div style={commonStyles.container}>
      <h2>Reverse Numbers</h2>
      <input
        style={commonStyles.input}
        type="text"
        placeholder="Enter numbers separated by space"
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <button style={commonStyles.button} onClick={handleCalculate}>Calculate</button>
      {result !== null && <div style={commonStyles.result}>{result}</div>}
    </div>
  );
}
SumDigitsModal.js
jsx
Copy
Edit
import React, { useState } from 'react';

const commonStyles = {
  container: {
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    marginBottom: '15px',
  },
  button: {
    padding: '10px 15px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  result: {
    marginTop: '15px',
    fontWeight: 'bold',
  },
};

export default function SumDigitsModal() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    const numbers = input
      .trim()
      .split(/\s+/)
      .map(Number)
      .filter(n => !isNaN(n));

    const sumDigits = numbers.reduce((total, num) => {
      const sum = Math.abs(num)
        .toString()
        .split('')
        .reduce((s, d) => s + Number(d), 0);
      return total + sum;
    }, 0);

    setResult(`Sum of digits: ${sumDigits}`);
  };

  return (
    <div style={commonStyles.container}>
      <h2>Sum Digits</h2>
      <input
        style={commonStyles.input}
        type="text"
        placeholder="Enter numbers separated by space"
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <button style={commonStyles.button} onClick={handleCalculate}>Calculate</button>
      {result !== null && <div style={commonStyles.result}>{result}</div>}
    </div>
  );
}
MinModal.js
jsx
Copy
Edit
import React, { useState } from 'react';

const commonStyles = {
  container: {
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    marginBottom: '15px',
  },
  button: {
    padding: '10px 15px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  result: {
    marginTop: '15px',
    fontWeight: 'bold',
  },
};

export default function MinModal() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    const numbers = input
      .trim()
      .split(/\s+/)
      .map(Number)
      .filter(n => !isNaN(n));

    if (numbers.length === 0) {
      setResult('No numbers entered');
      return;
    }

    const minNum = Math.min(...numbers);
    setResult(`Minimum number: ${minNum}`);
  };

  return (
    <div style={commonStyles.container}>
      <h2>Find Minimum</h2>
      <input
        style={commonStyles.input}
        type="text"
        placeholder="Enter numbers separated by space"
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <button style={commonStyles.button} onClick={handleCalculate}>Calculate</button>
      {result !== null && <div style={commonStyles.result}>{result}</div>}
    </div>
  );
}






ChatGPT said:
= () => {
const numbers = input
.trim()
.split(/\s+/)
.map(Number)
.filter(n => !isNaN(n));
// reverse the array
const reversed = numbers.reverse();
setResult(reversed.length ? reversed.join(', ') : 'No numbers entered');
};

return (
<div style={commonStyles.container}>
<h2>Reverse Numbers</h2>
<input
style={commonStyles.input}
type="text"
placeholder="Enter numbers separated by space"
value={input}
onChange={e => setInput(e.target.value)}
/>
<button style={commonStyles.button} onClick={handleCalculate}>Calculate</button>
{result !== null && <div style={commonStyles.result}>{result}</div>}
</div>
);
}

pgsql
Copy
Edit

---

### SumDigitsModal.js

```jsx
import React, { useState } from 'react';

const commonStyles = {
  container: {
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    marginBottom: '15px',
  },
  button: {
    padding: '10px 15px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  result: {
    marginTop: '15px',
    fontWeight: 'bold',
  },
};

function sumDigits(n) {
  return String(Math.abs(n))
    .split('')
    .reduce((acc, d) => acc + Number(d), 0);
}

export default function SumDigitsModal() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    const numbers = input
      .trim()
      .split(/\s+/)
      .map(Number)
      .filter(n => !isNaN(n));
    const sums = numbers.map(sumDigits);
    setResult(sums.length ? sums.join(', ') : 'No numbers entered');
  };

  return (
    <div style={commonStyles.container}>
      <h2>Sum Digits</h2>
      <input
        style={commonStyles.input}
        type="text"
        placeholder="Enter numbers separated by space"
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <button style={commonStyles.button} onClick={handleCalculate}>Calculate</button>
      {result !== null && <div style={commonStyles.result}>{result}</div>}
    </div>
  );
}
MinModal.js
jsx
Copy
Edit
import React, { useState } from 'react';

const commonStyles = {
  container: {
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    marginBottom: '15px',
  },
  button: {
    padding: '10px 15px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  result: {
    marginTop: '15px',
    fontWeight: 'bold',
  },
};

export default function MinModal() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    const numbers = input
      .trim()
      .split(/\s+/)
      .map(Number)
      .filter(n => !isNaN(n));
    if (numbers.length === 0) {
      setResult('No numbers entered');
      return;
    }
    const minVal = Math.min(...numbers);
    setResult(`Minimum value: ${minVal}`);
  };

  return (
    <div style={commonStyles.container}>
      <h2>Find Minimum</h2>
      <input
        style={commonStyles.input}
        type="text"
        placeholder="Enter numbers separated by space"
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <button style={commonStyles.button} onClick={handleCalculate}>Calculate</button>
      {result !== null && <div style={commonStyles.result}>{result}</div>}
    </div>
  );
}
MaxModal.js
jsx
Copy
Edit
import React, { useState } from 'react';

const commonStyles = {
  container: {
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    marginBottom: '15px',
  },
  button: {
    padding: '10px 15px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  result: {
    marginTop: '15px',
    fontWeight: 'bold',
  },
};

export default function MaxModal() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    const numbers = input
      .trim()
      .split(/\s+/)
      .map(Number)
      .filter(n => !isNaN(n));
    if (numbers.length === 0) {
      setResult('No numbers entered');
      return;
    }
    const maxVal = Math.max(...numbers);
    setResult(`Maximum value: ${maxVal}`);
  };

  return (
    <div style={commonStyles.container}>
      <h2>Find Maximum</h2>
      <input
        style={commonStyles.input}
        type="text"
        placeholder="Enter numbers separated by space"
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <button style={commonStyles.button} onClick={handleCalculate}>Calculate</button>
      {result !== null && <div style={commonStyles.result}>{result}</div>}
    </div>
  );
}
