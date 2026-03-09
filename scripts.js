/* HEADER 插入 */
fetch('components/header.html')
.then(response => response.text())
.then(data => {
    document.getElementById('header-placeholder').innerHTML = data;

    /* 读取 PAGE-TITLE */
    document.querySelector(".page-title").textContent
    =
    document.querySelector('meta[name="page-title"]').content

    /* HEADER 收缩 */
    const header = document.getElementById("site-header");
    const trigger = document.getElementById("scroll-trigger");

    const observer = new IntersectionObserver(
        ([entry]) => {
            if(!entry.isIntersecting){
                header.classList.add("compact");
            } else {
                header.classList.remove("compact");
            }
        },
        {
            rootMargin: "-150px 0px 0px 0px"
        }
    );

    observer.observe(trigger);

    /* MENU 当前选项高亮 */
    const links = document.querySelectorAll(".menu a");
    const current = window.location.pathname;

    links.forEach(link => {
        if(current.includes(link.getAttribute("href"))){
            link.classList.add("active");
        }
    });

})

/* FOOTER 插入 */
fetch('components/footer.html')
.then(response => response.text())
.then(data => {
    document.getElementById('footer-placeholder').innerHTML = data;

    // 自动追踪更新日期（必须在 footer 插入后执行）
    const date = new Date(document.lastModified);
    document.getElementById("last-updated").textContent =
        date.getFullYear() + "-" +
        String(date.getMonth()+1).padStart(2,'0') + "-" +
        String(date.getDate()).padStart(2,'0');
});