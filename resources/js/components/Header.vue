<template>
    <div class="w-full flex flex-row p-9 px-16 bg-black font-helvetica">
        <div class="w-3/5 text-4xl font-extrabold text-teal-400">Lester</div>
        <div class="flex flex-row w-2/5 justify-between">
            <div>
                <div
                    :class="{
                        'text-teal-400': isActive('/about'),
                        'text-white': !isActive('/about')
                    }"
                >
                    <router-link to="/about">About</router-link>
                </div>
                <div v-if="isActive('/about')" class="h-0.5 bg-teal-400 w-full mt-[7px]"></div>
            </div>

            <div>
                <div
                    :class="{
                        'text-teal-400': isActive('/education'),
                        'text-gray-400': !isActive('/education')
                    }"
                >
                    <router-link to="/education">Education</router-link>
                </div>
                <div v-if="isActive('/education')" class="h-0.5 bg-teal-400 w-full mt-[7px]"></div>
            </div>

            <div>
                <div
                    :class="{
                        'text-teal-400': isActive('/portfolio'),
                        'text-gray-400': !isActive('/portfolio')
                    }"
                >
                    <router-link to="/portfolio">Portfolio</router-link>
                </div>
                <div v-if="isActive('/portfolio')" class="h-0.5 bg-teal-400 w-full mt-[7px]"></div>
            </div>

            <div>
                <div
                    :class="{
                        'text-teal-400': isActive('/skills'),
                        'text-gray-400': !isActive('/skills')
                    }"
                >
                    <router-link to="/skills">Skills</router-link>
                </div>
                <div v-if="isActive('/skills')" class="h-0.5 bg-teal-400 w-full mt-[7px]"></div>
            </div>

            <div>
                <div
                    :class="{
                        'text-teal-400': isActive('/awards'),
                        'text-gray-400': !isActive('/awards')
                    }"
                >
                    <router-link to="/awards">Awards</router-link>
                </div>
                <div v-if="isActive('/awards')" class="h-0.5 bg-teal-400 w-full mt-[7px]"></div>
            </div>
        </div>
    </div>
</template>

<script>
import { useRoute } from 'vue-router';

export default {
    setup() {
        const route = useRoute();
        const isActive = (path) => route.path === path;

        return { isActive };
    },
};
</script>
