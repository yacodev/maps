import reactLogo from '../logo.svg';

export const ReactLogo = () => {
  return (
    <img
      src={reactLogo}
      alt='react logo'
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: 999,
        width: '130px',
      }}
    />
  );
};
