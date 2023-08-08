export const Input = ({
  type,
  size,
  variant,
  rightLogo,
  rightLogoOnClick,
  onChange,
}) => {

  // console.log(rightLogoOnClick);
  return (
    <div className="inputContainer">
      {/* Add Right Logo */}
      <input className={`input`} style={{position:'absolute'}}size={size} variant='outline' type={type} />
      <img src={rightLogo} alt="eye" data-testid="input"
       height='20' style={{position:'relative', left:"280px"}}
       onClick={
        rightLogoOnClick
       }/>
    </div>
  );
};
