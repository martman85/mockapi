<template>
  <div class="user" v-for="user in users" :key="user">
    <span>{{ user.name }} ({{ user.function }})</span>
    <img :src="user.image" />
  </div>
</template>

<script>
import UsersService from './services/users-service';

export default {
  components: {
  },
  data() {
    return {
      users: [],
    };
  },
  created() {
    this.getUsers();
  },
  methods: {
    getUsers() {
      UsersService.getUsers().then((res) => {
        this.users = res.data;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
  img {
    display: inline;
    border-radius: 100%;
    width: 50px;
    height: 50px;
  }
</style>
