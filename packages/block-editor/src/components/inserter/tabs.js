/**
 * WordPress dependencies
 */
import { symbol as reusableBlockIcon } from '@wordpress/icons';
import { useMemo } from '@wordpress/element';
import { TabPanel } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const blocksTab = {
	name: 'blocks',
	/* translators: Blocks tab title in the block inserter. */
	title: __( 'Blocks' ),
};
const patternsTab = {
	name: 'patterns',
	/* translators: Theme and Directory Patterns tab title in the block inserter. */
	title: __( 'Patterns' ),
};
const reusableBlocksTab = {
	name: 'reusable',
	/* translators: Locally created Patterns tab title in the block inserter. */
	title: __( 'Synced patterns' ),
	icon: reusableBlockIcon,
};
const mediaTab = {
	name: 'media',
	/* translators: Media tab title in the block inserter. */
	title: __( 'Media' ),
};

function InserterTabs( {
	children,
	showPatterns = false,
	showReusableBlocks = false,
	showMedia = false,
	onSelect,
	prioritizePatterns = false,
} ) {
	const tabs = useMemo( () => {
		return [
			prioritizePatterns && showPatterns && patternsTab,
			blocksTab,
			! prioritizePatterns && showPatterns && patternsTab,
			showMedia && mediaTab,
			showReusableBlocks && reusableBlocksTab,
		].filter( Boolean );
	}, [ prioritizePatterns, showPatterns, showReusableBlocks, showMedia ] );

	return (
		<TabPanel
			className="block-editor-inserter__tabs"
			tabs={ tabs }
			onSelect={ onSelect }
		>
			{ children }
		</TabPanel>
	);
}

export default InserterTabs;
