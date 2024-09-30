$(document).ready(function() {
    const dropdown_btn = $(".dropdown-btn");
    const dropdown = $(".dropdown");
    const hamburger_btn = $("#hamburger");
    const nav_menu = $(".menu");
    const links = $(".dropdown a");

    function setAriaExpandedFalse() {
        dropdown_btn.attr("aria-expanded", "false");
    }

    function closeDropdownMenu() {
        dropdown.removeClass("active").on("click", function(e) {
            e.stopPropagation();
        });
    }

    function toggleHamburger() {
        nav_menu.toggleClass("show");
    }

    dropdown_btn.on("click", function(e) {
        const dropdown_index = $(this).data("dropdown");
        const dropdown_element = $("#" + dropdown_index);

        dropdown_element.toggleClass("active");
        dropdown.not(dropdown_element).removeClass("active");
        
        e.stopPropagation();
        $(this).attr("aria-expanded", $(this).attr("aria-expanded") === "false" ? "true" : "false");
    });

    links.on("click", function() {
        closeDropdownMenu();
        setAriaExpandedFalse();
        toggleHamburger();
    });

    $(document).on("click", function() {
        closeDropdownMenu();
        setAriaExpandedFalse();
    });

    $(document).on("keydown", function(e) {
        if (e.key === "Escape") {
            closeDropdownMenu();
            setAriaExpandedFalse();
        }
    });

    hamburger_btn.on("click", toggleHamburger);
});
