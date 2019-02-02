<template>
    <form>
        <div class="mdl-grid">
        <div class="mdl-cell mdl-cell--8-col">
            <div class="card-image__picture">
            <img :src="this.catUrl"/>
            </div>
        </div>
        <div class="mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet">
            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label is-upgraded is-dirty">
            <input id="username" v-model="title" type="text" class="mdl-textfield__input"/>
            <label for="username" class="mdl-textfield__label">Describe me</label>
            </div>
            <div class="actions">
            <a @click.prevent="postCat" class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
                POST A CAT
            </a>
            </div>
        </div>
        </div>
    </form>
</template>

<script>
  export default {
    data () {
      return {
        'catUrl': null,
        'title' : ""
      }
    },
    mounted () {
        //changed format to json to prevent the use of xml-parser
      this.$http.get('https://thecatapi.com/api/images/get?format=json&results_per_page=1').then(response => {
        this.catUrl = response.body[0].url
      })
    },
    methods: {
        postCat () {
            this.$root.$firebaseRefs.cat.push(
                {
                'url': this.catUrl,
                'comment': this.title,
                'info': 'Posted by Chris on Saturday',
                'created_at': -1 * new Date().getTime()
                })
                .then(this.$router.push('/'))
        }
    }
  }
</script>

<style scoped>
</style>
