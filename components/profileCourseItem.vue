<template>
  <div class="pr-2 md:pr-6">
    <div
      class="w-full h-[526px] md:h-[234px] rounded-10px relative bg-gray-3-dark overflow-hidden"
    >
      <div class="h-full w-full flex flex-col md:flex-row items-center gap-x-8">
        <div class="mask">
          <div class="mask">
            <img
              class="h-full object-cover max-w-[230px]"
              :src="data.thumbnail"
              alt="Cinque Terre"
            />
          </div>
        </div>
        <div class="relative mt-4 md:mt-0 -left-2 md:left-0">
          <h1 class="font-clarendon text-[28px] leading-7 mb-[10px]">
            {{ data.author.profile.name }}
          </h1>
          <div class="mb-2 lg:mb-[14px] caption text-label-secondary-dark">
            <span>{{ data.lesson }} {{ $t('lesson') }} ·</span>
            <span>{{ data.duration }} {{ $t('hour') }} ·</span>
            <nuxt-link
              :to="
                localePath({
                  name: 'courses-courseId',
                  params: { courseId: data.id },
                })
              "
            >
              {{ $t('program') }}
            </nuxt-link>
          </div>
          <p class="btn-sm w-[295px] md:w-[315px] lg:w-[442px]">
            {{ data.description }}
          </p>
        </div>
        <div class="absolute flex gap-x-3 bottom-5 right-5">
          <BaseButton
            icon="share"
            size="large"
            color="gray"
            :circle="true"
            class="absolute z-30 scale-[1.7] md:scale-100 -top-[470px] left-[-45px] md:relative md:left-0 md:top-0 border-gray-3-dark border-none md:border bg-transparent md:bg-gray-5-dark hover:bg-transparent md:hover:bg-gray-6-dark active:bg-transparent active:scale-[1.4] md:active:bg-gray-8-dark md:active:scale-[0.916]"
            @click="showModal"
          />
          <BaseButton
            :to="
              localePath({
                name: 'courses-courseId',
                params: { courseId: data.id },
              })
            "
            icon="play_arrow"
            size="large"
            color="gray"
            :circle="true"
            class="absolute z-30 scale-[1.4] md:scale-100 -top-[170px] backdrop-blur-md md:backdrop-blur-none left-[-70px] md:relative md:left-0 md:top-0 active:scale-[1.4] md:active:scale-[1.2]"
          />
        </div>
      </div>
      <div class="w-[65%] h-full absolute top-0 left-0 bg-left-shadow"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileCourseItem',
  props: {
    data: {
      type: Object,
      default: undefined,
    },
  },
  methods: {
    showModal() {
      this.$emit('open', `https://topbrayns.com/course/${this.data.course_id}`)
    },
  },
}
</script>

<style lang="scss" scoped>
.mask {
  -webkit-mask-image: url('@/assets/images/teacher-img-mask.png');
  mask-image: url('@/assets/images/teacher-img-mask.png');
  -webkit-mask-size: 100%;
  mask-size: 100%;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
}
@media (max-width: 768px) {
  .mask {
    width: 100%;
    -webkit-mask-image: none;
    mask-image: none;
    img {
      width: 100%;
      max-width: 100% !important;
      border-radius: 0 0 0 100px;
    }
  }
}
</style>
