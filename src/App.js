import React, { useState } from 'react';
import PrimeModal from './components/PrimeModal';
import PositiveModal from './components/PositiveModal';
import OddModal from './components/OddModal';
import EvenModal from './components/EvenModal';
import ReverseModal from './components/ReverseModal';
import SumDigitsModal from './components/SumDigitsModal';
import MinModal from './components/MinModal';
import MaxModal from './components/MaxModal';

function App() {
  const [selectedModal, setSelectedModal] = useState('');

  const renderModal = () => {
    switch (selectedModal) {
      case 'prime': return <PrimeModal />;
      case 'positive': return <PositiveModal />;
      case 'odd': return <OddModal />;
      case 'even': return <EvenModal />;
      case 'reverse': return <ReverseModal />;
      case 'sumdigits': return <SumDigitsModal />;
      case 'min': return <MinModal />;
      case 'max': return <MaxModal />;
      default: return null;
    }
  };

  const styles = {
    container: {
      fontFamily: 'Segoe UI, sans-serif',
      backgroundColor: '#f0f4f8',
      minHeight: '100vh',
      padding: '20px',
    },
    title: {
      textAlign: 'center',
      color: '#333',
    },
    menu: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      listStyle: 'none',
      padding: 0,
      marginTop: '20px',
      marginBottom: '30px',
    },
    menuItem: {
      backgroundColor: '#007bff',
      color: '#fff',
      padding: '10px 15px',
      borderRadius: '5px',
      margin: '5px',
      cursor: 'pointer',
      transition: '0.3s',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Number Tool Menu</h1>
      <ul style={styles.menu}>
        <li style={styles.menuItem} onClick={() => setSelectedModal('prime')}>Prime Numbers</li>
        <li style={styles.menuItem} onClick={() => setSelectedModal('positive')}>Positive Numbers</li>
        <li style={styles.menuItem} onClick={() => setSelectedModal('odd')}>Odd Numbers</li>
        <li style={styles.menuItem} onClick={() => setSelectedModal('even')}>Even Numbers</li>
        <li style={styles.menuItem} onClick={() => setSelectedModal('reverse')}>Reverse Numbers</li>
        <li style={styles.menuItem} onClick={() => setSelectedModal('sumdigits')}>Sum Digits</li>
        <li style={styles.menuItem} onClick={() => setSelectedModal('min')}>Find Minimum</li>
        <li style={styles.menuItem} onClick={() => setSelectedModal('max')}>Find Maximum</li>
      </ul>

      {renderModal()}
    </div>
  );
}

export default App;
