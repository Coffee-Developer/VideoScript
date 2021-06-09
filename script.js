setTimeout(() => {
  document.querySelector('div[class="cke_wysiwyg_div cke_reset cke_enable_context_menu cke_editable cke_editable_themed cke_contents_ltr cke_show_borders"]').children[0].innerText = "Hello Wolrd";
  document.getElementById("send-message-button").click();
  document.getElementById("hangup-button").click();
}, 3600 * 1000); // Depois de uma hora
