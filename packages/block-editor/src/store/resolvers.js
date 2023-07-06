/**
 * WordPress dependencies
 */
import { parse } from '@wordpress/blocks';

export const __experimentalGetParsedPattern =
	( patternName ) =>
	async ( { select, dispatch } ) => {
		const pattern = select( ( state ) =>
			state.root.settings.__experimentalBlockPatterns.find(
				( { name } ) => name === patternName
			)
		);
		if ( ! pattern ) {
			return;
		}
		const blocks = await parse( pattern.content, {
			__unstableSkipMigrationLogs: true,
		} );
		const parsedPattern = { ...pattern, blocks };
		dispatch( {
			type: 'SET_PARSED_PATTERN',
			patternName,
			parsedPattern,
		} );
	};
