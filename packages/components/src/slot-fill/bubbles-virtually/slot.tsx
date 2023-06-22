/**
 * External dependencies
 */
import type { ForwardedRef } from 'react';

/**
 * WordPress dependencies
 */
import {
	useRef,
	useLayoutEffect,
	useContext,
	forwardRef,
} from '@wordpress/element';
import { useMergeRefs } from '@wordpress/compose';

/**
 * Internal dependencies
 */
import { View } from '../../view';
import SlotFillContext from './slot-fill-context';
import type { WordPressComponentProps } from '../../ui/context';
import type { SlotComponentProps } from '../types';

function Slot(
	props: WordPressComponentProps<
		Omit< SlotComponentProps, 'bubblesVirtually' >,
		'div'
	>,
	forwardedRef: ForwardedRef< any >
) {
	const {
		name,
		fillProps = {},
		children,
		as: Component = 'div',
		...restProps
	} = props;
	const { registerSlot, unregisterSlot, ...registry } =
		useContext( SlotFillContext );
	const ref = useRef();

	useLayoutEffect( () => {
		registerSlot( name, ref, fillProps );
		return () => {
			unregisterSlot( name, ref );
		};
		// Ignore reason: We don't want to unregister and register the slot whenever
		// `fillProps` change, which would cause the fill to be re-mounted. Instead,
		// we can just update the slot (see hook below).
		// For more context, see https://github.com/WordPress/gutenberg/pull/44403#discussion_r994415973
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ registerSlot, unregisterSlot, name ] );
	// fillProps may be an update that interacts with the layout, so we
	// useLayoutEffect.
	useLayoutEffect( () => {
		registry.updateSlot( name, fillProps );
	} );

	return (
		<View
			as={ Component }
			ref={ useMergeRefs( [ forwardedRef, ref ] ) }
			{ ...restProps }
		/>
	);
}

export default forwardRef( Slot );