import { Draggable } from '@shopify/draggable';

const draggable = new Draggable(document.querySelectorAll('ul'), {
  draggable: 'li'
});

draggable.on('drag:start', () => console.log('drag:start'));
draggable.on('drag:move', () => console.log('drag:move'));
draggable.on('drag:stop', () => console.log('drag:stop'));



$('#replaceModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) // Button that triggered the modal
    var recipient = button.data('whatever') // Extract info from data-* attributes
    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    var modal = $(this)
    modal.find('.modal-title').text('Replace ' + recipient)
    modal.find('.modal-body input').val(recipient)
    card = "";
    switch(recipient){
        case 'Java':
            console.log(recipient)
            card = `
                    <div class="card-body">
                            <h5 class="card-title">Programming Foundations in Python</h5>
                            <ul>
                                <li>Cras justo odio</li>
                                <li>Dapibus ac facilisis in</li>
                                <li>Morbi leo risus</li>
                                <li>Porta ac consectetur ac</li>
                                <li>Vestibulum at eros</li>
                            </ul>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
            `
            break
    }
    modal.find('.card').val(card);
  })