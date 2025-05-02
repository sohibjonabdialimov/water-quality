import ProgressBar from "@ramonak/react-progress-bar";

const CustomProgressBar = ({
  progress,
  color = "#4caf50",
  height = "20px",
}: {
  progress: number;
  color?: string;
  height?: string;
}) => {
  return (
    <div className="w-full max-w-md mx-auto p-4">
      <ProgressBar
        completed={progress}
        bgColor={color}
        height={height}
        labelColor="#fff"
        baseBgColor="#e0e0e0"
        borderRadius="8px"
        isLabelVisible={true}
        animateOnRender
      />
    </div>
  );
};

export default CustomProgressBar;
