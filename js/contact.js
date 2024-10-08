// MAPBOX

mapboxgl.accessToken = 'pk.eyJ1Ijoid2lsbGlhbWJpZXJoYWxzIiwiYSI6ImNtMXUzN3pwbDA5OXUybW9sbHZ1OTNodHIifQ.PxCga4Sk5mjlB3_uvBCNnQ';

let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-52.3030528, -31.7520277],
    zoom: 14
});

new mapboxgl.Marker({ color: 'orange' })
    .setLngLat([-52.3030528, -31.7520277])
    .addTo(map);

// EMAILJS

$('#contact-form').on('submit', function(event) {
    event.preventDefault();

    $('#contact-form-button').prop('disabled', true);
    $('#contact-form-button').html('Enviando <i class="fa fa-spinner fa-spin"></i>');;

    emailjs.send("service_3fowchc", "template_wttn9h4", {
        first_name: $("#nome").val(),
        last_name: $("#sobrenome").val(),
        email: $("#email").val(),
        phone: $("#celular").val(),
        text_message: $("#mensagem").val(),
    }).then(function(response) {
        Swal.fire({
            icon: 'success',
            title: 'Mensagem enviada!',
            text: 'Sua mensagem foi enviada com sucesso!',
        });

        $('#contact-form-button').prop('disabled', false);
        $('#contact-form-button').html('Enviar <i class="fa fa-paper-plane" style="margin-left: 5px;"></i>');
        $('#contact-form')[0].reset();
    }, function(error) {
        Swal.fire({
            icon: 'error',
            title: 'Erro ao enviar mensagem',
            text: 'Houve um problema ao enviar sua mensagem. Tente novamente mais tarde.',
        });

        $('#contact-form-button').prop('disabled', false);
        $('#contact-form-button').html('Enviar <i class="fa fa-paper-plane" style="margin-left: 5px;"></i>');
        $('#contact-form')[0].reset();
    });
});


$(document).ready(function() {
    // MASK
    $('.celular').mask('(00) 00000-0000');
});