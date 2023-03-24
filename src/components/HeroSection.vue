<script setup lang="ts">
	defineProps({
		name: {
			type: String,
			default: 'HeroSection',
		},
	})
</script>

<template><section class="bg-secondary-500 poster relative text-white">
        <div class="container mx-auto pb-6 pt-24 px-4 relative">
            <div class="-mx-4 flex flex-wrap items-center space-y-6 lg:space-y-0">
                <div class="px-4 w-full lg:w-6/12"> 
                    <div class="bg-secondary-500 p-12 rounded-lg">
                        <p class="font-bold font-serif text-color3-500">Pure &amp; Organic</p>
                        <h1 class="font-bold lg:text-7xl mb-4 sm:text-6xl text-5xl">Fresh from Delights of Nature</h1>
                        <p class="mb-6 text-opacity-50 text-white sm:pr-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pulvinar faucibus neque, nec rhoncus nunc ultrices sit amet.</p><a href="#" class="bg-primary-500 hover:bg-primary-400 inline-block px-6 py-2 rounded-full text-gray-900">Order Now</a>
                    </div>                     
                </div>
                <div class="px-4 py-12 w-full lg:w-6/12"> 
</div>
            </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" fill="currentColor" class="text-white">
            <path d="M0,64L80,74.7C160,85,320,107,480,149.3C640,192,800,256,960,250.7C1120,245,1280,171,1360,133.3L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
    </section>
	
</template>

<style scoped></style>

