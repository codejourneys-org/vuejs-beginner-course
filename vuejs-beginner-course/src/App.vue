<template>
  <div id="app">
    <ul>
      <li>Name: {{ name }}</li>
      <li>Surname: {{ surname }}</li>
      <li>Age: {{ age }}</li>
      <li>Country: {{ country }}</li>
    </ul>
    <input v-model="newName" />

    <h3>The name has been changed {{ counter }} times</h3>
    <!-- <div class="w-full container mx-auto flex flex-wrap">
      <product
        v-for="(product, index) in products"
        :key="`key-${index}`"
        :product="product"
        :index="index"
        :is-visible="visibilityArray[index]"
        @onProductClick="onProductClick"
        class="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col"
      >
      </product>
    </div> -->
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

// import Product from '@/components/Product.vue';

export default {
  name: 'App',

  components: {
    // Product,
  },

  data: () => ({
    newName: '',
    visibilityArray: [false, true, true],
    products: [{
      isAddToCartVisible: true,
      title: 'Product title',
      show: true,
      hasTitle: true,
      img: 'pic1',
      price: '100',
      discountPrice: '50',
      tags: ['Summer', 'Winter'],
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
    }, {

      isAddToCartVisible: true,
      title: 'Product title',
      show: false,
      hasTitle: true,
      price: '100',
      img: 'pic2',
      tags: ['Summer', 'Winter'],
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
    }, {
      isAddToCartVisible: true,
      title: 'Second Product title',
      show: true,
      hasTitle: false,
      price: '100',
      img: 'pic3',
      tags: ['Summer', 'Winter'],
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
    }],
    title2: 'Another nice title',
  }),

  computed: {
    ...mapState(['name', 'surname', 'age', 'country', 'counter']),
  },

  watch: {
    newName(newVal) {
      this.changeName(newVal);
      this.updateCounter(newVal);
    },
  },
  methods: {
    ...mapActions(['changeName', 'updateCounter']),

    onNameChange() {

      // this.changeName('param');
    },

    onProductClick(index) {
      console.log(`Add the product "${this.products[index].title}" to the cart`);
      this.visibilityArray[index] = false;
      console.log(this.visibilityArray);
    },
  },
};
</script>

<style scoped>
</style>
