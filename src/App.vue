<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-container>
        <b-row>
          <b-col>
            <b-navbar-brand :to="{ name: 'home' }"
              ><b-icon
                icon="check2-circle"
                class="mr-1"
                animation="cylon"
              ></b-icon>
              Kushki</b-navbar-brand
            >
          </b-col>
          <b-col>
            <b-collapse id="nav-collapse" is-nav>
              <b-navbar-nav>
                <b-nav-item :to="{ name: 'about' }">About Us</b-nav-item>
              </b-navbar-nav>
            </b-collapse>
          </b-col>
        </b-row>
      </b-container>
    </b-navbar>
    <b-container>
      <router-view />
    </b-container>
  </div>
</template>
