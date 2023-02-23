<template>
  <div class="px-4 container mx-auto text-label-primary-dark">
    <main class="lg:w-1/2 mx-auto text-center flex flex-col pt-12">
      <figure class="text-center relative">
        <img :src="certificate.image" class="w-full h-auto object-cover" />

        <button
          class="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2"
        >
          <img
            :src="certificate.course.author.profile.avatar"
            class="rounded-full w-[80px] h-[80px]"
          />
        </button>
        <button
          class="w-12 h-12 rounded-full bg-label-tertiary-light backdrop-blur absolute top-5 right-5"
          @click="showShareModal = true"
        >
          <span class="material-icons">share</span>
        </button>
      </figure>
      <h3 class="h5 lg:h3 mt-12 lg:mt-[60px]">
        {{ $t('certificate.title') }}
      </h3>
      <p class="par-2 lg:par-1 mt-5">
        {{ $t('certificate.description') }}
      </p>
      <nav class="grid grid-cols-2 mt-8 lg:mt-12">
        <button
          v-for="(item, index) in tabItems"
          :key="item.key"
          class="px-4 py-[30px] md:p-8 text-center border border-solid border-gray-3-dark bg-[#121212] rounded-10px"
          :class="{
            'bg-[#1b1b1b]': item.isActive,
            'rounded-r-none': index === 0,
            'rounded-l-none': index === 1,
          }"
          @click="handleTabItemClick(item.key)"
        >
          <h5 class="h7 lg:h5">{{ item.title }}</h5>
          <p class="text-xs lg:subheadline mt-1 text-label-secondary-dark">
            {{ item.description }}
          </p>
        </button>
      </nav>

      <div class="mt-8 lg:mt-[56px] w-full lg:w-3/4 mx-auto">
        <CertificateFormElectron
          v-if="activeTab === TABS.ELECTRON"
          ref="form"
          :loading="loading"
          @submit="handleSubmit"
        />
        <CertificateFormPhysical
          v-else
          ref="form"
          :loading="loading"
          @submit="handleSubmit"
        />
      </div>
    </main>
    <ShareModal
      :data="certificate"
      :show="showShareModal"
      @close="showShareModal = false"
    >
    </ShareModal>
  </div>
</template>

<script>
import { morphism } from 'morphism'
import { GET_CERTIFICATE, POST_CERTIFICATE } from '~/api/certificate'
import CertificateFormElectron from '~/components/course/CertificateFormElectron.vue'
import CertificateFormPhysical from '~/components/course/CertificateFormPhysical.vue'

const TABS = { ELECTRON: 'electron', PHYSICAL: 'physical' }

export default {
  name: 'CourseGetSertificatePage',
  components: {
    CertificateFormElectron,
    CertificateFormPhysical,
  },
  // async asyncData({ $axios, params }) {
  //   const { data: certificate } = await $axios[GET_CERTIFICATE.method](
  //     GET_CERTIFICATE.url(params.courseId)
  //   )

  //   return { certificate }
  // },
  data() {
    return {
      TABS,
      loading: false,
      showShareModal: false,
    }
  },
  computed: {
    activeTab: {
      get() {
        return this.$route.query.type || TABS.ELECTRON
      },
      set(value) {
        this.$router.replace(
          this.localePath({
            name: 'courses-courseId-certificate',
            params: { courseId: this.$route.params.courseId },
            query: { type: value },
          })
        )
      },
    },
    tabItems() {
      return [
        {
          title: this.$t('certificate.electron'),
          description: this.$t('certificate.electronDesc'),
          isActive: this.activeTab === TABS.ELECTRON,
          key: TABS.ELECTRON,
        },
        {
          title: this.$t('certificate.physical'),
          description: this.$t('certificate.physicalDesc'),
          isActive: this.activeTab === TABS.PHYSICAL,
          key: TABS.PHYSICAL,
        },
      ]
    },
  },
  methods: {
    handleTabItemClick(key) {
      this.activeTab = key
    },
    async handleSubmit(formData) {
      try {
        this.loading = true
        await this.$axios[POST_CERTIFICATE.method](
          POST_CERTIFICATE.url(this.$route.params.courseId),
          morphism(POST_CERTIFICATE.schema, formData)
        )
        this.$toast.info(this.$t('certificate.sendSuccess'), {
          className: '!bg-primary',
          duration: 2000,
        })
      } catch (err) {
      } finally {
        this.loading = false
      }
    },
  },
}
</script>
