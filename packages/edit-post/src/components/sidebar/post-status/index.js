/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { PanelBody } from '@wordpress/components';
import { withSelect, withDispatch } from '@wordpress/data';
import { compose, ifCondition } from '@wordpress/compose';

/**
 * Internal dependencies
 */
import PostVisibility from '../post-visibility';
import PostTrash from '../post-trash';
import PostSchedule from '../post-schedule';
import PostSticky from '../post-sticky';
import PostAuthor from '../post-author';
import PostSlug from '../post-slug';
import PostFormat from '../post-format';
import PostPendingStatus from '../post-pending-status';
import PluginPostStatusInfo from '../plugin-post-status-info';
import { store as editPostStore } from '../../../store';
import PostTemplate from '../post-template';
import PostURL from '../post-url';

/**
 * Module Constants
 */
const PANEL_NAME = 'post-status';

const FirstSideFill = () => (
	<PluginPostStatusInfo priority={ 1 } className="first">
		{ 'One' }
	</PluginPostStatusInfo>
);

const SecondSideFill = () => (
	<PluginPostStatusInfo priority={ 2 } className="second">
		{ 'Two' }
	</PluginPostStatusInfo>
);

const ThirdSideFill = () => (
	<PluginPostStatusInfo priority={ 3 } className="third">
		{ 'Three' }
	</PluginPostStatusInfo>
);

const FourthSideFill = () => (
	<PluginPostStatusInfo priority={ 4 } className="fourth">
		{ 'Four' }
	</PluginPostStatusInfo>
);


function PostStatus( { isOpened, onTogglePanel } ) {
	return (
		<PanelBody
			className="edit-post-post-status"
			title={ __( 'Summary' ) }
			opened={ isOpened }
			onToggle={ onTogglePanel }
		>
			<ThirdSideFill />
			<FirstSideFill />
			<SecondSideFill />
			<FourthSideFill />
			<PluginPostStatusInfo.Slot>
				{ ( fills ) => (
					<>
						<PostVisibility />
						<PostSchedule />
						<PostTemplate />
						<PostURL />
						<PostSticky />
						<PostPendingStatus />
						<PostFormat />
						<PostSlug />
						<PostAuthor />
						{ fills }
						<PostTrash />
					</>
				) }
			</PluginPostStatusInfo.Slot>
		</PanelBody>
	);
}

export default compose( [
	withSelect( ( select ) => {
		// We use isEditorPanelRemoved to hide the panel if it was programatically removed. We do
		// not use isEditorPanelEnabled since this panel should not be disabled through the UI.
		const { isEditorPanelRemoved, isEditorPanelOpened } =
			select( editPostStore );
		return {
			isRemoved: isEditorPanelRemoved( PANEL_NAME ),
			isOpened: isEditorPanelOpened( PANEL_NAME ),
		};
	} ),
	ifCondition( ( { isRemoved } ) => ! isRemoved ),
	withDispatch( ( dispatch ) => ( {
		onTogglePanel() {
			return dispatch( editPostStore ).toggleEditorPanelOpened(
				PANEL_NAME
			);
		},
	} ) ),
] )( PostStatus );
