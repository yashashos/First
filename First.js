// تحقق من أن الصفحة تبدأ بالرابط المحدد
if (window.location.href.startsWith("https://algeria.blsspainglobal.com/DZA/bls/vt")) {
  (function () {
    "use strict";



    // دالة لملء القوائم المنسدلة بالترتيب المطلوب
    async function fillAllDropdownsInOrder() {
      for (const dropdown of dropdownsOrder) {
        await fillDropdown(dropdown.selectorPrefix, dropdown.selectedIndex);
      }
    }

    // دالة لتعبئة القوائم المنسدلة وفقاً لترتيب معين
    async function fillDropdown(selectorPrefix, selectedIndex) {
      for (let i = 1; i < 10; i++) {
        const element = document.querySelector(
          `[aria-owns="${selectorPrefix}${i}_listbox"]`
        );
        if (element !== null) {
          const isVisible = element.offsetParent !== null;
          if (isVisible) {
            console.log(`${selectorPrefix} ${i} is visible`);
            const dropdown = $(`#${selectorPrefix}${i}`).data("kendoDropDownList");
            dropdown.select(selectedIndex);
            dropdown.trigger("change");
          } else {
            // console.log(`${selectorPrefix} ${i} is not visible`);
          }
        }
      }
    }

    // استدعاء الدالة لملء القوائم المنسدلة بالترتيب المطلوب
    fillAllDropdownsInOrder();
  })();
}


/*
if (window.location.href.startsWith("https://algeria.blsspainglobal.com/DZA/bls/vt")) {
(function () {
  "use strict";

  async function RemplirForm() {
    await RemplirElement("AppointmentCategoryId", 1, 1);//Normal
    await RemplirElement("VisaType", 1, 2);
    await RemplirElement("VisaSubType", 2, 1);
    await RemplirElement("Location", 1, 1);// Oran
  }

  async function RemplirElement(elementPrefix, startIndex, selectIndex) {
    var element;
    var isVisible;
    for (var i = startIndex; i < 10; i++) {
      element = document.querySelector(
        '[aria-owns="' + elementPrefix + i + '_listbox"]'
      );
      if (element !== null) {
        isVisible = $(element).is(":visible");

        if (isVisible) {
          console.log(elementPrefix + " " + i + " is visible");
          var dropdown = $("#" + elementPrefix + i).data("kendoDropDownList");
          dropdown.select(selectIndex);
          dropdown.trigger("change");
          await sleep(500); // انتظر لبعض الوقت بين كل تعبئة للنموذج
        } else {
          console.log("Element " + i + " is not visible");
        }
      }
    }
  }

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  RemplirForm();
})();}
*/


//--------------------------//
var visaTextElement = document.querySelector('.align-items-center.text-primary');

    if (visaTextElement) {
        visaTextElement.textContent = " Apply for VISA to Spain YASDZ ✈️ ";
        visaTextElement.style.fontSize = "28px";
    }
//-----------------------------//

const acceptableTitles = [
  "504 Gateway Time-out",
  "502 Bad Gateway",
  "Application Temporarily Unavailable"
];

const pageTitle = document.title;

if (acceptableTitles.includes(pageTitle)) {
  setTimeout(() => {
    window.location.reload();
  }, 30000);
}
//---------------------------//




window.addEventListener("load", function() {
    var iconClicked = false;
    var currentPage = window.location.href;
    if (currentPage.startsWith("https://algeria.blsspainglobal.com/DZA/Account/LogIn")) {
        var formParent = document.getElementsByTagName('form')[0].parentNode;
        if (formParent) {
            for (var i = 0; i < combinedData.length; i++) {
                var button = document.createElement('input');
                button.value = ' ' + combinedData[i].name;
                button.id = 'formulaire' + i;

                button.style.cursor = 'pointer';
                button.style.border = '2.5px solid #f09b0a';
                button.style.fontSize = '14px';
                button.style.padding = '10px';
                button.style.margin = '6px';
                button.style.backgroundColor = '#3498db';
                button.style.color = '#ffffff';
                button.style.borderRadius = '15px';
                button.style.textAlign = 'center';
                button.style.textDecoration = 'none';
                button.style.display = 'inline-block';
                button.style.transition = 'background-color 0.5s';
                button.style.boxShadow = '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)';
                button.style.position = 'relative';
                button.style.left = '50%';
                button.style.transform = 'translateX(-50%)';
                button.style.fontWeight = 'bold';
                var newButton = document.createElement('button');
newButton.style.borderRadius = '25%'; // تغيير نسبة الانحناء
newButton.style.backgroundColor = 'blue'; // تغيير لون الخلفية
newButton.style.color = 'white';
newButton.style.position = 'fixed';
newButton.style.top = '10px';
newButton.style.right = '10px';
newButton.style.fontSize = '16px';
newButton.style.zIndex = '9999'; // ضبط قيمة z-index لتظهر فوق العناصر الأخرى
newButton.textContent = 'By DOUIS';
newButton.addEventListener('click', function() {
  window.location.href = 'https://t.me/essekhaya';
});
document.body.appendChild(newButton);
                button.addEventListener("mouseover", function () {
                    this.style.backgroundColor = "#5fd49d";
                    this.style.border = '2.5px solid #2980b9';
                });

                button.addEventListener("mouseout", function () {
                    this.style.backgroundColor = "#3498db";
                    this.style.border = '2.5px solid #f09b0a';
                });

                (function (index) {
                    button.addEventListener("click", function () {
                        var mail = combinedData[index].mail;
                        var password = combinedData[index].password;
                        setValues(mail, password);
                        iconClicked = true;
                        clickBtnVerify();
                    });
                })(i);

                formParent.insertBefore(button, document.getElementsByTagName('form')[0]);
            }
        }
    }

    function setValues(mail, password) {
        for (var i = 1; i <= 10; i++) {
            document.getElementById('UserId' + i).value = mail;
            document.getElementById('Password' + i).value = password;
        }
    }

    function clickBtnVerify() {
        const btnVerify = document.querySelector("#btnVerify");
        if (btnVerify && iconClicked) {
            btnVerify.click();
        }
    }

    if (currentPage.startsWith("https://algeria.blsspainglobal.com/DZA/bls/vtv")) {
        const btnVerify = document.querySelector("#btnVerify");
        if (btnVerify) {
            btnVerify.click();
        }
    }
});


//---------------------------------------//

(function () {
  "use strict";

  var OnVerifyCaptcha;
  var onAjaxSuccess;

  setTimeout(function () {
    var f = setInterval(function () {
      if (
        typeof OnVerifyCaptcha !== "undefined" &&
        typeof b !== "undefined" &&
        typeof d !== "undefined"
      ) {
        window.OnVerifyCaptcha = OnVerifyCaptcha;
        $("#dpModal").modal("hide");
        window.onDpAccept = OnVerifyCaptcha;
        window.onDpReject = onAjaxSuccess;
        clearInterval(f);
      }
    }, 100);

    var a = setInterval(function () {
      if ($("#btnSubmit").is(":visible")) {
        $("#btnSubmit").click();
        clearInterval(a);
      }
    }, 100);
  }, 3000); // تأخير لمدة 3 ثواني
})();

//---------------------------------------//

(function() {
    'use strict';

    var current_page = window.location.href;
    if (current_page.startsWith("https://algeria.blsspainglobal.com/DZA/bls/vt9101")) {
        setTimeout(function() {
            var next_page_opened = window.location.href.startsWith("https://algeria.blsspainglobal.com/DZA/blsappointment/manageappointment");
            if (next_page_opened) {
                var audio = new Audio('https://audio.jukehost.co.uk/zaWU6ZCjkWSJCLiMOVNm6y4IvWC2kepG');
                audio.play();
            } else {
                setTimeout(function() {
                    var audio = new Audio('https://audio.jukehost.co.uk/87ghEF3ds9OtxPMnho66FOaqKGDA8O12');
                    audio.play();
                }, 2000);
            }
        }, 2000);
    }
})();
