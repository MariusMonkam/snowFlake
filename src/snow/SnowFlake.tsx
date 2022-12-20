import React from 'react';
import SvgSnowFlake, {svgProps} from './SvgSnowFlake';

const SnowFlake: React.FC<svgProps> = ({color, x, delay, size}) => {
	return (
		<>
			<SvgSnowFlake color={color} x={x} delay={delay} size={size} />
		</>
	);
};

export default SnowFlake;
