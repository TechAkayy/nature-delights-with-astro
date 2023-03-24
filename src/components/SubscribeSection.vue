<script setup lang="ts">
	defineProps({
		name: {
			type: String,
			default: 'SubscribeSection',
		},
	})
</script>

<template><section class="bg-secondary-500 py-20 text-center text-gray-400"> 
        <div class="container mx-auto px-4"> 
            <div class="flex flex-wrap -mx-4"> 
                <div class="mx-auto px-4 w-full lg:w-8/12"> 
                    <div class="bg-gray-800 px-6 py-12 rounded-md">
                        <h2 class="font-bold leading-tight mb-2 text-3xl text-white">Subscribe To Our Newsletter</h2>
                        <p class="mb-8">Sign up for our newsletter to receive updates and exclusive offers</p>
                        <form class="mx-auto sm:w-9/12 xl:w-8/12"> 
                            <div class="bg-white border-2 border-gray-300 flex items-center overflow-hidden p-1 rounded-full"> 
                                <input class="appearance-none border-blue-600 flex-1 outline-none px-5 py-2 text-gray-600 w-full" placeholder="Enter email..." type="email" required/> 
                                <button type="submit" class="bg-secondary-500 hover:bg-secondary-600 inline-block px-8 py-2 rounded-full text-center text-white uppercase">Sign Up</button>                                 
                            </div>                             
                        </form>
                    </div>                     
                </div>                 
            </div>             
        </div>         
    </section>
	
</template>

<style scoped></style>

