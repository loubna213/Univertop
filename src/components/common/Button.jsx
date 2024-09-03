const Button = ({ children, type, color }) => {
    return (
      <button
        className={`text-white text-xs md:text-lg cursor-pointer font-semibold rounded-md border-none outline-none py-2 px-2 md:py-3 md:px-6`}
        style={type === 'primary' ? { backgroundColor: color } : {border: `2px solid ${color}`, color: color}}
      >
        {children}
      </button>
    );
  };
  
  export default Button;
  