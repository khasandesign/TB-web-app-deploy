<template>
  <div class="bg-midnight w-full text-label-primary-dark">
    <AppHeader />
    <div
      class="container sm:w-full md:w-[720px] lg:w-[1192px] flex flex-col lg:flex-row gap-x-[21px] mt-3 lg:mt-10 px-4 lg:p-0"
    >
      <div
        v-if="$auth.user.profile"
        class="w-full lg:w-[345px] h-auto lg:h-[484px] rounded-10px lg:py-7 lg:px-[3px] flex flex-col items-center"
      >
        <!-- eslint-disable-next-line vue/no-v-html -->
        <img
          class="mb-5 lg:mb-6 w-28 h-28 rounded-full border border-gray-8-dark bg-center bg-cover"
          :src="$auth.user.profile.avatar"
        />
        <BaseBadge color="gray-3">
          {{ $t($auth.user.profile.role.name) }}
        </BaseBadge>
        <input
          v-for="({ extraClass, ref, key }, index) in about"
          :key="index"
          :ref="ref ? key : null"
          v-model="formData[key]"
          :data-key="key"
          class="text-center bg-transparent outline-none w-max"
          :class="[extraClass, { 'focus:bg-[#50749B]': edit }]"
          :readonly="!edit"
          @keyup.enter="saveUpdates"
        />
        <BaseButton
          :icon="edit ? 'close' : 'edit'"
          color="gray"
          @click="toggleEdit"
          >{{ $t(edit ? 'cancel' : 'edit') }}</BaseButton
        >
        <div class="mt-12 hidden lg:flex flex-col items-center">
          <h4 class="text-gray-8-dark text-xs mb-5">{{ $t('yourCourses') }}</h4>
          <div class="flex gap-x-4">
            <NuxtLink
              v-for="course in $auth.user.courses"
              :key="course.id"
              :to="
                localePath({
                  name: 'courses-courseId',
                  params: { courseId: course.id },
                })
              "
            >
              <img
                :src="course.thumbnail"
                alt="top-breyns-course"
                class="w-12 h-12 rounded-full bg-center bg-cover object-cover"
              />
            </NuxtLink>
          </div>
        </div>
      </div>
      <div class="w-full" :class="pageClasses">
        <Nuxt />
      </div>
    </div>
    <AppFooter />
  </div>
</template>

<script>
import morphism from 'morphism'
import { PROFILE } from '@/api/profile'
import AppHeader from '~/components/layout/AppHeader.vue'

export default {
  components: { AppHeader },
  middleware: 'auth',
  data() {
    const { firstName, middleName, lastName, email } = this.$auth.user.profile
    return {
      image: require(`~/assets/images/logo.png`),
      formData: {
        name: firstName + ' ' + middleName + ' ' + lastName,
        email,
      },
      edit: false,
    }
  },
  computed: {
    about() {
      return [
        {
          text: this.$auth.user.profile.firstName,
          extraClass: 'mt-4 h5 whitespace-nowrap',
          key: 'name',
          ref: true,
        },
        {
          text: this.$auth.user.profile.email,
          extraClass:
            'mt-1 lg:mt-2 mb-4 lg:mb-6 text-[15px] leading-5 text-label-secondary-dark focus:text-label-primary-dark',
          key: 'email',
          ref: true,
        },
      ]
    },
    pageClasses() {
      return {
        'lg:w-6/12': this.$auth.user.profile.role.name === 'admin',
        'lg:w-8/12': this.$auth.user.profile.role.name === 'student',
      }
    },
  },
  methods: {
    async userFetch(url, method, schema, body) {
      const { data } = await this.$axios[method](url, body)

      const userData = morphism(schema, data)
      const name = this.fullName(userData)
      return { ...userData, name }
    },
    toggleEdit() {
      this.edit = !this.edit
      this.$nextTick(() => {
        this.$refs.name[0].focus()
      })
    },
    fullName({ firstName, lastName, middleName }) {
      const first = firstName ? firstName + ' ' : ''
      const mid = middleName ? middleName + ' ' : ''
      const last = lastName ? lastName + ' ' : ''
      return first + mid + last
    },
    async saveUpdates(evt) {
      this.about.forEach((el) => {
        if (this.formData[el.key] !== el.text) {
          el.text = this.formData[el.key]
        }
      })
      const name = this.formData.name.trim().split(' ')

      const reqName =
        name.length === 2
          ? { firstName: name[0], lastName: name[1], middleName: null }
          : { firstName: name[0], middleName: name[1], lastName: name[2] }

      const data = await this.userFetch(
        PROFILE.UPDATE.url,
        PROFILE.UPDATE.method,
        PROFILE.UPDATE.schema,
        {
          email: this.formData.email,
          ...reqName,
        }
      )

      this.formData = data

      this.$nextTick(() => {
        evt.target.blur()
        this.edit = false
      })
    },
  },
}
</script>
