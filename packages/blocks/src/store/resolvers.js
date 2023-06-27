export const getBlockType = ( name ) => async () => {
	const mods = window.wp.importmap[ name ];
	if ( ! mods ) {
		return;
	}

	await Promise.all(
		mods.map(
			( mod ) =>
				new Promise( ( resolve, reject ) => {
					console.log( 'loading', name, mod.handle );
					const src = mod.src;
					const newNode = document.createElement( 'script' );
					newNode.src = src;
					newNode.onload = () => {
						console.log( 'loaded', mod.handle );
						resolve();
					};
					newNode.onerror = () =>
						reject(
							new Error(
								`Failed to load ${ name } ${ mod.handle } ${ src }`
							)
						);
					document.body.appendChild( newNode );
				} )
		)
	);
};
