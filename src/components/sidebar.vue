<template>
    <!-- Sidebar Section -->
    <aside id="addo-aside">
        <!-- Logo -->
        <div id="addo-logo"> <a href="#"><img src="images/logo.jpg" alt="logo"></a> </div>
        <!-- Menu -->
        <nav id="addo-main-menu">
            <ul>
                <li><router-link to="/#home">Accueil</router-link></li>
                <li><router-link to="/#about">A propos</router-link></li>
                <li><router-link to="/#services">Services</router-link></li>
                <li><router-link to="/#portfolio">Portfolio</router-link></li>
                <li><router-link to="/#contact">Contact</router-link></li>
                <li><router-link to="/realisations">Toutes mes realisations</router-link></li>
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