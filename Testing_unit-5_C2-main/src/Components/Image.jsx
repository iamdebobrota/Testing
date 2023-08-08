
export const Image = ({ src, alt, borderRadius, width, height, fit }) => {
  return (
    <div>
 
      <img alt={alt} src={src} data-testid="image" height={height}
      width={width} 
      style={{height:height, borderRadius:borderRadius, objectFit:fit}} />
  
    </div>
  );
};
