const Button = ({
  children,
  leftIcon,
  rightIcon,
  className,
  onClick,
  ...props
}: {
  children: React.ReactNode;
  leftIcon: React.ReactNode;
  rightIcon: React.ReactNode;
  className: string;
  onClick: () => Promise<void> | void | undefined;
}) => {
  return (
    <button
      className={`${className} p-2 border text-base text-gray-600 rounded-xl shadow-lg bg-white hover:text-gray-800 hover:bg-slate-100 md:transition md:ease-in-out md:delay-150 md:hover:-translate-y-1`}
      onClick={onClick}
      {...props}
    >
      {leftIcon && <span>{leftIcon}</span>}
      <span className="mx-2">{children}</span>
      {rightIcon && <span>{rightIcon}</span>}
    </button>
  );
};

export default Button;
