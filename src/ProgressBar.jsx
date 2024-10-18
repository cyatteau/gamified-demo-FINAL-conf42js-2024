const ProgressBar = ({ xp }) => {
  const progressPercentage = xp % 100;

  return (
    <>
      <div
        style={{
          height: "20px",
          border: "1px solid #000",
        }}
      >
        <div
          style={{
            width: `${progressPercentage}%`,
            backgroundColor: "#4caf50",
            height: "100%",
          }}
        ></div>
      </div>
    </>
  );
};

export default ProgressBar;
