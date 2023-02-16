<template>
  <div class="pt-6">
    <h1 class="mb-6 h6 text-[28px] font-bold leading-8">Ваши курсы</h1>
    <div class="w-full">
      <div
        class="card relative bg-[#121212] md:h-[234px] rounded-[10px] overflow-hidden mb-2 md:mb-6"
      >
        <div class="share">
          <BaseButton
            size="large"
            icon="share"
            circle
            class="w-[40px] h-[40px] bg-transparent md:backdrop-blur-lg absolute top-5 md:top-auto md:bottom-5 right-5 flex items-center justify-center text-[15px] md:bg-gray-1-dark rounded-full"
          >
          </BaseButton>
        </div>
        <div class="flex flex-col md:flex-row items-center gap-x-8">
          <div class="mask">
            <img
              class="h-full object-cover max-w-[230px]"
              src="@/assets/images/teacher-img.png"
              alt="Cinque Terre"
            />
          </div>
          <div class="text-label-primary-dark px-6 md:px-0 py-10">
            <h1 class="text-[28px] leading-[28px] font-bold mb-3">
              Daniel Pink
            </h1>
            <p class="text-label-secondary-dark mb-5">
              <span>32</span> урока · <span>4</span> часа ·
              <nuxt-link class="underline" to="#">Программа</nuxt-link>
            </p>
            <p class="">
              Имея четыре бестселлера NYT, Дэниел Пинк является влиятельным
              голосом в меняющемся.
            </p>
          </div>
        </div>
      </div>
      <div
        class="grid grid-cols-2 2xl:grid-cols-4 4 gap-2 md:gap-6 text-label-primary-dark"
      >
        <div class="bg-[#121212] p-4 rounded-[10px]">
          <h2 class="text-[32px] leading-10 font-semibold mb-5">4</h2>
          <p class="text-[18px] leading-5">Часа</p>
        </div>
        <div class="bg-[#121212] p-4 rounded-[10px]">
          <h2 class="text-[32px] leading-10 font-semibold mb-5">32</h2>
          <p class="text-[18px] leading-5">Уроков</p>
        </div>
        <div class="bg-[#121212] p-4 rounded-[10px]">
          <div class="flex items-center gap-x-4 mb-5">
            <h4 class="h4 font-semibold">450</h4>
            <TeacherStudents :students="students" />
          </div>
          <p class="par-1">Студентов</p>
        </div>
        <div class="bg-[#121212] p-4 rounded-[10px]">
          <h4 class="h4 font-semibold mb-5 max-h-[32px]">
            50<span class="h6 text-white/[.1]">/студентов </span>
          </h4>
          <p class="par-1">За неделю</p>
        </div>
      </div>
      <div class="h-[1px] w-full bg-white/[.1] mt-9 mb-4"></div>

      <h1 class="mb-6 h6 text-[28px] font-bold leading-8">
        Связаться с менеджерами
      </h1>
      <div
        class="grid grid-cols-2 md:grid-cols-4 4 gap-2 md:gap-6 text-label-primary-dark"
      >
        <a
          href="mailto:#"
          target="_blank"
          class="bg-[#121212] p-4 rounded-[10px]"
        >
          <h2 class="text-[32px] leading-10 font-semibold mb-5">
            <span class="material-icons">email</span>
          </h2>
          <p class="text-[18px] leading-5">Почта</p>
        </a>
        <a
          href="https://t.me/vuejs_uz_savol_javob"
          target="_blank"
          class="bg-[#121212] p-4 rounded-[10px] bg-[#3397CD]"
        >
          <h2 class="text-[32px] leading-10 font-semibold mb-5">
            <span class="material-icons">
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.77951 16.4521C4.77951 16.4521 17.6169 11.1836 22.0691 9.32846C23.7758 8.58646 29.5637 6.21186 29.5637 6.21186C29.5637 6.21186 32.2351 5.17306 32.0125 7.69596C31.9382 8.73486 31.3446 12.3708 30.751 16.3037C29.8605 21.869 28.8959 27.9537 28.8959 27.9537C28.8959 27.9537 28.7475 29.6605 27.486 29.9573C26.2246 30.2541 24.1468 28.9185 23.7758 28.6216C23.4789 28.399 18.2105 25.0598 16.2812 23.4273C15.7617 22.9821 15.1681 22.0917 16.3553 21.0528C19.0267 18.604 22.2175 15.5617 24.1468 13.6324C25.0373 12.7419 25.9277 10.6642 22.2175 13.1871C16.949 16.8231 11.7547 20.2365 11.7547 20.2365C11.7547 20.2365 10.5674 20.9785 8.34131 20.3107C6.11511 19.6429 3.51796 18.7524 3.51796 18.7524C3.51796 18.7524 1.73716 17.6394 4.77951 16.4521V16.4521Z"
                  fill="white"
                  fill-opacity="0.9"
                />
              </svg>
            </span>
          </h2>
          <p class="text-[18px] leading-5">Телеграм</p>
        </a>
        <a
          href="tel: 0"
          target="_blank"
          class="bg-[#121212] p-4 rounded-[10px]"
        >
          <h2 class="text-[32px] leading-10 font-semibold mb-5">
            <span class="material-icons">local_phone</span>
          </h2>
          <p class="text-[18px] leading-5">Телефон</p>
        </a>
        <a href="#" target="_blank" class="bg-[#121212] p-4 rounded-[10px]">
          <h2 class="text-[32px] leading-10 font-semibold mb-5">
            <span class="material-icons"
              ><svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.8079 25.7342L17.7634 29.0099C18.21 29.5049 19.0068 29.4325 19.3569 28.865L22.0799 24.4511C22.254 24.1689 22.5565 23.9914 22.8877 23.977L31.9647 23.5834C32.5304 23.5588 32.9629 23.0699 32.9182 22.5054L31.6907 6.99568C31.6472 6.44559 31.1663 6.03473 30.6162 6.0776L3.02464 8.22784C2.46334 8.27158 2.04877 8.76987 2.10785 9.32976L3.7521 24.9113C3.80754 25.4367 4.2621 25.8283 4.7899 25.8054L14.0221 25.405C14.3201 25.3921 14.6082 25.5128 14.8079 25.7342Z"
                  fill="white"
                />
              </svg>
            </span>
          </h2>
          <p class="text-[18px] leading-5">Открыть чат</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import TeacherStudents from './TeacherStudents.vue'
export default {
  name: 'ProfileTeacher',
  components: {
    TeacherStudents,
  },
  layout: 'profileLayout',
  data() {
    return {
      students: [
        {
          image: require('@/assets/images/student (1).png'),
        },
        {
          image: require('@/assets/images/student (2).png'),
        },
        {
          image: require('@/assets/images/student (3).png'),
        },
      ],
    }
  },
  created() {
    this.fullName('')
  },
  methods: {
    fullName({ firstName, lastName, middleName }) {
      const first = firstName ? firstName + ' ' : ''
      const mid = middleName ? middleName + ' ' : ''
      const last = lastName ? lastName + ' ' : ''
      return first + mid + last
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
