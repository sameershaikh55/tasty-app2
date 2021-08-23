$(document).ready(function () {
	// LOOPED DATA
	$.each(
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		function (key, value) {
			$("#resCards_container").append(`
	                                                                                    <div class="col-12 col-sm-6 col-xl-4">
                      <div class="resCard bg-white py-3 px-3">
                        <div class="img_container position-relative">
                          <img class="w-100" src="./assets/images/restaurant/c.svg" alt="">
                          <div class="top_content position-absolute ps-2">
                            <div class="d-flex py-2">
                              <button class="border-0 fw600 bg-white themeBtnRound f10 px-2 py-1 text-dark"><img
                                  src="./assets/images/restaurant/i1.svg" class="btnIcon1" alt="">
                                Loyalty</button>
                              <button class="ms-2 border-0 fw600 themeBtn2 themeBtnRound f10 px-2 py-1 text-white"><img
                                  src="./assets/images/restaurant/i2.svg" class="btnIcon2" alt=""> 20%
                                min
                                £20</button>
                            </div>
                          </div>

                          <div class="top_content2 pb-1 ps-2 position-absolute d-flex align-items-center text-white">
                            <img class="logo_card" src="./assets/images/restaurant/i3.svg" alt="">
                            <div class="d-flex flex-column ps-1">
                              <h6 class="f14 mb-0">Joe's Pizza</h6>
                              <div class="d-flex align-items-center">
                                <div class="d-flex align-items-center">
                                  <img src="./assets/images/restaurant/i4.svg" alt="">
                                  <p class="ms-1 f12 mb-0">4.8</p>
                                </div>
                                <p class="ms-2 f12 mb-0">(300 Reviews)</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="d-flex justify-content-between pt-3">
                          <div>
                            <div class="d-flex">
                              <img src="./assets/images/restaurant/i5.svg" alt="">
                              <p class="ms-2 mb-0 f14 fw-bold">£7.99 <span class="f10 text-secondary">(Min
                                  Order)</span>
                              </p>
                            </div>
                            <div class="d-flex mt-1">
                              <img src="./assets/images/restaurant/i6.svg" alt="">
                              <p class="ms-2 mb-0 f14 fw600">Pizza, Pasta</p>
                            </div>
                          </div>
                          <div class="redDel">
                            <p class="fw600 mb-0 f12 px-2 py-1">
                              Delivery £2.99
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

	`);
		}
	);
});
// PAGE ONE START
// FOR LISTING SHOW AND HIDE END
