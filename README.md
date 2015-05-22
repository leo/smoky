# smoky

As a webdeveloper, you've certainly already made a website that contained a lightbox. The concept itself comes from Lokesh Dhakar, who created the original [lightbox script][1] many years ago (which is now written as a jQuery plugin).

## Why?

- There are plenty of lightbox scripts out there, we both know that. But smoky is not an alternative to them. It's completely written in vanilly JS (ES 6) and the latest web technologies.

- Most of the scripts use JS to animate, smoky does not. It uses GPU-powered CSS animations (they're much faster and don't insert arkward number-chains into your code).

## Sounds interesting?

Give it a spin and you'll be convinced fastly!

**Important:** As smoky is written on ES 6 (which will probaply only be fully released in the end of 2015), it's only possible to use it in conjunction with a ES-5-to-ES-6 compiler like [Babel][2] or [Traceur][3]. You can set up each of them pretty quickly, just take a look at their documentation!

1. After you've set up and compiled the source and implemented both the CSS and the JS parts of smoky, give it a try:

	```js
	new Smoky( 'a.lightbox' );
	```
  
2. Now every click on an element that matches the selector will be captured by smoky and trigger the opening of the lightbox containing the child image of the link element. If you want to make some additional configuration, just overwrite the existing one:

	```js
	new Smoky( 'a.lightbox', {
		option: value
	});
	```

## Options

<table>
	<tr>
		<td>escKey</td>
		<td>If the visitor can use the escape key to close the lightbox window after opening it.</td>
		<td>true</td>
	</tr>
	<tr>
		<td>arrowKeys</td>
		<td>Whether the user can use the arrow keys on his keyboard to move to the next or previous image within a gallery.</td>
		<td>true</td>
	</tr>
	<tr>
		<td>className</td>
		<td>The class that will be used for every interaction with the DOM.</td>
		<td>'smoky'</td>
	</tr>
	<tr>
		<td>cache</td>
		<td>Allow smoky to preload the next images within a gallery.</td>
		<td>true</td>
	</tr>
	<tr>
		<td>caption</td>
		<td>The name of the attribute of the link element that will be used to display the image caption.</td>
		<td>'title'</td>
	</tr>
</table>

## Methods

<table>
	<tr>
		<td>.move()</td>
		<td>Change the image to a different one within a gallery. For example, '-1' will move to the previous and '+1' to the next one.</td>
	</tr>
	<tr>
		<td>.shut()</td>
		<td>Close the lightbox window if it's already shown.</td>
	</tr>
	<tr>
		<td>.isOpened()</td>
		<td>Will return *true* if the lightbox is open.</td>
	</tr>
</table>

If you've found any bugs or have some feedback for me, make sure to [open an issue][4]!

[1]: https://github.com/lokesh/lightbox2
[2]: https://babeljs.io
[3]: https://github.com/google/traceur-compiler/wiki/Getting-Started
[4]: https://github.com/leo/smoky/issues/new
