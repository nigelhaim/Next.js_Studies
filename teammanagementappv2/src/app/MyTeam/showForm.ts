/*function showForm(){
   console.log("Button clicked");
   return;
 }*/
 const button = document.getElementById('showForm');

button?.addEventListener('click', function handleClick(event) {
  console.log('button clicked');
  console.log(event);
  console.log(event.target);
});
