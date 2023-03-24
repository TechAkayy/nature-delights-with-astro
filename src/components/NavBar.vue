<script setup lang="ts">
	defineProps({
		name: {
			type: String,
			default: 'NavBar',
		},
	})
</script>

<template><header>
        <div class="container mx-auto relative"> 
            <nav class="flex flex-wrap items-center p-4"> <a href="#" class="font-bold font-serif hover:text-opacity-75 inline-flex items-center leading-none text-secondary-500 text-xl uppercase"> <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="2em" xml:space="preserve" stroke="currentColor" fill="none" stroke-width="3px" viewBox="0 0 48 48" height="2em" class="mr-2">
                        <path d="M33 24a14.46 14.46 0 00-2.69-7.91 14.66 14.66 0 00-1-1.24c-.18-.2-.36-.4-.56-.59s-.39-.38-.59-.56A14.53 14.53 0 005.41 30.9a5.38 5.38 0 01.39.75 8.43 8.43 0 01.71 4.79 8.43 8.43 0 014.79.71 5.38 5.38 0 01.75.39 14.57 14.57 0 0011.66.47"></path>
                        <path d="M30.93 10.62s0 1.46-2.18 3.64M44 24a15 15 0 01-30 0zm-15 4v11m-3-12l-7 7m20 0l-7-7"></path>
                        <path d="M-423-219h690v690h-690z"></path>
                    </svg><span>Nature<br>DelightS</span> </a> 
                <button class="hover:bg-white hover:text-secondary-500 ml-auto px-3 py-2 rounded text-secondary-500 lg:hidden" data-name="nav-toggler" data-pg-ia='{"l":[{"name":"NabMenuToggler","trg":"click","a":{"l":[{"t":"^nav|[data-name=nav-menu]","l":[{"t":"set","p":0,"d":0,"l":{"class.remove":"hidden"}}]},{"t":"#gt# span:nth-of-type(1)","l":[{"t":"tween","p":0,"d":0.2,"l":{"rotationZ":45,"yPercent":300}}]},{"t":"#gt# span:nth-of-type(2)","l":[{"t":"tween","p":0,"d":0.2,"l":{"autoAlpha":0}}]},{"t":"#gt# span:nth-of-type(3)","l":[{"t":"tween","p":0,"d":0.2,"l":{"rotationZ":-45,"yPercent":-300}}]}]},"pdef":"true","trev":"true"}]}' data-pg-ia-apply="$nav [data-name=nav-toggler]"> <span class="block border-b-2 border-current my-1 w-6"></span> <span class="block border-b-2 border-current my-1 w-6"></span> <span class="block border-b-2 border-current my-1 w-6"></span> 
                </button>                 
                <div class="flex-1 hidden space-y-2 w-full lg:flex lg:items-center lg:space-x-4 lg:space-y-0 lg:w-auto" data-name="nav-menu"> 
                    <div class="flex flex-col mr-auto lg:flex-row"> <a href="#" class="hover:text-secondary-500 py-2 text-gray-500 lg:px-5 lg:py-4">Home</a><a href="#" class="hover:text-secondary-500 py-2 text-gray-500 lg:px-5 lg:py-4">Fruits</a><a href="#" class="hover:text-secondary-500 py-2 text-gray-500 lg:px-5 lg:py-4">Drinks</a><a href="#" class="hover:text-secondary-500 py-2 text-gray-500 lg:px-5 lg:py-4">About</a><a href="#" class="hover:text-secondary-500 py-2 text-gray-500 lg:px-5 lg:py-4">Contact Us</a> 
                    </div><a href="#" class="bg-secondary-500 hover:bg-secondary-700 inline-block px-6 py-2 rounded-full text-white">Visit Shop</a> 
                </div>                 
            </nav>             
        </div>
    </header>
	
</template>

<style scoped></style>

