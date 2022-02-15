(function( $ ) {
	'use strict';

	var codeMirror,
		codeMirrorSettings = {
		mode: 'text/html',
		lineNumbers: true,
		theme: 'monokai'
	};

	$(function() {
		tinymce.init( {
			selector:'.js-tinymce',
			height: '700',
			theme: 'modern',
			plugins: [
				'advlist autolink lists link image charmap print preview hr anchor pagebreak',
				'searchreplace wordcount visualblocks visualchars code fullscreen',
				'insertdatetime media nonbreaking save table contextmenu directionality',
				'emoticons template paste textcolor colorpicker textpattern imagetools codesample toc'
			],
			toolbar1: 'undo redo | insert | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
			toolbar2: 'print preview media | forecolor backcolor emoticons | codesample',
			image_advtab: true,
			init_instance_callback: function( editor ) {
				$( '.js-tinymce-output' ).val( editor.getContent() );

				codeMirror = CodeMirror.fromTextArea( $( '.js-tinymce-output' )[0], codeMirrorSettings );
				indentCodeMirror();

				codeMirror.on( 'beforeChange', function( instance, changeObj ) {
					if ( changeObj.text.join( '' ).trim().length > 0 && ! changeObj.text[0].includes( '<tinymce>' ) ) {
						editor.setContent( codeMirror.getValue() );
						indentCodeMirror();
					}

					if ( changeObj.text[0].includes( '<tinymce>' ) ) {
						changeObj.text[0] = changeObj.text[0].replace( '<tinymce>', '' );
						changeObj.text[ changeObj.text.length - 1 ] = changeObj.text[ changeObj.text.length - 1 ].replace( '</tinymce>', '' );
					}
				});

				codeMirror.on( 'mousedown', function( e ) {
          ga('send', 'event', 'Click', 'codemirror_clicked')
				});
			},
			setup: function( editor ) {
				editor.on( 'change keyup', function() {
					codeMirror.setValue( '<tinymce>' + editor.getContent() + '</tinymce>' );
					indentCodeMirror();
				});

				editor.on( 'click', function( e ) {
          ga('send', 'event', 'Click', 'tinymce_clicked')
				});
			}
		});
	});

	function indentCodeMirror() {
		for ( var i=0; i < codeMirror.lineCount(); i++ ) {
			codeMirror.indentLine(i);
		}
	}
})( jQuery );