/**
 * WordPress dependencies
 */
import {
	createBlock,
	createBlocksFromInnerBlocksTemplate,
	store as blocksStore,
} from '@wordpress/blocks';
import { useSelect } from '@wordpress/data';
import { useCallback } from '@wordpress/element';

/**
 * Internal dependencies
 */
import { store as blockEditorStore } from '../../../store';

/**
 * Retrieves the block types inserter state.
 *
 * @param {string=}  rootClientId Insertion's root client ID.
 * @param {Function} onInsert     function called when inserter a list of blocks.
 * @return {Array} Returns the block types state. (block types, categories, collections, onSelect handler)
 */
const useBlockTypesState = ( rootClientId, onInsert ) => {
	const { items } = useSelect(
		( select ) => ( {
			items: select( blockEditorStore ).getInserterItems( rootClientId ),
		} ),
		[ rootClientId ]
	);

	const { categories, collections } = useSelect( ( select ) => {
		const { getCategories, getCollections } = select( blocksStore );

		return {
			categories: getCategories(),
			collections: getCollections(),
		};
	} );

	const onSelectItem = useCallback(
		( item, shouldFocusBlock ) => {
			const insertedBlock = createBlock(
				item.name,
				item.initialAttributes,
				createBlocksFromInnerBlocksTemplate( item.innerBlocks )
			);

			onInsert( insertedBlock, undefined, shouldFocusBlock );
		},
		[ onInsert ]
	);

	return [ items, categories, collections, onSelectItem ];
};

export default useBlockTypesState;
