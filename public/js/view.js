function getHtmlMerchantsInIndex(data) {
   return $('\
      <li class="has-border">\
         <figure>\
            <a href="#"><img src="./uploads/photos/'+ data.url_photo + '" class="attachment-full size-full wp-post-image" alt=""></a>\
         </figure>\
      </li>\
   ');
}


function getHtmlProductsInIndex(data) {
   return $('\
      <li class="col-lg-6 col-md-6 col-sm-6 col-xs-12">\
         <div class="list-post featured">\
            <div class="img-holder">\
               <figure><a href="#"><img src="../uploads/products/'+ data.url_photo + '" class="img-thumb wp-post-image" alt=""></a></figure>\
               <span class="restaurant-status open">\
                  <em class="bookmarkRibbon"></em>'+ data.stock + '\
               </span>\
            </div>\
            <div class="text-holder">\
               <div class="post-title">\
                  <h5>\
                     <a href="#">'+ data.product_name + '</a>\
                     <span class="sponsored text-color">Sponsored</span>\
                  </h5>\
               </div>\
               <address>'+ data.user_name + '<span></address>\
               <div class="delivery-potions">\
                  <div class="post-time">\
                     <image width="25" height="25" src="./images/euro.png"></image>\
                  </div>\
                  <span>20.3€</span>\
               </div>\
            </div>\
            <div class="list-option">\
               <a href="javascript:void(0);" class="shortlist-btn" data-toggle="modal" data-target="#sign-in">\
                  <i class="icon-heart-o"></i>\
               </a>\
            </div>\
         </div>\
      </li>\
   ');
}


function getHtmlUserInfoOnHeader() {
   return $('\
      <figure class="profile-image">\
         <img src="./uploads/photos/'+ getCookie("url_photo") + '" alt="Foto do utilizador">\
      </figure>\
      <span>'+ getCookie("name") + '</span>\
   ');
}


function getHtmlTitle(data) {
   return $('\
      <div class="img-holder">\
         <figure>\
            <img src="./uploads/photos/' + getCookie("url_photo") + '"">\
         </figure>\
      </div>\
      <div class="text-holder">\
         <span class="restaurant-title">'+ getCookie("name") + '</span>\
         <ul class="user-info-contact">\
            <li class="cell">\
               <i class="icon-phone"></i><a href="tel:912545988">'+ data.phone_number + '</a>\
            </li>\
            <li class="email">\
               <i class="icon-mail5"></i><a href="mail:josetomas@gmail.com">'+ getCookie("email") + '</a>\
            </li>\
         </ul>\
      </div>\
   ');
}


function getHtmlImgEditPhoto() {
   return $('<img src="./uploads/photos/' + getCookie("url_photo") + '">');
}


function getHtmlClientData1(data) {
   return $('\
      <div class="row">\
         <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">\
            <div class="field-holder">\
               <label>Nome*</label>\
               <input type="text" class="foodbakery-dev-req-field" name="name" value="'+ data.name + '" form="form-edit-user-data">\
            </div>\
         </div>\
         <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">\
            <div class="field-holder">\
               <label>Apelido*</label>\
               <input type="text" class="foodbakery-dev-req-field" name="surname" value="'+ data.surname + '" form="form-edit-user-data">\
            </div>\
         </div>\
         <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">\
            <div class="field-holder">\
               <label>Email*</label>\
               <input type="text" class="foodbakery-dev-req-field" name="email" value="'+ data.email + '" form="form-edit-user-data">\
            </div>\
         </div>\
         <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">\
            <div class="field-holder">\
               <label>Nome de Utilizador*</label>\
               <input type="text" class="form-control gllpLongitude" name="username" value="'+ data.username + '" form="form-edit-user-data">\
            </div>\
         </div>\
      </div>\
   ');
}


function getHtmlClientData2(data) {
   return $('\
      <div class="opt-conts">\
         <div class="row">\
            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">\
               <div class="field-holder">\
                  <label>Nº Telemóvel*</label>\
                  <input type="text" class="form-control gllpLongitude" name="phone_number" value="'+ data.phone_number + '" form="form-edit-user-data">\
               </div>\
            </div>\
            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">\
               <div class="field-holder">\
                  <label>Morada*</label>\
                  <input type="text" class="form-control gllpLongitude" name="address" value="'+ data.address + '" form="form-edit-user-data">\
               </div>\
            </div>\
            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">\
               <div class="field-holder">\
                  <label>Código Postal*</label>\
                  <input type="text" class="form-control gllpLongitude" name="zip_code" value="'+ data.zip_code + '" form="form-edit-user-data">\
               </div>\
            </div>\
            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">\
               <div class="field-holder"></div>\
               <div class="field-holder search-location-map input-button-loader">\
                  <input type="submit" class="acc-submit cs-section-update cs-color gllpSearchButton" value="Alterar dados" form="form-edit-user-data">\
               </div>\
            </div>\
         </div>\
      </div>\
   ');
}


function getHtmlMerchantData1(data) {
   return $('\
      <div class="row">\
         <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">\
            <div class="field-holder">\
               <label>Nome*</label>\
               <input type="text" class="foodbakery-dev-req-field" name="name" value="'+ data.name + '" form="form-edit-user-data">\
            </div>\
         </div>\
         <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">\
            <div class="field-holder">\
               <label>Nome de Utilizador*</label>\
               <input type="text" class="form-control gllpLongitude" name="username" value="'+ data.username + '" form="form-edit-user-data">\
            </div>\
         </div>\
         <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">\
            <div class="field-holder">\
               <label>Email*</label>\
               <input type="text" class="foodbakery-dev-req-field" name="email" value="'+ data.email + '" form="form-edit-user-data">\
            </div>\
         </div>\
         <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">\
            <div class="field-holder">\
               <label>Nº Telemóvel*</label>\
               <input type="text" class="form-control gllpLongitude" name="phone_number" value="'+ data.phone_number + '" form="form-edit-user-data">\
            </div>\
         </div>\
      </div>\
   ');
}


function getHtmlMerchantData2(data) {
   return $('\
      <div class="opt-conts">\
         <div class="row">\
            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">\
               <div class="field-holder">\
                  <label>Morada*</label>\
                  <input type="text" class="form-control gllpLongitude" name="address" value="'+ data.address + '" form="form-edit-user-data">\
               </div>\
            </div>\
            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">\
               <div class="field-holder">\
                  <label>Código Postal*</label>\
                  <input type="text" class="form-control gllpLongitude" name="zip_code" value="'+ data.zip_code + '" form="form-edit-user-data">\
               </div>\
            </div>\
            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">\
               <div class="field-holder">\
                  <label>Descrição*</label>\
                  <input type="hidden" class="form-control gllpLongitude" name="description" value="'+ data.description + '" form="form-edit-user-data">\
                  <textarea>'+ data.description + '</textarea>\
               </div>\
            </div>\
            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">\
               <div class="field-holder">\
                  <label>NIF*</label>\
                  <input type="text" class="form-control gllpLongitude" name="nif" value="'+ data.nif + '" form="form-edit-user-data">\
               </div>\
            </div>\
            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">\
               <div class="field-holder"></div>\
               <div class="field-holder search-location-map input-button-loader">\
                  <input type="submit" class="acc-submit cs-section-update cs-color gllpSearchButton" value="Alterar dados" form="form-edit-user-data">\
               </div>\
            </div>\
         </div>\
      </div>\
   ');
}


function getHtmlDriverData1(data) {
   return $('\
      <div class="row">\
         <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">\
            <div class="field-holder">\
               <label>Nome*</label>\
               <input type="text" class="foodbakery-dev-req-field" name="name" value="'+ data.name + '" form="form-edit-user-data">\
            </div>\
         </div>\
         <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">\
            <div class="field-holder">\
               <label>Apelido*</label>\
               <input type="text" class="foodbakery-dev-req-field" name="surname" value="'+ data.surname + '" form="form-edit-user-data">\
            </div>\
         </div>\
         <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">\
            <div class="field-holder">\
               <label>Email*</label>\
               <input type="text" class="foodbakery-dev-req-field" name="email" value="'+ data.email + '" form="form-edit-user-data">\
            </div>\
         </div>\
         <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">\
            <div class="field-holder">\
               <label>Nome de Utilizador*</label>\
               <input type="text" class="form-control gllpLongitude" name="username" value="'+ data.username + '" form="form-edit-user-data">\
            </div>\
         </div>\
      </div>\
   ');
}


function getHtmlDriverData2(data) {
   return $('\
      <div class="opt-conts">\
         <div class="row">\
            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">\
               <div class="field-holder">\
                  <label>Morada*</label>\
                  <input type="text" class="form-control gllpLongitude" name="address" value="'+ data.address + '" form="form-edit-user-data">\
               </div>\
            </div>\
            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">\
               <div class="field-holder">\
                  <label>Código Postal*</label>\
                  <input type="text" class="form-control gllpLongitude" name="zip_code" value="'+ data.zip_code + '" form="form-edit-user-data">\
               </div>\
            </div>\
            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">\
               <div class="field-holder">\
                  <label>Nº Telemóvel*</label>\
                  <input type="text" class="form-control gllpLongitude" name="phone_number" value="'+ data.phone_number + '" form="form-edit-user-data">\
               </div>\
            </div>\
            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">\
               <div class="field-holder"></div>\
               <div class="field-holder search-location-map input-button-loader">\
                  <input type="submit" class="acc-submit cs-section-update cs-color gllpSearchButton" value="Alterar dados" form="form-edit-user-data">\
               </div>\
            </div>\
         </div>\
      </div>\
   ');
}


function getHtmlAdminData1(data) {
   return $('\
      <div class="row">\
         <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">\
            <div class="field-holder">\
               <label>Nome*</label>\
               <input type="text" class="foodbakery-dev-req-field" name="name" value="'+ data.name + '" form="form-edit-user-data">\
            </div>\
         </div>\
         <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">\
            <div class="field-holder">\
               <label>Apelido*</label>\
               <input type="text" class="foodbakery-dev-req-field" name="surname" value="'+ data.surname + '" form="form-edit-user-data">\
            </div>\
         </div>\
         <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">\
            <div class="field-holder">\
               <label>Email*</label>\
               <input type="text" class="foodbakery-dev-req-field" name="email" value="'+ data.email + '" form="form-edit-user-data">\
            </div>\
         </div>\
         <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">\
            <div class="field-holder">\
               <label>Nome de Utilizador*</label>\
               <input type="text" class="form-control gllpLongitude" name="username" value="'+ data.username + '" form="form-edit-user-data">\
            </div>\
         </div>\
      </div>\
   ');
}


function getHtmlAdminData2(data) {
   return $('\
      <div class="opt-conts">\
         <div class="row">\
            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">\
               <div class="field-holder">\
                  <label>Morada*</label>\
                  <input type="text" class="form-control gllpLongitude" name="address" value="'+ data.address + '" form="form-edit-user-data">\
               </div>\
            </div>\
            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">\
               <div class="field-holder">\
                  <label>Código Postal*</label>\
                  <input type="text" class="form-control gllpLongitude" name="zip_code" value="'+ data.zip_code + '" form="form-edit-user-data">\
               </div>\
            </div>\
            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">\
               <div class="field-holder">\
                  <label>Descrição*</label>\
                  <input type="hidden" class="form-control gllpLongitude" name="description" value="'+ data.description + '" form="form-edit-user-data">\
                  <textarea>'+ data.description + '</textarea>\
               </div>\
            </div>\
            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">\
               <div class="field-holder">\
                  <label>Nº Telemóvel*</label>\
                  <input type="text" class="form-control gllpLongitude" name="phone_number" value="'+ data.phone_number + '" form="form-edit-user-data">\
               </div>\
            </div>\
            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">\
               <div class="field-holder"></div>\
               <div class="field-holder search-location-map input-button-loader">\
                  <input type="submit" class="acc-submit cs-section-update cs-color gllpSearchButton" value="Alterar dados" form="form-edit-user-data">\
               </div>\
            </div>\
         </div>\
      </div>\
   ');
}


function getHtmlUserOrders(data) {
   return $('\
      <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">\
         <div class="order-list">\
            <div class="author-info">\
               <div class="img-holder">\
                  <figure>\
                     <a href="#"><img src="./uploads/products/'+ data.url_photo + '"> </a>\
                  </figure>\
               </div>\
               <div class="text-holder">\
                  <h6><a href="#">'+ data.merchant_name + '</a></h6>\
                  <address></address>'+ data.product_name + '\
                  <span class="price">'+ data.price + '€</span>\
               </div>\
            </div>\
            <div class="post-time">\
               <span>'+ data.address + '</span>\
               <span>'+ data.zip_code + '</span>\
            </div>\
            <span class="date-time">'+ data.date + '</span>\
            <div class="order-btn">\
               <a href="#" data-toggle="modal" data-target="#order_detail">Detalhes de Encomenda</a>\
               <span data-accepted="'+ data.accepted + '" data-canceled="' + data.canceled + '" class="order-status"></span>\
            </div>\
            <div class="modal fade menu-order-detail order-detail" id="order_detail" tabindex="-1" role="dialog">\
               <div class="modal-dialog">\
                  <div class="modal-content">\
                     <div class="modal-header">\
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>\
                        <h2>Detalhes de Encomenda</h2>\
                     </div>\
                     <div class="modal-body">\
                        <div class="order-detail-inner">\
                           <div class="description-holder">\
                              <div class="row">\
                                 <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">\
                                    <div class="list-detail-options has-checkbox">\
                                       <h3>Restaurante de Demonstração </h3>\
                                       <ul class="order-detail-options">\
                                          <li class="order-number">\
                                             <strong>ID de Encomenda:</strong>\
                                             <span>'+ data.id + '</span>\
                                          </li>\
                                          <li class="order-number">\
                                             <strong>Nome do Restaurante:</strong>\
                                             <span>'+ data.merchant_name + '</span>\
                                          </li>\
                                          <li class="created-date">\
                                             <strong>Data de Entrega:</strong>\
                                             <span>'+ data.date + '</span>\
                                          </li>\
                                          <li class="order-type">\
                                             <strong>Pagamento:</strong>\
                                             <span>Aprovado</span>\
                                          </li>\
                                       </ul>\
                                    </div>\
                                 </div>\
                                 <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">\
                                    <div class="list-detail-options has-checkbox">\
                                       <h3>Detalhe de Encomenda</h3>\
                                       <ul class="order-detail-options">\
                                          <li>\
                                             <strong>Nome do Cliente:</strong>\
                                             <span>'+ data.client_name + '</span>\
                                          </li>\
                                          <li>\
                                             <strong>Nº Telemóvel:</strong>\
                                             <span>'+ data.client_phone_number + '</span>\
                                          </li>\
                                          <li>\
                                             <strong>Email:</strong>\
                                             <span>'+ data.client_email + '</span>\
                                          </li>\
                                          <li>\
                                             <strong>Morada:</strong>\
                                             <span>'+ data.address + '</span>\
                                          </li>\
                                       </ul>\
                                    </div>\
                                 </div><br>\
                                 <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">\
                                    <div class="order-status-holder">\
                                       <div class="order-status-process order-status">\
                                          <p style="background:#047a06;">A sua encomenda está completa</p>\
                                       </div>\
                                    </div>\
                                 </div>\
                                 <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">\
                                    <h2 class="heading">Menu </h2>\
                                    <div class="responsive-table">\
                                       <ul class="categories-order table-generic">\
                                          <li class="order-heading-titles">\
                                             <div>Produto</div>\
                                             <div>Preço</div>\
                                          </li>\
                                          <li class="order-heading-titles">\
                                             <div>\
                                                <h4>'+ data.product_name + '</h4>\
                                                <h5>'+ data.description + '</h5>\
                                             </div>\
                                             <div><span class="category-price">'+ data.price + '€</span>\
                                             </div>\
                                          </li>\
                                       </ul>\
                                    </div>\
                                 </div>\
                                 <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">\
                                    <div class="row">\
                                       <div class="col-lg-8 col-md-8 col-sm-8 col-xs-12">\
                                          <h3>Encomenda Total</h3>\
                                       </div>\
                                       <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">\
                                          <ul class="order-detail-options order-total">\
                                             <li class="created-date">\
                                                <strong>Subtotal:</strong>\
                                                <span>'+ data.price + '€</span>\
                                             </li>\
                                             <li class="order-type">\
                                                <strong>\
                                                   Taxa de Entrega:</strong>\
                                                <span>'+ data.pick_up_fee + '€</span>\
                                             </li>\
                                             <li class="order-type">\
                                                <strong>IVA ('+ data.vat / 0.01 + '%)</strong>\
                                                <span>'+ (data.total - data.pick_up_fee - data.price) + '€</span>\
                                             </li>\
                                             <li class="order-type total-price">\
                                                <strong>Total:</strong>\
                                                <span>'+ data.total + '€</span>\
                                             </li>\
                                          </ul>\
                                       </div>\
                                    </div>\
                                 </div>\
                              </div>\
                           </div>\
                        </div>\
                     </div>\
                  </div>\
               </div>\
            </div>\
            <script>\
               (function ($) {\
                  $(document).ready(function () {\
                     $(".order-detail .modal-dialog .modal-content").mCustomScrollbar({\
                        setHeight: 600,\
                        theme: "minimal-dark",\
                        mouseWheelPixels: 100\
                     });\
                  });\
               })(jQuery);\
            </script>\
         </div>\
      </div>\
   ');
}
