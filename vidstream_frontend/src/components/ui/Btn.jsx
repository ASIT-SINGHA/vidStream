function Btn({
  children,
  btnType="button",
  bgColor = "bg-white",
  textColor = "text-black",
  className = "",
  ...props
}) {
  return <button type={btnType} className={` ${bgColor} ${textColor} ${className}`} {... props}>{children}</button>;
}

export default Btn;
