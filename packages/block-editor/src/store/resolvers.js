/**
 * WordPress dependencies
 */
import { parse } from '@wordpress/blocks';

export const __experimentalGetParsedPattern =
	( patternName ) =>
	async ( { select, dispatch } ) => {
		const pattern = select(
			( state ) =>
				state.settings.__experimentalBlockPatterns[ patternName ]
		);
		if ( ! pattern ) {
			return;
		}
		const blocks = await parse( pattern.content, {
			__unstableSkipMigrationLogs: true,
		} );
		const parsedPattern = { ...pattern, blocks };
		dispatch( { type: 'SET_PARSED_PATTERN', pattern, parsedPattern } );
	};
