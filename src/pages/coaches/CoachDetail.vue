/* eslint-disable comma-spacing */
<template>
 <section>
   <base-card>
   <h2>{{ fullName }}</h2>
   <h3>{{ rate }}/hour</h3>
     </base-card>
 </section>
 <section>
   <base-card>
   <header>
     <h2>Interested? Reach out now!</h2>
   <base-button link :to="contactLink">Contact
   </base-button>
   </header>
   <router-view></router-view>
   </base-card>
 </section>
 <section>
   <base-card>
   <base-badge v-for="area in areas" :key="area" :bind="type" :title="area"></base-badge>
   <p>{{ description }}</p>
   </base-card>
 </section>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      selectedCoach: null,
    };
  },
  computed: {
    fullName() {
      // eslint-disable-next-line prefer-template
      return this.selectedCoach.firstName + '' + this.selectedCoach.lastName;
    },
    areas() {
      return this.selectedCoach.areas;
    },
    contactLink() {
      // eslint-disable-next-line prefer-template
      return this.$router.path + '/' + this.id + '/contact';
    },
  },
};
</script>
