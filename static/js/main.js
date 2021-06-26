window.onload = function () {
    // TOP画面セクション要素
    const top = document.getElementById("top")
    let header_coler_flag = false

    // ページリロード時に対応
    HeaderColorFunc(window.scrollY)

    window.addEventListener('scroll', function () {
        scroll_y = window.scrollY
        HeaderColorFunc(scroll_y)
    });

    function HeaderColorFunc(scroll_y) {
        if (scroll_y < top.clientHeight * 0.7 && header_coler_flag) {
            document.getElementById("header").classList.toggle("bg-base")
            header_coler_flag = false
        } else if (top.clientHeight * 0.7 < scroll_y && !header_coler_flag) {
            document.getElementById("header").classList.toggle("bg-base")
            header_coler_flag = true
        }
    }

}
