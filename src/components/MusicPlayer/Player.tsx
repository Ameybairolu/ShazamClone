/* eslint-disable jsx-a11y/media-has-caption */
import React, { useRef, useEffect, SyntheticEvent } from "react";

const Player: React.FunctionComponent<{
	activeSong: any;
	isPlaying: boolean;
	volume: number;
	seekTime: number;
	onEnded: any;
	onTimeUpdate: (event: SyntheticEvent<HTMLAudioElement, Event>) => void;
	onLoadedData: (event: SyntheticEvent<HTMLAudioElement, Event>) => void;
	repeat: boolean;
	currentIndex: number;
}> = ({
	activeSong,
	isPlaying,
	volume,
	seekTime,
	onEnded,
	onTimeUpdate,
	onLoadedData,
	repeat,
	currentIndex,
}) => {
	const ref = useRef<HTMLAudioElement>(null);
	// eslint-disable-next-line no-unused-expressions
	if (ref.current) {
		if (isPlaying) {
			ref.current.play();
		} else {
			ref.current.pause();
		}
	}

	useEffect(() => {
		if (ref.current) {
			ref.current.volume = volume;
		}
	}, [volume]);
	// updates audio element only on seekTime change (and not on each rerender):
	useEffect(() => {
		if (ref.current) {
			ref.current.currentTime = seekTime;
		}
	}, [seekTime]);

	return (
		<audio
			src={activeSong?.hub?.actions[1]?.uri}
			ref={ref}
			loop={repeat}
			onEnded={onEnded}
			onTimeUpdate={(event: SyntheticEvent<HTMLAudioElement, Event>) =>
				onTimeUpdate(event)
			}
			onLoadedData={(event: SyntheticEvent<HTMLAudioElement, Event>) =>
				onLoadedData(event)
			}
		/>
	);
};

export default Player;
