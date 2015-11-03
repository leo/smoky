class Smoky {

	constructor( select, options ) {

		if( typeof select == 'undefined' ) {
			return
		}

		this.config = {
			disableCache: false,
			className: false,
			escKey: true,
			arrowKeys: true,
			callback: function() {}
		}

		this.items = [].slice.call( document.querySelectorAll( select ) )

		for( var i = 0; i < this.items.length; i++ ) {

			this.items[i].addEventListener(
				'click',
				this.seekElement.bind( this )
			)

		}

		document.documentElement.addEventListener( 'click', this.shut.bind( this ) )

		var makers = {
			load: this.spawn.bind( this ),
			keydown: this.tryKeys.bind( this )
		}

		this.setEvents( window, makers )

		this.config = Object.assign( {}, this.config, options )

	}

	addImage( preload, target ) {

		var span = this.span

		this.figure.appendChild( preload )

		if( target.hasAttribute( 'title' ) ) {

			var title = document.createElement( 'figcaption' )
			title.innerHTML = target.title

			this.figure.appendChild( title )

		}

		function timeout() {
			this.addClass( this.aside, 'loaded' )
		}

		this.timeout = setTimeout( timeout.bind( this ), 3000 )

	}

	getPosition( ele ) {

		var group = this.items,
			i = 0

		for( var sibling in group ) {

			if( group[sibling].nodeType && group[sibling] == ele ) {

				var position = i;
				break;

			}

			i++

		}

		return position;

	}

	seekElement( event ) {

		var figure = this.figure,
			target = event.currentTarget

		this.current = this.getPosition( target )

		if( ! figure.innerHTML.includes( 'img' ) ) {
			var preload = new Image();
		} else {
			var preload = figure.firstChild;
		}

		preload.src = target.href + '#' + Math.floor( Math.random() * 1000 ) + 1

		this.addClass( this.aside, 'open' )

		var actions = {
			load: this.addImage( preload, target ),
			click: event.stopPropagation()
		}

		this.setEvents( preload, actions )

		event.stopPropagation()
		event.preventDefault()

	}

	setEvents( ele, events ) {

		for( var handle in events ) {
			ele.addEventListener( handle, events[handle] )
		}

	}

	move( direction ) {

		var move = this.items[this.current + direction].href;

		this.figure.firstChild.src = move;

	}

	spawn() {

		var helper = [
			'aside',
			'figure',
			'section',
			'span',
			'b'
		]

		for( var key in helper ) {

			var tag = helper[key],
				key = parseInt( key )

			if( key == 3 || key == 4 ) {
				var mother = this[helper[key - 1]]
			} else {
				var mother = key ? this.aside : document.body
			}

			for( var i = 0; i < ( mother == this.span ? 4 : 1 ); i++ ) {

				this[tag] = mother.appendChild(
					document.createElement( tag )
				)

			}

		}

		this.aside.className = 'smoky'

	}

	clearBox() {

		var fig = this.figure

		while( fig.firstChild ) {
			fig.removeChild( fig.firstChild )
		}

	}

	tryKeys( event ) {

		if( ! this.isOpened() ) {
			return;
		}

		switch( event.keyCode ) {

		case 39:
			this.move( 1 )
			break

		case 37:
			this.move( -1 )
			break

		case 27:
			this.config.escKey && this.shut()
			break

		default:
			return false

		}

	}

	addClass( who, title ) {

		var attr = who.className;
		who.className = attr ? attr + ' ' + title : title

	}

	shut() {

		var smoky = this.aside

		if( ! smoky.className.includes( 'open' ) ) {
			return
		}

		var style = window.getComputedStyle( smoky, null ).getPropertyValue( 'transition-duration' ),
			speed = style.substr( -4 ).replace( 's', '' )

		smoky.className = 'smoky'

		setTimeout(
			this.clearBox.bind( this ),
			speed * 1000
		)

		this.current = null

	}

	isOpened() {

		if( this.aside.className.includes( 'open' ) ) {
			return true;
		}

	}

}