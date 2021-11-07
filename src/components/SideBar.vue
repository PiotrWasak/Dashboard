<template>
  <div id="sideBar" class="container-fluid">
    <div class="row">
      <nav
          id="sidebarMenu"
          class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
      >
        <div class="position-sticky pt-3">
          <ul class="nav flex-column">
            <li class="nav-item">
                <router-link class="nav-link" to="/">
              <span data-feather="home"></span>
              Dashboard
                </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/calc">
              <span data-feather="divide-circle"></span>
              Calculator
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/converter">
              <span data-feather="dollar-sign"></span>
              Currency Converter
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="todo">
              <span data-feather="check-circle"></span>
              TODO
              </router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link">
              <span data-feather="check-circle"></span>
              CV Generator
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import * as feather from "feather-icons";

export default {
  name: "SideBar",
  emits: ["change-dash-view"],
  methods: {
    changeDashView: function (viewName) {
      this.$emit("change-dash-view", viewName);
    },
  },
  mounted() {
    feather.replace({"aria-hidden": "true"});
  },
};
</script>

<style scoped>
.sidebar {
  position: fixed;
  top: 0;
  /* rtl:raw:
  right: 0;
  */
  bottom: 0;
  /* rtl:remove */
  left: 0;
  z-index: 100; /* Behind the navbar */
  padding: 48px 0 0; /* Height of navbar */
  box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.1);
}

@media (max-width: 767.98px) {
  .sidebar {
    top: 5rem;
  }
}

.sidebar-sticky {
  position: relative;
  top: 0;
  height: calc(100vh - 48px);
  padding-top: 0.5rem;
  overflow-x: hidden;
  overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */
}

.sidebar .nav-link {
  font-weight: 500;
  color: #333;
}

.sidebar .nav-link .feather {
  margin-right: 4px;
  color: #727272;
}

.sidebar .nav-link.active {
  color: #2470dc;
}

.sidebar .nav-link:hover .feather,
.sidebar .nav-link.active .feather {
  color: inherit;
}

.sidebar-heading {
  font-size: 0.75rem;
  text-transform: uppercase;
}

</style>
