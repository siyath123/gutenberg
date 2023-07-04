/**
 * WordPress dependencies
 */
import { BlockPreview } from '@wordpress/block-editor';
import { getBlockType, getBlockFromExample } from '@wordpress/blocks';
import { __experimentalSpacer as Spacer } from '@wordpress/components';
import { useEffect, useState } from '@wordpress/element';

const BlockPreviewPanel = ( { name, variation = '' } ) => {
	const blockExample = getBlockType( name )?.example;
	const blockExampleWithVariation = {
		...blockExample,
		attributes: {
			...blockExample?.attributes,
			className: 'is-style-' + variation,
		},
	};
	const [ blocks, setBlocks ] = useState( null );
	const example = variation ? blockExampleWithVariation : blockExample;
	useEffect( () => {
		getBlockFromExample( name, example ).then( setBlocks );
	}, [ name, example ] );
	const viewportWidth = blockExample?.viewportWidth || null;
	const previewHeight = '150px';

	return ! blockExample ? null : (
		<Spacer marginX={ 4 } marginBottom={ 4 }>
			<div
				className="edit-site-global-styles__block-preview-panel"
				style={ { maxHeight: previewHeight, boxSizing: 'initial' } }
			>
				<BlockPreview
					blocks={ blocks }
					viewportWidth={ viewportWidth }
					minHeight={ previewHeight }
					additionalStyles={ [
						{
							css: `
								body{
									min-height:${ previewHeight };
									display:flex;align-items:center;justify-content:center;
								}
							`,
						},
					] }
				/>
			</div>
		</Spacer>
	);
};

export default BlockPreviewPanel;
