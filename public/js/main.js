$(function(){
	
	var socket = io();

	$('form').on('submit', function(e){
		// e.preventDefault() - Evita reload da janela ou
		// em alternativa no fim pode-se utilizar 'return false'
		e.preventDefault();
		if($('.m').val() != ''){
			socket.emit('chat message', $('.m').val());
			$('.m').val('');
		}
		
	});

	socket.on('chat message', function(msg){
		$('.msgs').append($('<div class="msg">').text(msg));

		// Efetua o Scroll das mensagens
		$('.msgs')[0].scrollTop = $('.msgs')[0].scrollHeight;
	});
});