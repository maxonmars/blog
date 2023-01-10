import module from './DrawerMobile.module.css';
import {classNames} from 'shared/lib/classNames/classNames';
import {Overlay} from '../Overlay/Overlay';
import {Portal} from '../Portal/Portal';
import type {ReactNode} from 'react';
import {useState} from 'react';
import {AnimationProvider, useAnimationLibs} from 'shared/lib/components/AnimationProvider';

type DrawerMobileChildren =
	| ReactNode
	| ((onClick: () => void) => ReactNode);

interface DrawerMobileProps {
	className?: string;
	children: DrawerMobileChildren;
	target: DrawerMobileChildren;
}

const height = window.innerHeight - 100;

const DrawerMobileContent = (props: DrawerMobileProps) => {
	const {children, target, className} = props;
	const {
		Gesture: {
			useDrag,
		},
		Spring: {
			a,
			config,
			useSpring,
		},
	} = useAnimationLibs();

	const [isOpened, setIsDrawerOpen] = useState(false);

	const [{y}, api] = useSpring(() => ({y: height}));

	const open = (hasCanceled?: boolean) => {
		api.start({y: 0, immediate: false, config: hasCanceled ? config.wobbly : config.stiff});
	};

	const close = (velocity = 0) => {
		api.start({
			y: height,
			immediate: false,
			config: {...config.stiff, velocity},
			onResolve() {
				setIsDrawerOpen(false);
			},
		});
	};

	const handleOpen = () => {
		setIsDrawerOpen(true);
		open();
	};

	const bind = useDrag(
		({last, velocity: [, vy], direction: [, dy], movement: [, my], cancel, canceled}) => {
			if (my < -70) {
				cancel();
			}

			if (last) {
				if (my > height * 0.5 || (vy > 0.5 && dy > 0)) {
					close(vy);
				} else {
					open(canceled);
				}
			} else {
				api.start({y: my, immediate: true});
			}
		},
		{
			from: () => [0, y.get()], filterTaps: true, bounds: {top: 0}, rubberband: true,
		},
	);

	const display = y.to(py => (py < height ? 'block' : 'none'));

	return (
		<>
			{typeof target === 'function' && target(handleOpen)}
			{isOpened
				? (
					<Portal>
						<div className={classNames([module.drawerMobile, className])}>
							<Overlay onClose={close}/>
							<a.div
								className={module.sheet}
								style={{display, bottom: `calc(-100vh + ${height - 100}px)`, y}}
								{...bind()}>
								{typeof children === 'function'
									? children(close)
									: children
								}
							</a.div>
						</div>
					</Portal>
				)
				: null}
		</>
	);
};

const DrawerMobileAsync = (props: DrawerMobileProps) => {
	const {isLoading} = useAnimationLibs();

	if (isLoading) {
		return null;
	}

	return <DrawerMobileContent {...props}/>;
};

export const DrawerMobile = (props: DrawerMobileProps) => {
	return (
		<AnimationProvider>
			<DrawerMobileAsync {...props}/>
		</AnimationProvider>
	);
};
