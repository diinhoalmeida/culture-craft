import {
  FaCookie,
  FaFileAudio,
  FaFolder,
  FaGamepad,
  FaPaintBrush,
  FaVideo,
} from "react-icons/fa";

export function getIconForType(
  type: "audio" | "video" | "art" | "game" | "movie"
): JSX.Element {
  switch (type) {
    case "audio":
      return <FaFileAudio color="rgb(248,250,252, 10)" />;
    case "video":
      return <FaVideo  color="rgb(248,250,252, 10)" />;
    case "art":
      return <FaPaintBrush color="rgb(248,250,252, 10)" />;
    case "game":
      return <FaGamepad color="rgb(248,250,252, 10)" />;
    case "movie":
      return <FaCookie  color="rgb(248,250,252, 10)" />;
    default:
      return <FaFolder color="rgb(248,250,252, 10)" />;
  }
}
