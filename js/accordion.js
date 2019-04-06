(function () {
    var buttons = document.querySelectorAll('.accordion__btn');
    var contents = document.querySelectorAll('.accordion__content');


    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function () {
            var content = this.nextElementSibling;

            if (content.style.maxHeight) {
                content.style.maxHeight = null;
                this.style.backgroundColor = "#fff";
                this.style.color = "#333";
            } else {
                for (let i = 0; i < contents.length; i++) {
                    contents[i].style.maxHeight = null;
                    buttons[i].style.backgroundColor = "#fff";
                    buttons[i].style.color = "#333";
                }
                content.style.maxHeight = content.scrollHeight + 'px';
                this.style.backgroundColor = "#0652DD";
                this.style.color = "#FFF";
            }
        });
    }
}());