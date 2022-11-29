import { useEffect, useState } from "react";

const tabs = ["posts", "comments", "albums"];

function Content() {
  const [count, setCount] = useState(1);
  const [avatar, setAvatar] = useState("");

  useEffect(() => {
    return () => {
      URL.revokeObjectURL(avatar.preview);
    };
  }, [avatar]);

  const handlePreviewAvatar = (e) => {
    const file = e.target.files[0];

    file.preview = URL.createObjectURL(file);
    console.log(URL.createObjectURL(file));
    setAvatar(file);
  };

  return (
    <div>
      <input type="file" onChange={handlePreviewAvatar} />
      {avatar && <img src={avatar.preview} alt="" width="80%" />}
    </div>
  );
}

export default Content;
