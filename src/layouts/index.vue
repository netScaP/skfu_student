<template>
  <div id="app">
    <header>
      <img src="../assets/logo.png" />
      <router-link
        :to="{ name: type === 'student' ? 'Company' : 'Student' }"
        tag="p"
        class="header-title"
      >
        {{ type === 'student' ? 'Перейти на сайт для компаний' : 'Перейти на сайт для студентов' }}
      </router-link>
    </header>
    <div class="body">
      <div class="body__left">
        <p class="desc">
          {{
            type === 'student'
              ? 'Ищите вакансии, изучайте компании, читайте о них отзывы и расскажите о предложите свою кандидатура'
              : 'Размещайте свои вакансии, знакомьтесь с резюме студентов и находите лучшие кандидатуры'
          }}
        </p>
        <router-link :to="{ name: type === 'student' ? 'Student' : 'Company' }" tag="button">
          {{ type === 'student' ? 'Отправить резюме' : 'Создать резюме' }}
          <!-- <button>
          </button> -->
        </router-link>
      </div>
      <div class="body__right">
        <img v-if="type === 'student'" src="../assets/student.png" />
        <img v-else src="../assets/company.png" />
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'Layout',
  data() {
    return {
      type: 'student',
    }
  },

  mounted() {
    if (this.$route.name === 'Student') {
      this.type = 'student'
    } else {
      this.type = 'company'
    }
  },

  watch: {
    $route: {
      handler() {
        if (this.$route.name === 'Student') {
          this.type = 'student'
        } else {
          this.type = 'company'
        }
      },
      deep: true,
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
  background-color: #448fa7;
  height: 200px;
  width: 100%;
  padding: 0 10%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header-title {
  color: white;
  font-size: 24px;
}
.body {
  display: flex;
  align-items: center;
  padding: 100px 5% 0;
}
.body__left {
  width: 50%;
}
.body__right {
  width: 50%;
}
.desc {
  font-size: 36px;
  color: black;
}
button {
  border: 5px solid #ff5678;
  border-radius: 25px;
  padding: 20px 80px;
  font-size: 36px;
  background: transparent;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
