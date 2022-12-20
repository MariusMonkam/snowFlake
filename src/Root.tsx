import {Composition} from 'remotion';
import SnowRain from './snow/SnowRain';

// Each <Composition> is an entry in the sidebar!

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition
				id="snowFlake"
				component={SnowRain}
				durationInFrames={30}
				fps={5}
				width={1920}
				height={1080}
				defaultProps={{
					title: 'Merry Christmas!',
				}}
			/>
		</>
	);
};
