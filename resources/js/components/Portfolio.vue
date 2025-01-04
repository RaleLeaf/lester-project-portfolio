<template>
    <div class="w-full min-h-screen bg-black p-20 overflow-hidden">
        <div class="text-7xl font-bold text-white">My Portfolio</div>
        <div class="mt-20 flex">
            <div class="relative w-1/2">
                <div class="absolute left-[30px] top-[30px] w-0.5 h-[calc(90%-60px)] bg-gray-700"></div>
                <div class="space-y-20"> <!-- change height/gap between infos para saa left side (Default: 20) -->
                    <div class="relative flex items-start group pb-20">
                        <div class="relative z-10 flex h-[60px] w-[60px] items-center justify-center rounded-full bg-emerald-900">
                            <span class="text-2xl font-bold text-white">1</span>
                        </div>
                        <div class="ml-16 flex-1">
                            <h2 class="text-4xl font-bold text-gray-600">NATIVECAMP. WEB / IOS</h2>
                            <div class="text-xl mt-4 text-gray-600 whitespace-pre-line">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                            </div>
                        </div>
                    </div>

                    <div class="relative flex items-start group pb-20">
                        <div class="relative z-10 flex h-[60px] w-[60px] items-center justify-center rounded-full bg-emerald-400">
                            <span class="text-2xl font-bold text-white">2</span>
                        </div>
                        <div class="ml-16 flex-1">
                            <h2 class="text-4xl font-bold text-white">MACHETALK WEB / IOS</h2>
                            <div class="text-xl mt-4 text-white whitespace-pre-line">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                            </div>
                        </div>
                    </div>

                    <div class="relative flex items-start group">
                        <div class="relative z-10 flex h-[60px] w-[60px] items-center justify-center rounded-full bg-emerald-900">
                            <span class="text-2xl font-bold text-white">3</span>
                        </div>
                        <div class="ml-16 flex-1">
                            <h2 class="text-4xl font-bold text-gray-600">NATIVECAMP. WEB / IOS</h2>
                            <div class="text-xl mt-4 text-gray-600 whitespace-pre-line">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="relative w-1/2">
                <div class="absolute top-[67vh] z-20">
                    <div class="flex flex-row ">
                        <div>
                            <img src="hexW.svg" alt="hex" class="w-[10vw]">
                        </div>
                        <div>
                            <img src="hexW.svg" alt="hex" class="w-[10vw]">
                        </div>
                        <div>
                            <img src="hexW.svg" alt="hex" class="w-[10vw]">
                        </div>
                    </div>
                </div>
                <div class="absolute top-[0vw]  w-[45vw] z-10">
                    <img src="dummy1.png" alt="t" class="rounded-2xl">
                </div>
                <div class="absolute top-[5vw] left-[5vw]">
                    <div class="w-[45vw] h-[45vw] bg-teal-300"></div>
                </div>
            </div>
        </div>
        
    </div>
</template>