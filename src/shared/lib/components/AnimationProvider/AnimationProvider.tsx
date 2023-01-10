import type {ReactNode} from 'react';
import {createContext, useContext, useEffect, useMemo, useRef, useState} from 'react';
import type Gesture from '@use-gesture/react';
import type Spring from '@react-spring/web';

type GestureType = typeof Gesture;
type SpringType = typeof Spring;

interface AnimationContextPayload {
	Gesture?: GestureType;
	Spring?: SpringType;
	isLoading?: boolean;
}

const AnimationContext = createContext<AnimationContextPayload>({});

const getAsyncAnimationModules = async () => {
	return Promise.all([
		import('@use-gesture/react'),
		import('@react-spring/web'),
	]);
};

export const AnimationProvider = ({children}: {children: ReactNode}) => {
	const GestureRef = useRef<GestureType>();
	const SpringRef = useRef<SpringType>();
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		void getAsyncAnimationModules().then(([Gesture, Spring]) => {
			GestureRef.current = Gesture;
			SpringRef.current = Spring;
			setIsLoading(false);
		});
	}, []);

	const value = useMemo(() => {
		return {
			Gesture: GestureRef.current,
			Spring: SpringRef.current,
			isLoading,
		};
	}, [isLoading]);

	return (
		<AnimationContext.Provider value={value}>
			{children}
		</AnimationContext.Provider>
	);
};

export const useAnimationLibs = () => {
	return useContext(AnimationContext) as Required<AnimationContextPayload>;
};
