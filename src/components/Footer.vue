<template>
  <div id="app">
  <div class="container">
    <article>
      <header>
        <div class="progress">
          <div class="progress-step"
               :class="{'active': index === activeStep}" v-for="(step, index) in formSteps" :key="'step'+index"> {{ index + 1 }}
          </div>
        </div>
      </header>
      <section :class="animation">
        <h2>{{ formSteps[activeStep].title }}</h2>
        <div class="input-fields">
          <div class="input-container" v-for="(field, index) in formSteps[activeStep].fields" :key="'field'+index">
            <input type="text" :class="{'wrong-input': !field.valid}" v-model="field.value" required />
            <label class="input-label">{{ field.label }}</label>
          </div>
        </div>
        <div class="actions">
          <button v-if="activeStep + 1 < formSteps.length -1" @click="checkFields">next</button>
          <button v-if="activeStep + 1 === formSteps.length -1" @click="checkFields">done</button>
        </div>
      </section>
    </article>
  </div>
  <!-- Youtube Link -->
  <a id="yt_link" target="_blank" href="https://www.youtube.com/watch?v=8S5a7wM0DUw&list=PLINmvGGUwYc2FVxImTwT66Phi4hQ2embf">Watch on YouTube</a>
</div>
</template>

<script>
new Vue({
  el: '#app',
  data: {
    activeStep: 0,
    animation: 'animate-in',
    formSteps: [
      {
        title: "HTML Quiz",
        fields: [
          { label: "What does HTML stand for?", value: '', valid: true, pattern: /.+/ },
          { label: "Who is making the Web standards?", value: '', valid: true, pattern: /.+/ },
          { label: "Element for the largest heading?", value: '', valid: true, pattern: /.+/ }
        ]
      },
      {
        title: "CSS Quiz",
        fields: [
          { label: "What does CSS stand for?", value: '', valid: true, pattern: /.+/ },
          { label: "HTML tag for an internal style sheet?", value: '', valid: true, pattern: /.+/ },
          { label: "Property for the background color?", value: '', valid: true, pattern: /.+/ }
        ]
      },
      {
        title: "Your data",
        fields: [
          { label: "Your first name?", value: '', valid: true, pattern: /.+/ },
          { label: "Your last name?", value: '', valid: true, pattern: /.+/ },
          { label: "Your email?", value: '', valid: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ }
        ]
      },
      {
        title: "Thank you for participating!",
      }
    ],
  },
  methods: {
    nextStep() {
      this.animation = 'animate-out';
      setTimeout(() => {
        this.animation = 'animate-in';
        this.activeStep += 1;
      }, 600);
    },
    checkFields() {
      let valid = true;
      this.formSteps[this.activeStep].fields.forEach(field => {
        if (!field.pattern.test(field.value)) {
          valid = false;
          field.valid = false;
        }
        else {
          field.valid = true;
        }
      });

      if(valid) {
        this.nextStep();
      }
      else {
        this.animation = 'animate-wrong';
        setTimeout(() => {
          this.animation = '';
        }, 400);
      }
    }
  }
})
</script>

<style>

</style>
