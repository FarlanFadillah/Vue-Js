<script setup>

function openMoreMenu() {
    document.querySelector('.popup').style.display = 'flex'
    document.querySelector('.more-menu-card').style.display = 'flex'

    setTimeout(() => {
        document.querySelector('.more-menu-card').style.opacity = '1'
        document.querySelector('.more-menu-card').style.transform = 'scale(1)'
        document.querySelector('.popup-background').style.opacity = '1'
    }, 100);
}

function closePopUp(params) {
    // More Menu Card
    document.querySelector(params).style.transform = 'scale(0)'
    document.querySelector(params).style.opacity = '0'

    document.querySelector('.popup-background').style.opacity = '0'
    setTimeout(() => {
        // More Menu Card
        document.querySelector(params).style.transform = 'scale(2)'
        document.querySelector(params).style.display = 'none'

        document.querySelector('.popup').style.display = 'none'
    },100)
}

</script>

<template>

    <nav class="navbar">
        <div class="logo">
            <a href=""><img class="logo-img" src="../assets/instagram.png" alt=""></a>
        </div>

        <div class="menu">

            <ul>

                <li><a><i class="fa-solid fa-house"></i><span>Home</span> </a></li>
                <li><a class="search-bar"><i class="fa-solid fa-magnifying-glass"></i><span>Search</span> </a></li>
                <li><a><i class="fa-regular fa-compass"></i><span>Explore</span> </a></li>
                <li class="disable-btn"><a class="disable-btn"><i
                            class="fa-solid fa-clapperboard"></i><span>Reels</span> </a></li>
                <li><a><i class="fa-brands fa-facebook-messenger"></i><span>Messages</span>
                    </a></li>
                <li><a class="notification"><i class="fa-sharp fa-regular fa-heart"></i><span>Notifications</span> </a></li>
                <li><a class="create"><i class="fa-regular fa-square-plus"></i><span>Create</span> </a></li>
                <li><a><i
                            class="fa-solid fa-user"></i><span>Profile</span></a></li>
                <li v-on:click="openMoreMenu"><a class="more"><i class="fa-sharp fa-solid fa-bars"></i><span>More</span></a></li>
            </ul>

        </div>

    </nav>

    <div class="popup">
        <div v-on:click="closePopUp('.more-menu-card')" class="popup-background">

        </div>
        <div v-on:click="closePopUp('.more-menu-card')" class="close-btn">
            <a class="x-btn"><i class="fa-solid fa-xmark"></i></a>
        </div>
        <div class="more-menu-card" onclick="closePopUp()">
            <ul>
                <li><a><span>Settings</span> <i class="fa-sharp fa-solid fa-gear"></i></a></li>
                <li class="disable-btn"><a><span>Your activity</span> <i class="fa-solid fa-clock-rotate-left"></i></a></li>
                <li><a><span>Saved</span><i class="fa-sharp fa-regular fa-bookmark"></i></a></li>
                <li class="disable-btn"><a><span>Switch apparance</span> <i class="fa-sharp fa-regular fa-moon"></i></a></li>
                <li class="disable-btn"><a><span>Report a problem</span> <i class="fa-solid fa-circle-exclamation"></i></a></li>
                <li><a><span>Switch accounts</span></a></li>
                <li><a href="login"><span>Log out</span></a></li>
            </ul>
        </div>
    </div>



</template>

<style></style>