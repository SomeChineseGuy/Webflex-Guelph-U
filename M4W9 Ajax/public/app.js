console.log('Does this work?');

$(document).ready(function() {
  // Target
  // Add event listener
  // Add Effect
  // $('.box-one').on('click', function() {
  //   // $('.box-two').css('background-color', 'black')
  //   $('.box-two').addClass('blue')
  // })

  // $('.box-three').on('click', function() {
  //   $('.box-two').removeClass('blue')
  // })
  // $('.box-one').click(function() {
    
  // })

  // $('.box-one').on('click', function() {
  //   $('#results').append('<p>I am adding to the HTML at the end</p>')
  // })

  // $('.box-three').on('click', function() {
  //   $('#results').prepend('<p>I am adding to the top of the HTML element</p>')
  // })

  // $('.box-two').on('click', function() {
  //   $('#results').empty();
  // })

  // const fakeData = {
  //   id: 'abc', 
  //   name: 'Dioji', 
  //   breed: 'german shepherd', 
  //   weight: 100
  // }

  const createDogElement = (dog) => {
    const dogHTML = $(`
      <article class="dog-container">
        <header>
          <h2> The name of the dog is: ${dog.name} </h2>
          <h2> The Breed of the dog is: ${dog.breed}</h2>
        </header>
        <section>
          <h3> The weight of the dog is: ${dog.weight}</h3>
        </section>
        <footer>
          <p>The id: ${dog.id}</p>
        </footer>
      </article>
    `);
    return dogHTML;
  }

  const fetchDogs = () => {
    $.get('/dogs')
      .then(res => {
        $('#results').empty();
        for(const dog of res) {
          $('#results').prepend(createDogElement(dog))
        }
      })
      .catch(err => {
        console.log(err)
      })
  }

  $('.box-two').on('click', function () {
    $('#results').empty();
  })

  $('.box-one').on('click', function () {
    fetchDogs();
  });

  $('.dog-form').on('submit', function(event) {
    event.preventDefault();
    const $form = $('.dog-form');
    const data = $form.serialize();
    // console.log(data)
    $.post('/dogs', data)
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  })
});