(function () {
    window.Utils = window.Utils || {};
    
    Utils.Lightbox = function (el) {
        if (typeof el === "string") {
            if (el.indexOf("<") === -1 && document.querySelector(el)) {
                this.el = document.querySelector(el);
            } else {
                this.html = el;
            }
        } else {
            this.el = el;
        }

        if (this.el) {
            this.parent = this.el.parentNode;
        }
    };

    Utils.Lightbox.prototype = {
        show: function () {
            var lightboxMask = document.createElement("div");
            lightboxMask.className = "lightbox-mask";

            var lightboxContainer = document.createElement("div");
            lightboxContainer.className = "lightbox-container";

            var lightboxInnerContainer = document.createElement("div");
            lightboxInnerContainer.className = "lightbox-inner-container";

            var lightboxContent = document.createElement("div");
            lightboxContent.className = "lightbox-content";

            if (this.html) {
                lightboxContent.innerHTML = this.html;
            } else {
                lightboxContent.appendChild(this.el);
            }

            lightboxContainer.appendChild(lightboxInnerContainer);
            lightboxInnerContainer.appendChild(lightboxContent);

            document.body.appendChild(lightboxContainer);
            document.body.appendChild(lightboxMask);
            document.body.className = document.body.className + " lightbox-open";

            this.lightboxContainer = lightboxContainer;
            this.lightboxMask = lightboxMask;
        },

        hide: function () {
            if (this.el) {
                this.parent.appendChild(this.el);
            }

            document.body.removeChild(this.lightboxContainer);
            document.body.removeChild(this.lightboxMask);
            document.body.className = document.body.className.replace("lightbox-open", "");
        }
    }
})();

