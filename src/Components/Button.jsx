const Button = ({ children }) => {
  return (
    <button className="border-gray-500 border-2 p-4 hover:bg-blue-500 hover:border-none rounded-2xl dark:bg-slate-200">
      {children}
    </button>
  );
};

export default Button;
