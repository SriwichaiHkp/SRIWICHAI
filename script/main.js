function autoResizeIframe(iframe) {
    function resize() {
      try {
        iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 'px';
      } catch (e) {
        console.error("Cannot access iframe content:", e);
      }
    }
  
    iframe.addEventListener('load', function () {
      resize();
      var observer = new MutationObserver(resize);
      observer.observe(iframe.contentWindow.document.body, { childList: true, subtree: true });
    });
  }
  
  window.addEventListener('DOMContentLoaded', function () {
    var iframe = document.getElementById('orderForm');
    if (iframe) {
      autoResizeIframe(iframe);
    }
  });
  