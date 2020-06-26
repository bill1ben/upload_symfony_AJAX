$(document).ready(function(){
  var formJq = $("form[name='test']");
  var form = formJq[0];
  form.addEventListener('submit', onSubmit);
  function onSubmit(event) {
    event.preventDefault();
    $.ajax({
      url: "http://api.moggar.do/test/create",
      data: new FormData(form),// the formData function is available in almost all new browsers.
      type:"post",
      contentType:false,
      processData:false,
      cache:false,
      dataType:"json", // Change this according to your response from the server.
      error:function(err){
        console.error(err);
      },
      success:function(data){
        console.log(data);
      },
      complete:function(){
        console.log("Request finished.");
      }
    });
  }
});




