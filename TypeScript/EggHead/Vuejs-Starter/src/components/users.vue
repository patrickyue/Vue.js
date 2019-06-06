<template>
  <div>
    <ul>
      <li v-for="user in users">{{user.name}}</li>
    </ul>
    <router-link to="/">Hello</router-link>
  </div>
</template>

<script lang='ts'>
import { Component, Inject, Vue } from "vue-property-decorator";
import { UsersService } from "./users-service";

@Component({})
export default class Users extends Vue {
  users = [];
  usersService = new UsersService();
  @Inject("PPP") http;
  created() {
    this.usersService.getUsers().then(users => {
      this.users = users;
    });
  }
}
</script>
