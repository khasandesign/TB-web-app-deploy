<template>
  <div v-if="certificate" class="text-label-primary-dark">
    <ShareModal
      :data="certificate"
      :show="showShareModal"
      @close="showShareModal = false"
    >
    </ShareModal>
    <main>
      <div class="lg:w-1/2 mx-auto">
        <section class="relative flex justify-center">
          <img
            class="max-w-full object-cover mx-auto w-full h-auto sm:hidden"
            src="@/assets/images/certificate.png"
            alt="certificate"
          />
          <figure
            class="inline-flex absolute top-full left-1/2 transform -translate-x-1/2 -translate-y-1/2 sm:static sm:transform-none"
          >
            <img
              class="border border-solid border-gray-1-dark rounded-full w-16 h-16 sm:w-20 sm:h-20"
              :src="authorAvatar"
              alt="person"
              width="80"
              height="80"
            />
            <img
              class="translate-x-[-30px] border border-solid border-gray-1-dark rounded-full w-16 h-16 sm:w-20 sm:h-20"
              :src="$auth.user.profile.avatar"
              alt="person"
              width="80"
              height="80"
            />
          </figure>
          <button
            class="backdrop-blur flex justify-center items-center w-[48px] h-[48px] bg-label-tertiary-light rounded-full sm:hidden absolute z-30 right-3 top-3 cursor-pointer"
            @click="showShareModal = true"
          >
            <span class="material-icons text-label-primary-dark text-2xl">
              share
            </span>
          </button>
        </section>
        <h2
          class="lg:w-/11/12 mt-14 text-xl font-bold sm:mt-5 sm:text-3xl text-center mb-5 mx-auto"
        >
          {{ $t('certificate.certificateFor', { author: authorName }) }}
        </h2>
        <h2
          class="w-full lg:w-11/12 font-bold text-xl text-center sm:text-3xl sm:mb-9 mb-5 mx-auto"
        >
          {{ courseTitle }}
        </h2>
        <p class="w-full text-lg mx-auto text-center sm:mb-[48px] mb-6">
          {{
            $t('certificate.certificateGiven', {
              date: $dayjs(certificate.createdAt).format('MMMM D, YYYY'),
            })
          }}
        </p>
        <div class="flex justify-center items-center w-full mx-auto space-x-2">
          <BaseButton
            v-if="OrderBtn"
            :to="
              localePath({
                name: 'courses-courseId-certificate',
                params: { courseId: certificate.courseId },
              })
            "
            size="medium"
            color="gray"
            icon="download"
          >
            {{ $t('certificate.download') }}
          </BaseButton>
          <BaseButton
            v-else
            :to="
              localePath({
                name: 'courses-courseId-certificate',
                params: { courseId: certificate.courseId },
                query: { type: 'physical' },
              })
            "
            size="medium"
            color="gray"
            icon="card_membership"
          >
            {{ $t('certificate.orderPhysicalVersion') }}
          </BaseButton>
          <BaseButton
            size="medium"
            color="gray"
            class="hidden sm:flex"
            icon="share"
            @click="showShareModal = true"
          >
            {{ $t('share') }}
          </BaseButton>
        </div>
      </div>
      <figure class="w-full lg:w-8/12 mx-auto hidden sm:block mt-14">
        <img
          class="max-w-full object-cover mx-auto w-full h-auto"
          src="@/assets/images/certificate.png"
          alt="certificate"
        />
      </figure>
    </main>
  </div>
</template>

<script>
export default {
  name: 'CertificatePage',
  middleware: 'auth',
  async asyncData({ $axios, params, store }) {
    try {
      const { data: certificate } = await $axios.get(
        `certificates/${params.certificateId}`
      )
      certificate.url = `${store.state.ui.domain}/certificates/${certificate.id}`

      return { certificate }
    } catch (err) {}
  },
  data() {
    return {
      certificate: null,
      OrderBtn: false,
      showShareModal: false,
    }
  },
  head() {
    return {
      title: this.courseTitle,
    }
  },
  computed: {
    authorName() {
      return this.certificate?.course?.author?.profile?.name
    },
    authorAvatar() {
      return this.certificate?.course?.author?.profile?.avatar
    },
    courseTitle() {
      return `"${this.certificate?.course?.title}"`
    },
  },
}
</script>
