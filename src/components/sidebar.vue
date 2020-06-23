<template>
    <!-- Sidebar Section -->
    <aside id="addo-aside">
        <!-- Logo -->
        <div id="addo-logo"> <a href="#"><img src="images/logo.jpg" alt="logo"></a> </div>
        <!-- Menu -->
        <nav id="addo-main-menu">
            <ul>
                <li><router-link to="/accueil#home">Accueil</router-link></li>
                <li><a href="#about" v-smooth-scroll>A propos</a></li>
                <li><a href="#services" v-smooth-scroll>Services</a></li>
                <li><a href="#portfolio" v-smooth-scroll>Portfolio</a></li>
                <li><a href="#contact" v-smooth-scroll>Contact</a></li>
                <li><router-link to="/realisations#portfolio-all">Toutes mes realisations</router-link></li>
            </ul>
        </nav>
        <!-- Sidebar Footer -->
        <div class="addo-footer">
            <ul>
                <li><a href="https://www.facebook.com/billy.marc1"><i class="ti-facebook font-14px black-icon"></i></a></li>
                <li><a href="https://www.linkedin.com/in/billy-paul-obame-nzogho-79277b181/"><i class="ti-linkedin font-14px black-icon"></i></a></li>
            </ul>
            <p><small>&copy; 2020 Billy Paul</small></p>
        </div>
    </aside>
</template>

<script>

export default {
    name: "AppSidebar"
}
</script>

<style>

</style>