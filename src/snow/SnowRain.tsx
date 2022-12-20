import React, {useMemo} from 'react';
import {
	random,
	AbsoluteFill,
	staticFile,
	Img,
	useVideoConfig,
	useCurrentFrame,
	interpolate,
} from 'remotion';
import SvgSnowFlake from './SvgSnowFlake';
import './SnowRain.css';
import Title from './Title';

const dropCount = 200;

const SnowRain: React.FC<{title: string}> = ({title}) => {
	const {durationInFrames} = useVideoConfig();
	const frame = useCurrentFrame();

	// Fade out the animation at the end
	const opacity = interpolate(
		frame,
		[durationInFrames - 25, durationInFrames - 15],
		[1, 0],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);

	const drops = useMemo(() => {
		return new Array(dropCount).fill(true).map((_, i) => {
			const x = random('x' + i) * 100 + '%';
			const delay = random('delay' + i) * 60;
			const size = random('size' + i) + 0.2;
			return {x, delay, size};
		});
	}, []);
	return (
		<AbsoluteFill style={{backgroundColor: '#8e0e11f9 '}}>
			<AbsoluteFill>
				{drops.map((d) => {
					return (
						<SvgSnowFlake
							key={d.x}
							color="#ECECEE"
							x={d.x}
							delay={d.delay}
							size={d.size}
						/>
					);
				})}
			</AbsoluteFill>
			<AbsoluteFill>
				<Img
					style={{position: 'absolute', left: -60, bottom: -60, width: '40%'}}
					src={staticFile('star.png')}
				/>
			</AbsoluteFill>
			<AbsoluteFill>
				<Img
					style={{
						position: 'absolute',
						left: 580,
						bottom: 100,
						width: '40%',
					}}
					src={staticFile('garland.png')}
				/>
			</AbsoluteFill>
			<AbsoluteFill>
				<Title title={title} opacity={opacity} />
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
export default SnowRain;
