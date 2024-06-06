const ProgressBar = ({ progress }) => {
  let color;

  if (progress >= 0 && progress <= 25) {
    color = 'rgb(255, 175, 163)'; // Use specific RGB or HEX values if needed
  } else if (progress > 26 && progress <= 50) {
    color = 'rgb(245, 228, 73)';
  } else if (progress > 51 && progress <= 75) {
    color = 'rgb(175, 247, 250)';
  } else if (progress > 76 && progress <= 100) {
    color = 'rgb(141, 181, 145)';
  }

  return (
    <div className="outer-bar">
      <div
        className="inner-bar"
        style={{ width: `${progress}%`, backgroundColor: color, height: '100%' }}
      ></div>
    </div>
  );
}

export default ProgressBar;
