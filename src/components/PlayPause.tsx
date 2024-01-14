import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";
import { RootObject } from "../redux/services/shazamInterfaces";

const PlayPause: React.FunctionComponent<{
    song: RootObject;
    isPlaying?: boolean;
    activeSong: any;
    handlePause: () => void;
    handlePlay: () => void;
}> = ({ isPlaying, activeSong, song, handlePause, handlePlay }) =>
    isPlaying && activeSong?.title === song.title ? (
        <FaPauseCircle size={35} className="text-gray-300" onClick={handlePause} />
    ) : (
        <FaPlayCircle size={35} className="text-gray-300" onClick={handlePlay} />
    );

export default PlayPause;
