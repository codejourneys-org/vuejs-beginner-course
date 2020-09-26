<template>
  <div id="app">
    <div class="w-full container mx-auto flex flex-wrap">
      <div
        v-for="(product, index) in products"
        :key="`key-${index}`"
        class="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col"
      >
        <img class="product-image" src="@/assets/images/products/pic1.jpg" />
        <div class="inline-flex justify-between align-middle">
          <h3 class="product-title">{{ product.title }}</h3>
          <button
            class="add-to-cart-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              d="M4 2h16l-3 9H4a1 1 0 1 0 0 2h13v2H4a3 3 0 0 1 0-6h.33L3 5 2
              2H0V0h3a1 1 0 0 1 1 1v1zm1 18a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm10 0a2 2 0
              1 1 0-4 2 2 0 0 1 0 4z"
            />
          </svg>
          </button>
        </div>
        <p class="text-base text-gray-500 mb-4">
          {{ product.description }}
        </p>
        <div class="flex flex-wrap text-xs">
          <span
            v-for="(tag, tagIndex) in product.tags"
            :key="`tag-${index}-${tagIndex}`"
            class="tag"
          >
            {{ tag }}
          </span>
        </div>
        <p class="price">{{ product.price }}€</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    products: [{
      title: 'Product title',
      img: 'pic1',
      price: '100',
      discountPrice: '50',
      tags: ['Summer', 'Winter'],
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
    }, {
      title: 'Product title',
      price: '100',
      img: 'pic2',
      tags: ['Summer', 'Winter'],
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
    }, {
      title: 'Product title',
      price: '100',
      img: 'pic3',
      tags: ['Summer', 'Winter'],
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
    }],
    title2: 'Another nice title',
  }),
};
</script>

<style scoped>
.hover\:grow {
  transition: all 0.3s;
  transform: scale(1);
}
.hover\:grow:hover {
  transform: scale(1.02);
}

.tag {
  @apply font-bold items-center px-3 py-1 mr-2 bg-white
    text-gray-700 text-gray-700 border rounded-full;
}

.tag:hover {
  @apply bg-gray-500 text-white cursor-pointer;
  transition: all 0.5s;
}

.product-title {
  @apply text-xl text-gray-600 mb-4;
}

.product-image {
  @apply mb-4;
}

.product-image:hover {
  @apply shadow-lg cursor-pointer;
  transform: scale(1.02);
  transition: all 0.5s;
}

.price {
  @apply text-lg pt-6 text-green-800 lining-nums;
}

.not-in-stock {
  @apply text-lg pt-6 text-red-800;
}

.add-to-cart-icon {
  @apply fill-current w-4 h-3 pt-2 mt-0 align-middle text-gray-600;
}

.add-to-cart-icon:hover {
  @apply text-gray-800 cursor-pointer;
  transition: all 0.5s;
}

.price-before-discount {
  @apply line-through text-gray-700;
}
</style>
