const items = [...document.querySelectorAll("li.faq_item")]

items.forEach(item => {
    item.addEventListener("click", (e) => {
        const clickedItem = e.target.closest("li")
        const itemDetail = clickedItem.querySelector(".faq_item_detail")
        const clickedItemActive = clickedItem.classList.contains("active")
        clickedItem.classList.toggle("active")
        if (clickedItemActive) {
            itemDetail.style.height = null
        } else {
            const scrollHeight = itemDetail.scrollHeight
            itemDetail.style.height = `${scrollHeight}px`
        }
    })
})



