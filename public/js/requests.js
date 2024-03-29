// REGISTER
function registerClient() {
   var form = $("#form-register-client");
   var formData = getFormData(form);

   $.ajax({
      cache: false,
      data: formData,
      type: "post",
      url: urlApi + "register/client",

      success: res => {
         setCookie(res.token);
         for (const [key, value] of Object.entries(res.data))
            setCookie(key, value, 3);

         var url = "./index.html";
         showModalAndRedirect("Sucesso", res.message, url);
      },
      error: err => {
         var status = getStatus(err);

         if (status >= 400 && status <= 599 != 404)
            showErrorAlert(err.responseJSON.message);
         else if (status == 0 || status == 404) {
            var url = "./404.html";
            redirectPage(url);
         }
      }
   });
}


function registerMerchant() {
   var form = $("#form-register-merchant")[0];
   var formData = new FormData(form);

   $.ajax({
      cache: false,
      contentType: false,
      data: formData,
      processData: false,
      type: "post",
      url: urlApi + "register/merchant",

      success: res => {
         var url = "./index.html";
         showModalAndRedirect("Sucesso", res.message, url);
      },
      error: err => {
         var status = getStatus(err);

         if (status >= 400 && status <= 599 != 404)
            showErrorAlert(err.responseJSON.message);
         else if (status == 0 || status == 404) {
            var url = "./404.html";
            redirectPage(url);
         }
      }
   });
}


function registerDriver() {
   var form = $("#form-register-driver")[0];
   var formData = new FormData(form);

   $.ajax({
      cache: false,
      contentType: false,
      data: formData,
      processData: false,
      type: "post",
      url: urlApi + "register/driver",

      success: res => {
         var url = "./index.html";
         showModalAndRedirect("Sucesso", res.message, url);
      },
      error: err => {
         var status = getStatus(err);

         if (status >= 400 && status <= 599 != 404)
            showErrorAlert(err.responseJSON.message);
         else if (status == 0 || status == 404) {
            var url = "./404.html";
            redirectPage(url);
         }
      }
   });
}


function registerAdmin() {
   var form = $("#form-register-admin");
   var formData = getFormData(form);

   $.ajax({
      cache: false,
      data: formData,
      type: "post",
      url: urlApi + "register/admin",

      success: res => {
         var url = "./index.html";
         showModalAndRedirect("Sucesso", res.message, url);
      },
      error: err => {
         var status = getStatus(err);

         if (status >= 400 && status <= 599 != 404)
            showErrorAlert(err.responseJSON.message);
         else if (status == 0 || status == 404) {
            var url = "./404.html";
            redirectPage(url);
         }
      }
   });
}


// LOGIN
function login() {
   var form = $("#form-login");
   var formData = getFormData(form);

   $.ajax({
      cache: false,
      data: formData,
      type: "post",
      url: urlApi + "login",

      success: res => {
         setCookie("token", res.token, 3);
         for (const [key, value] of Object.entries(res.data))
            setCookie(key, value, 3);

         var url = "./index.html";
         showModalAndRedirect("Sucesso", res.message, url);
      },
      error: err => {
         var status = getStatus(err);

         if (status >= 400 && status <= 599 != 404)
            showErrorAlert(err.responseJSON.message);
         else if (status == 0 || status == 404) {
            var url = "./404.html";
            redirectPage(url);
         }
      }
   });
}


// USERS
function getClientData() {
   var token = getCookie("token");

   $.ajax({
      cache: false,
      headers: { Authorization: "Bearer " + token },
      type: "get",
      url: urlApi + "users/account",

      success: res => {
         var html = getHtmlTitle(res.data);
         $("#title-info").append(html);

         var html = getHtmlClientData1(res.data);
         $("#user-data-1").append(html);
         var html = getHtmlClientData2(res.data);
         $("#user-data-2").append(html);
      },
      error: err => {
         var status = getStatus(err);

         if (status >= 400 && status <= 599 != 404)
            showErrorAlert(err.responseJSON.message);
         else if (status == 0 || status == 404) {
            var url = "./404.html";
            redirectPage(url);
         }
      }
   });
}


function getMerchantData() {
   var token = getCookie("token");

   $.ajax({
      cache: false,
      headers: { Authorization: "Bearer " + token },
      type: "get",
      url: urlApi + "users/account",

      success: res => {
         var html = getHtmlTitle(res.data);
         $("#title-info").append(html);

         setMainCover(res.data.url_photo);

         var html = getHtmlMerchantData1(res.data);
         $("#user-data-1").append(html);
         var html = getHtmlMerchantData2(res.data);
         $("#user-data-2").append(html);
      },
      error: err => {
         var status = getStatus(err);

         if (status >= 400 && status <= 599 != 404)
            showErrorAlert(err.responseJSON.message);
         else if (status == 0 || status == 404) {
            var url = "./404.html";
            redirectPage(url);
         }
      }
   });
}


function getDriverData() {
   var token = getCookie("token");

   $.ajax({
      cache: false,
      headers: { Authorization: "Bearer " + token },
      type: "get",
      url: urlApi + "users/account",

      success: res => {
         var html = getHtmlTitle(res.data);
         $("#title-info").append(html);

         var html = getHtmlDriverData1(res.data);
         $("#user-data-1").append(html);
         var html = getHtmlDriverData2(res.data);
         $("#user-data-2").append(html);

         $("select").val(res.data.driving_license);
      },
      error: err => {
         var status = getStatus(err);

         if (status >= 400 && status <= 599 != 404)
            showErrorAlert(err.responseJSON.message);
         else if (status == 0 || status == 404) {
            var url = "./404.html";
            redirectPage(url);
         }
      }
   });
}


function getAdminData() {
   var token = getCookie("token");

   $.ajax({
      cache: false,
      headers: { Authorization: "Bearer " + token },
      type: "get",
      url: urlApi + "users/account",

      success: res => {
         var html = getHtmlTitle(res.data);
         $("#title-info").append(html);

         var html = getHtmlAdminData1(res.data);
         $("#user-data-1").append(html);
         var html = getHtmlAdminData2(res.data);
         $("#user-data-2").append(html);
      },
      error: err => {
         var status = getStatus(err);

         if (status >= 400 && status <= 599 != 404)
            showErrorAlert(err.responseJSON.message);
         else if (status == 0 || status == 404) {
            var url = "./404.html";
            redirectPage(url);
         }
      }
   });
}


function getMerchantInProducts(merchantID) {
   $.ajax({
      cache: false,
      type: "get",
      url: urlApi + "users/get-user/" + merchantID,

      success: res => {
         setMainCover(res.data.url_photo);

         var html = getHtmlMerchantTitle(res.data);
         $("#title-info").append(html);
      },
      error: err => {
         var status = getStatus(err);

         if (status >= 400 && status <= 599 != 404)
            showErrorAlert(err.responseJSON.message);
         else if (status == 0 || status == 404) {
            var url = "./404.html";
            redirectPage(url);
         }
      }
   });
}


function getMerchantsToIndex() {
   $.ajax({
      cache: false,
      type: "get",
      url: urlApi + "users/get-merchants/8",

      success: res => {
         for (var i = 0; i < res.data.length; i++) {
            var html = getHtmlMerchantsInIndex(res.data[i]);
            $("#ul-get-merchants").append(html);
         }
      },
      error: err => {
         var status = getStatus(err);

         if (status >= 400 && status <= 599 != 404)
            showErrorAlert(err.responseJSON.message);
         else if (status == 0 || status == 404) {
            var url = "./404.html";
            redirectPage(url);
         }
      }
   });
}


function getMerchantsInMerchants() {
   $.ajax({
      cache: false,
      type: "get",
      url: urlApi + "users/get-merchants/50",

      success: res => {
         for (var i = 0; i < res.data.length; i++) {
            var html = getHtmlMerchantsInMerchants(res.data[i]);
            $("#ul-merchants").append(html);
         }
      },
      error: err => {
         var status = getStatus(err);

         if (status >= 400 && status <= 599 != 404)
            showErrorAlert(err.responseJSON.message);
         else if (status == 0 || status == 404) {
            var url = "./404.html";
            redirectPage(url);
         }
      }
   });
}


function getUsersAccepted() {
   var token = getCookie("token");

   $.ajax({
      cache: false,
      headers: { Authorization: "Bearer " + token },
      type: "get",
      url: urlApi + "users/accepted",

      success: res => {
         for (var i = 0; i < res.data.length; i++) {
            var html = getHtmlAllUsers(res.data[i]);
            $("#table-users").append(html);
         }

         $(".type-user:contains('1')").text("Cliente");
         $(".type-user:contains('2')").text("Comerciante");
         $(".type-user:contains('3')").text("Condutor");
         $(".type-user:contains('4')").text("Admin");

         $("span[data-type~='1']").css("background-color", "#047a06");
         $("span[data-type~='1']").text("Definir Admin");
         $("span[data-type~='1']").addClass("set-admin");
         $("span[data-type~='2']").css("background-color", "#047a06");
         $("span[data-type~='2']").text("Definir Admin");
         $("span[data-type~='2']").addClass("set-admin");
         $("span[data-type~='3']").css("background-color", "#047a06");
         $("span[data-type~='3']").text("Definir Admin");
         $("span[data-type~='3']").addClass("set-admin");
         $("span[data-type~='4']").css("background-color", "#c33332");
         $("span[data-type~='4']").text("Remover Admin");
         $("span[data-type~='4']").addClass("remove-admin");

         $("span[data-type]").css("cursor", "pointer");

         $(".user-id:contains('" + getCookie("id") + "')").parent().hide();
      },
      error: err => {
         var status = getStatus(err);

         if (status >= 400 && status <= 599 != 404)
            showErrorAlert(err.responseJSON.message);
         else if (status == 0 || status == 404) {
            var url = "./404.html";
            redirectPage(url);
         }
      }
   });
}


function getUsersNotAccepted() {
   var token = getCookie("token");

   $.ajax({
      cache: false,
      headers: { Authorization: "Bearer " + token },
      type: "get",
      url: urlApi + "users/not-accepted",

      success: res => {
         for (var i = 0; i < res.data.length; i++) {
            var html = getHtmlAllUsersNotAccepted(res.data[i]);
            $("#table-users").append(html);
            var html = getHtmlModalUserDetail(res.data[i]);
            $("#modals-user-detail").append(html);
         }

         $(".type-user:contains('1')").text("Cliente");
         $(".type-user:contains('2')").text("Comerciante");
         $(".type-user:contains('3')").text("Condutor");
         $(".type-user:contains('4')").text("Admin");

         $("span[data-type]").css("background-color", "#047a06");
         $("span[data-type]").text("Aceitar");
         $("span[data-type]").addClass("accept");

         $("span[data-type]").css("cursor", "pointer");

         $(".user-id:contains('" + getCookie("id") + "')").parent().hide();

         $("div[data-driving-license~='1']").hide();
         $("div[data-driving-license~='2']").hide();
         $("div[data-driving-license~='4']").hide();
      },
      error: err => {
         var status = getStatus(err);

         if (status >= 400 && status <= 599 != 404)
            showErrorAlert(err.responseJSON.message);
         else if (status == 0 || status == 404) {
            var url = "./404.html";
            redirectPage(url);
         }
      }
   });
}


function editUserData() {
   var form = $("#form-edit-user-data");
   var formData = getFormData(form);
   var token = getCookie("token");

   $.ajax({
      cache: false,
      data: formData,
      headers: { Authorization: "Bearer " + token },
      type: "put",
      url: urlApi + "users/edit-data",

      success: res => {
         setCookie(res.token);
         for (const [key, value] of Object.entries(res.data))
            setCookie(key, value, 3);

         showModalAndRefresh(res.message);
      },
      error: err => {
         var status = getStatus(err);

         if (status >= 400 && status <= 599 != 404)
            showErrorAlert(err.responseJSON.message);
         else if (status == 0 || status == 404) {
            var url = "./404.html";
            redirectPage(url);
         }
      }
   });
}


function editPassword() {
   var form = $("#form-edit-password");
   var formData = getFormData(form);
   var token = getCookie("token");

   $.ajax({
      cache: false,
      data: formData,
      headers: { Authorization: "Bearer " + token },
      type: "patch",
      url: urlApi + "users/edit-password",

      success: res => {
         setCookie(res.token);
         for (const [key, value] of Object.entries(res.data))
            setCookie(key, value, 3);

         showModalAndRefresh(res.message);
      },
      error: err => {
         var status = getStatus(err);

         if (status >= 400 && status <= 599 != 404)
            showErrorAlert(err.responseJSON.message);
         else if (status == 0 || status == 404) {
            var url = "./404.html";
            redirectPage(url);
         }
      }
   });
}


function editUserPhoto() {
   var form = $("#form-edit-user-photo")[0];
   var formData = new FormData(form);
   var file = $('#file-photo')[0].files[0];
   formData.append('file', file);
   var token = getCookie("token");

   $.ajax({
      cache: false,
      contentType: false,
      data: formData,
      processData: false,
      headers: { Authorization: "Bearer " + token },
      type: "patch",
      url: urlApi + "users/edit-photo",

      success: res => {
         setCookie(res.token);
         for (const [key, value] of Object.entries(res.data))
            setCookie(key, value, 3);

         showModalAndRefresh(res.message);
      },
      error: err => {
         var status = getStatus(err);

         if (status >= 400 && status <= 599 != 404)
            showErrorAlert(err.responseJSON.message);
         else if (status == 0 || status == 404) {
            var url = "./404.html";
            redirectPage(url);
         }
      }
   });
}


function editDrivingLicense() {
   var form = $("#form-edit-driving-license")[0];
   var formData = new FormData(form);
   var token = getCookie("token");

   $.ajax({
      cache: false,
      contentType: false,
      data: formData,
      processData: false,
      headers: { Authorization: "Bearer " + token },
      type: "patch",
      url: urlApi + "users/edit-driving-license",

      success: res => {
         showModalAndRefresh(res.message);
      },
      error: err => {
         var status = getStatus(err);

         if (status >= 400 && status <= 599 != 404)
            showErrorAlert(err.responseJSON.message);
         else if (status == 0 || status == 404) {
            var url = "./404.html";
            redirectPage(url);
         }
      }
   });
}


function acceptUser(id) {
   var token = getCookie("token");

   $.ajax({
      cache: false,
      headers: { Authorization: "Bearer " + token },
      type: "patch",
      url: urlApi + "users/accept/" + id,

      success: res => {
         showModalAndRefresh(res.message);
      },
      error: err => {
         var status = getStatus(err);

         if (status >= 400 && status <= 599 != 404)
            showErrorAlert(err.responseJSON.message);
         else if (status == 0 || status == 404) {
            var url = "./404.html";
            redirectPage(url);
         }
      }
   });
}


function setAdmin(id) {
   var token = getCookie("token");

   $.ajax({
      cache: false,
      headers: { Authorization: "Bearer " + token },
      type: "patch",
      url: urlApi + "users/set-admin/" + id,

      success: res => {
         showModalAndRefresh(res.message);
      },
      error: err => {
         var status = getStatus(err);

         if (status >= 400 && status <= 599 != 404)
            showErrorAlert(err.responseJSON.message);
         else if (status == 0 || status == 404) {
            var url = "./404.html";
            redirectPage(url);
         }
      }
   });
}


function removeAdmin(id) {
   var token = getCookie("token");

   $.ajax({
      cache: false,
      headers: { Authorization: "Bearer " + token },
      type: "patch",
      url: urlApi + "users/remove-admin/" + id,

      success: res => {
         showModalAndRefresh(res.message);
      },
      error: err => {
         var status = getStatus(err);

         if (status >= 400 && status <= 599 != 404)
            showErrorAlert(err.responseJSON.message);
         else if (status == 0 || status == 404) {
            var url = "./404.html";
            redirectPage(url);
         }
      }
   });
}


function deleteUser() {
   var token = getCookie("token");

   $.ajax({
      cache: false,
      headers: { Authorization: "Bearer " + token },
      type: "delete",
      url: urlApi + "users/delete/",

      success: (res) => {
         logout(res.message);
      },
      error: err => {
         var status = getStatus(err);

         if (status >= 400 && status <= 599 != 404)
            showErrorAlert(err.responseJSON.message);
         else if (status == 0 || status == 404) {
            var url = "./404.html";
            redirectPage(url);
         }
      }
   });
}


// PRODUCTS
function getProductsInProducts(merchantID) {
   $.ajax({
      cache: false,
      type: "get",
      url: urlApi + "products/" + merchantID,

      success: res => {
         for (var i = 0; i < res.data.length; i++) {
            var html = getHtmlProductsInProducts(res.data[i]);
            $("#ul-products").append(html);
         }
      },
      error: err => {
         var status = getStatus(err);
         if (status >= 400 && status <= 599 != 404)
            showErrorAlert(err.responseJSON.message);
         else if (status == 0 || status == 404) {
            var url = "./404.html";
            redirectPage(url);
         }
      }
   });
}


function getProductById(currentButtonClicked) {
   var productId = currentButtonClicked.parent().parent().children(".td-id").text();
   alert("a")
   $.ajax({
      cache: false,
      type: "get",
      url: urlApi + "products/" + productId,

      success: res => {
         console.log(res.data)
      },
      error: err => {
         var status = getStatus(err);

         if (status >= 400 && status <= 599 != 404)
            showErrorAlert(err.responseJSON.message);
         else if (status == 0 || status == 404) {
            var url = "./404.html";
            redirectPage(url);
         }
      }
   });
}


function getProductsInAccount() {
   var token = getCookie("token");

   $.ajax({
      cache: false,
      headers: { Authorization: "Bearer " + token },
      type: "get",
      url: urlApi + "products/merchant-logged/",

      success: res => {
         for (var i = 0; i < res.data.length; i++) {
            var html = getHtmlProductsInAccount(res.data[i]);
            $("#get-user-products").append(html);
         }
      },
      error: err => {
         var status = getStatus(err);

         if (status >= 400 && status <= 599 != 404)
            showErrorAlert(err.responseJSON.message);
         else if (status == 0 || status == 404) {
            var url = "./404.html";
            redirectPage(url);
         }
      }
   });
}


function createProduct() {
   var form = $("#form-create-product")[0];
   var formData = new FormData(form);
   var token = getCookie("token");

   $.ajax({
      cache: false,
      contentType: false,
      data: formData,
      processData: false,
      headers: { Authorization: "Bearer " + token },
      type: "post",
      url: urlApi + "products/create",

      success: res => {
         var modal = $("#div-create-product");
         closeModal(modal);
         showModalAndRefresh(res.message);
      },
      error: err => {
         var status = getStatus(err);

         if (status >= 400 && status <= 599 != 404)
            showErrorAlert(err.responseJSON.message);
         else if (status == 0 || status == 404) {
            var url = "./404.html";
            redirectPage(url);
         }
      }
   });
}


function editProductData() {
   var form = $("#form-edit-product-data");
   var formData = getFormData(form);
   var token = getCookie("token");

   $.ajax({
      cache: false,
      data: formData,
      headers: { Authorization: "Bearer " + token },
      type: "put",
      url: urlApi + "products/edit-data/" + formData.id,

      success: res => {
         var modal = $("#div-edit-product-data");
         closeModal(modal);
         showModalAndRefresh(res.message);
      },
      error: err => {
         var status = getStatus(err);

         if (status >= 400 && status <= 599 != 404)
            showErrorAlert(err.responseJSON.message);
         else if (status == 0 || status == 404) {
            var url = "./404.html";
            redirectPage(url);
         }
      }
   });
}


function editProductPhoto() {
   var form = $("#form-edit-product-photo")[0];
   var formData = new FormData(form);
   var token = getCookie("token");

   $.ajax({
      cache: false,
      contentType: false,
      data: formData,
      processData: false,
      headers: { Authorization: "Bearer " + token },
      type: "patch",
      url: urlApi + "products/edit-photo/" + formData.get("id"),

      success: res => {
         var modal = $("#div-edit-product-photo");
         closeModal(modal);
         showModalAndRefresh(res.message);
      },
      error: err => {
         var status = getStatus(err);

         if (status >= 400 && status <= 599 != 404)
            showErrorAlert(err.responseJSON.message);
         else if (status == 0 || status == 404) {
            var url = "./404.html";
            redirectPage(url);
         }
      }
   });
}


function deleteProduct(productId) {
   var token = getCookie("token");

   $.ajax({
      cache: false,
      headers: { Authorization: "Bearer " + token },
      type: "delete",
      url: urlApi + "products/delete/" + productId,

      success: res => {
         var modal = $("#id_product_confrmdiv");
         closeModal(modal);
         showModalAndRefresh(res.message);
      },
      error: err => {
         var status = getStatus(err);

         if (status >= 400 && status <= 599 != 404)
            showErrorAlert(err.responseJSON.message);
         else if (status == 0 || status == 404) {
            var url = "./404.html";
            redirectPage(url);
         }
      }
   });
}


// ORDERS
function getUserOrders() {
   var token = getCookie("token");

   $.ajax({
      cache: false,
      headers: { Authorization: "Bearer " + token },
      type: "get",
      url: urlApi + "orders",

      success: res => {
         for (var i = 0; i < res.data.length; i++) {
            // definir 0 quando NULL ou vazio
            res.data[i].pending = (res.data[i].pending == null || res.data[i].pending == "") ? 0 : res.data[i].pending;
            res.data[i].completed = (res.data[i].completed == null || res.data[i].completed == "") ? 0 : res.data[i].completed;

            var disableOrderCancellation = 0;  // 0 - desativa | 1 - ativa
            if ((res.data[i].accepted == 0 && res.data[i].canceled == 0) && (res.data[i].pending == 0 || res.data[i].completed == 0)) {
               disableOrderCancellation = 1;
            }

            var html = getHtmlUserOrders(res.data[i], disableOrderCancellation);
            $("#get-user-orders").append(html);
            var html = getHtmlModalOrders(res.data[i]);
            $("#modals-orders").append(html);
         }

         $("span[data-disableOrderCancellation~='0']").css("display", "none");

         $("span[data-accepted~='0']").css("background-color", "#1e73be");
         $("span[data-accepted~='0']").text("Por aceitar");
         $("span[data-accepted~='1']").css("background-color", "#1e73be");
         $("span[data-accepted~='1']").text("Por entregar");
         $("span[data-pending~='1']").css("background-color", "#1e73be");
         $("span[data-pending~='1']").text("Por entregar");
         $("span[data-completed~='1']").css("background-color", "#047a06");
         $("span[data-completed~='1']").text("Entregue");
         $("span[data-canceled~='1']").css("background-color", "#c33332");
         $("span[data-canceled~='1']").text("Cancelada");
      },
      error: err => {
         var status = getStatus(err);

         if (status >= 400 && status <= 599 != 404)
            showErrorAlert(err.responseJSON.message);
         else if (status == 0 || status == 404) {
            var url = "./404.html";
            redirectPage(url);
         }
      }
   });
}


function getMerchantOrders() {
   var token = getCookie("token");

   $.ajax({
      cache: false,
      headers: { Authorization: "Bearer " + token },
      type: "get",
      url: urlApi + "orders/merchant",

      success: res => {
         for (var i = 0; i < res.data.length; i++) {
            // definir 0 quando NULL ou vazio
            res.data[i].pending = (res.data[i].pending == null || res.data[i].pending == "") ? 0 : res.data[i].pending;
            res.data[i].completed = (res.data[i].completed == null || res.data[i].completed == "") ? 0 : res.data[i].completed;

            var html = getHtmlMerchantOrders(res.data[i]);
            $("#table-orders").append(html);
            var html = getHtmlModalMerchantOrders(res.data[i]);
            $("#modals-merchant-orders").append(html);
         }

         $("span[data-accepted~='0']").css("background-color", "#1e73be");
         $("span[data-accepted~='0']").text("Por aceitar");
         $("span[data-accepted~='1']").css("background-color", "#1e73be");
         $("span[data-accepted~='1']").text("Por entregar");
         $("span[data-pending~='1']").css("background-color", "#1e73be");
         $("span[data-pending~='1']").text("Por entregar");
         $("span[data-completed~='1']").css("background-color", "#047a06");
         $("span[data-completed~='1']").text("Entregue");
         $("span[data-canceled~='1']").css("background-color", "#c33332");
         $("span[data-canceled~='1']").text("Cancelada");
      },
      error: err => {
         var status = getStatus(err);

         if (status >= 400 && status <= 599 != 404)
            showErrorAlert(err.responseJSON.message);
         else if (status == 0 || status == 404) {
            var url = "./404.html";
            redirectPage(url);
         }
      }
   });
}


function getDriverOrders() {
   var token = getCookie("token");

   $.ajax({
      cache: false,
      headers: { Authorization: "Bearer " + token },
      type: "get",
      url: urlApi + "orders/driver",

      success: res => {
         for (var i = 0; i < res.data.length; i++) {
            // definir 0 quando NULL ou vazio
            res.data[i].pending = (res.data[i].pending == null || res.data[i].pending == "") ? 0 : res.data[i].pending;
            res.data[i].completed = (res.data[i].completed == null || res.data[i].completed == "") ? 0 : res.data[i].completed;

            var html = getHtmlDriverOrders(res.data[i]);
            $("#table-deliveries").append(html);
            var html = getHtmlModalDriverOrders(res.data[i]);
            $("#modals-driver-orders").append(html);
         }

         $("[data-pending~='1']").css("background-color", "#c33332");
         $("[data-pending~='1']").text("Concluir");
         $("[data-pending~='1']").addClass("complete");
         $("[data-pending='1']").css("cursor", "pointer");

         $("[data-completed~='1']").css("background-color", "#047a06");
         $("[data-completed~='1']").text("Concluída");
      },
      error: err => {
         var status = getStatus(err);

         if (status >= 400 && status <= 599 != 404)
            showErrorAlert(err.responseJSON.message);
         else if (status == 0 || status == 404) {
            var url = "./404.html";
            redirectPage(url);
         }
      }
   });
}


function getOrdersNotAccepted() {
   var token = getCookie("token");

   $.ajax({
      cache: false,
      headers: { Authorization: "Bearer " + token },
      type: "get",
      url: urlApi + "orders/not-accepted",

      success: res => {
         for (var i = 0; i < res.data.length; i++) {
            var html = getHtmlAllOrdersNotAccepted(res.data[i]);
            $("#table-orders").append(html);
            var html = getHtmlModalOrders(res.data[i]);
            $("#modals-order-detail").append(html);
         }

         $("[data-accepted~='0']").css("background-color", "#047a06");
         $("[data-accepted~='0']").text("Aceitar");
         $("[data-accepted~='0']").addClass("accept");
         $("[data-accepted~='0']").css("cursor", "pointer");
      },
      error: err => {
         var status = getStatus(err);

         if (status >= 400 && status <= 599 != 404)
            showErrorAlert(err.responseJSON.message);
         else if (status == 0 || status == 404) {
            var url = "./404.html";
            redirectPage(url);
         }
      }
   });
}


function createOrder() {
   var form = $("#form-create-order");
   var formData = getFormData(form);
   var token = getCookie("token");

   $.ajax({
      cache: false,
      data: formData,
      headers: { Authorization: "Bearer " + token },
      type: "post",
      url: urlApi + "orders/create",

      success: res => {
         showModalAndRefresh(res.message);
      },
      error: err => {
         var status = getStatus(err);

         if (status >= 400 && status <= 599 != 404)
            showErrorAlert(err.responseJSON.message);
         else if (status == 0 || status == 404) {
            var url = "./404.html";
            redirectPage(url);
         }
      }
   });
}


function cancelOrder(orderId, productId) {
   var token = getCookie("token");
   var data = { "order_id": orderId, "product_id": productId };

   $.ajax({
      cache: false,
      data: data,
      headers: { Authorization: "Bearer " + token },
      type: "delete",
      url: urlApi + "orders/cancel",

      success: res => {
         var modal = $("#id_order_confrmdiv");
         closeModal(modal);
         showModalAndRefresh(res.message);
      },
      error: err => {
         var status = getStatus(err);

         if (status >= 400 && status <= 599 != 404)
            showErrorAlert(err.responseJSON.message);
         else if (status == 0 || status == 404) {
            var url = "./404.html";
            redirectPage(url);
         }
      }
   });
}


// DELIVERIES
function acceptDelivery(id) {
   var token = getCookie("token");

   $.ajax({
      cache: false,
      data: { "order_id": id },
      headers: { Authorization: "Bearer " + token },
      type: "post",
      url: urlApi + "deliveries/accept",

      success: res => {
         showModalAndRefresh(res.message);
      },
      error: err => {
         var status = getStatus(err);

         if (status >= 400 && status <= 599 != 404)
            showErrorAlert(err.responseJSON.message);
         else if (status == 0 || status == 404) {
            var url = "./404.html";
            redirectPage(url);
         }
      }
   });
}


function completeDelivery(id) {
   var token = getCookie("token");

   $.ajax({
      cache: false,
      headers: { Authorization: "Bearer " + token },
      data: { "order_id": id },
      type: "patch",
      url: urlApi + "deliveries/complete",

      success: res => {
         showModalAndRefresh(res.message);
      },
      error: err => {
         var status = getStatus(err);

         if (status >= 400 && status <= 599 != 404)
            showErrorAlert(err.responseJSON.message);
         else if (status == 0 || status == 404) {
            var url = "./404.html";
            redirectPage(url);
         }
      }
   });
}