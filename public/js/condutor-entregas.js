$(window).ready(() => {
   var userLogged = checkUserLogged();
   if (userLogged && getCookie("type") == 3) {
      $("#header-user-logged").show();
      $("#header-user-not-logged").hide();
   }
   else {
      var url = "./index.html";
      redirectPage(url);
      return;
   }

   var html = getHtmlUserInfoOnHeader();
   $("#header-user-info").append(html);
   var html = getHtmlDriverHeaderItems();
   $("#header-menu").append(html);
   var html = getHtmlImgEditPhoto();
   $("#img-photo").append(html);
   
   getDriverData();
   getDriverOrders();

   $("#table-deliveries").on("click", ".complete", function () {
      var id = $(this).parent().parent().children(".order-id").text();
      completeDelivery(id);
   });

   $("#id_truebtn").click(() => {
      deleteUser();
   });

   $(".a-logout").click(() => {
      logout("Sessão terminada com sucesso!");
   });
});