/// <reference path="app/routes/flats.route.ts" />
/// <reference path="app/routes/main.route.ts" />
let VueRouter;

const routes = [
    App.Routes.FlatsRoute,
    App.Routes.MainRoute
];

let router = new VueRouter({
    routes
});

new Vue({
    el: "#main",
    template: `
    <div class="main-container">
        <nav class="navbar navbar-toggleable-md navbar-inverse fixed-top bg-inverse">
        <a class="navbar-brand" href="#/">RealtorApp</a>
        <div class="collapse navbar-collapse" id="navbarsExampleDefault">
            <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/flats">Flats</router-link>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="http://example.com" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                <div class="dropdown-menu" aria-labelledby="dropdown01">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>
                </div>
            </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="text" placeholder="Search">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </div>
        </nav>
        <div class="container">
        <!-- Example row of columns -->
        <div class="row">
            <router-view></router-view>
        <hr>
        </div>
    </div>
    `,
    http: {
        root: 'http://localhost:5001'
    },
    router
});
