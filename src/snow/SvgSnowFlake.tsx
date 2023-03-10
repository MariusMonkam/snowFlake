import React from 'react';
import {useVideoConfig, interpolate, useCurrentFrame, spring} from 'remotion';

export type svgProps = {
	color: string;
	delay: number;
	x: string;
	size: number;
};

const SvgSnowFlake: React.FC<svgProps> = ({color, delay, x, size}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const drop = spring({
		fps,
		frame: frame - delay,
		config: {
			damping: 300,
		},
	});

	const top = interpolate(drop, [0, 1], [-0.2, 2]);

	return (
		<svg
			viewBox="0 0 400 400"
			fill={color}
			style={{
				position: 'absolute',
				left: x,
				top: top * 150 + '%',
				transform: `scale(${size})`,
			}}
		>
			<path
				xmlns="http://www.w3.org/2000/svg"
				d="M22.5 44v-9.75l-7.45 7.45-2.15-2.1 9.6-9.6v-4.5H18l-9.4 9.4-2.2-2.05 7.35-7.35H4v-3h9.75L6.25 15l2.15-2.15L18 22.5h4.5v-4.55l-9.4-9.4 2.1-2.2 7.3 7.35V4h3v9.7L33 6.2l2.1 2.15-9.6 9.6v4.55h4.55l9.45-9.45 2.15 2.1-7.35 7.35H44v3h-9.7l7.4 7.45-2.05 2.15-9.6-9.6H25.5V30l9.6 9.65-2.05 2.15-7.55-7.55V44Z"
			/>
		</svg>
	);
};
export default SvgSnowFlake;
