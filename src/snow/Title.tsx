import React from 'react';

export type TitleProps = {
	title: string;
	opacity: number;
};
const Title: React.FC<TitleProps> = ({title, opacity}) => {
	return (
		<>
			<h1
				style={{
					fontFamily: 'Fleur De Leah, cursive',
					color: '#705b15',
					backgroundColor: 'rgba(255,255,255, 0.4)',
					fontSize: 100,
					fontWeight: 'lighter',
					position: 'absolute',
					left: '35%',
					bottom: '40%',
					wordSpacing: '35px',
					boxShadow: '0.7px 4px gold',
					margin: 2,
					padding: 2,
					transform: 'scale(1.8)',
					opacity: `${opacity}`,
				}}
			>
				{title}
			</h1>
		</>
	);
};

export default Title;
