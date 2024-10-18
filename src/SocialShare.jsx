const SocialShare = ({ xp }) => {
  const shareOnX = () => {
    const url = `https://twitter.com/intent/tweet?text=I%20just%20earned%20${xp}%20XP%20in%20my%20Gamified%20App!`;
    window.open(url, "_blank");
  };

  return (
    <div>
      <button onClick={shareOnX}>Share on X</button>
    </div>
  );
};

export default SocialShare;
