<template>
  <div class="w-full">
    <div class="flex gap-x-5 mb-2">
      <img
        class="w-11 h-11 rounded-full bg-center bg-cover"
        :src="comment.author.avatar"
        :alt="comment.author.name"
      />
      <div class="font-medium leading-md">
        <h3 class="btn-md text-label-primary-dark">
          {{ fullName(comment.author.name) }}
        </h3>
        <h4 class="btn-md text-wheat">
          {{ getDate }}
        </h4>
      </div>
    </div>
    <div class="pl-16 w-full mb-9">
      <p>{{ comment.body }}</p>
      <div
        v-if="comment.author.profile.role.name === 'admin'"
        class="mt-4 flex flex-col gap-y-9 w-full"
      >
        <div
          class="flex gap-x-2 text-label-primary-dark font-semibold leading-5"
        >
          <button class="outline-none" @click="openReplyInput">
            {{ $t('comments.answer') }}
          </button>
          <h4 class="text-wheat">
            · {{ comment.replies.length }} {{ $t('comments.reply') }}
          </h4>
        </div>
        <div
          v-if="showReplyInput"
          class="w-screen fixed bg-[#1B1B1B] md:bg-transparent md:relative pt-2 pb-3 px-3 md:h-auto bottom-0 left-0 md:w-full flex items-center md:gap-x-4"
        >
          <div class="w-[14%] h-full md:h-auto md:w-auto flexbox">
            <img
              class="h-10 w-10 md:w-9 md:h-9 rounded-full"
              src="~/assets/images/profile.png"
              alt="top-breyns"
            />
          </div>
          <textarea
            v-model="body"
            v-focus
            :placeholder="`${$t('comments.placeholder')}...`"
            class="w-[72%] h-full md:h-8 bg-transparent text-lg md:text-[17px] pl-3 pt-1 md:p-0 leading-5 lg:border-b border-b-gray-1-dark outline-none focus:border-b-gray-6-dark transition font-medium placeholder:text-label-tertiary-dark resize-none"
            @blur="closeReplyInput"
            @keyup.enter="keyUp"
          ></textarea>
          <div class="flexbox w-[14%] h-full text-label-primary-dark md:hidden">
            <div
              class="text-xl w-10 h-10 rounded-full bg-gray-1-dark flexbox pl-1"
            >
              <span class="material-icons">send</span>
            </div>
          </div>
        </div>
      </div>
      <div v-if="comment.replies.length > 0" class="mt-8 flex flex-col gap-y-9">
        <div v-for="reply in comment.replies" :key="reply.id">
          <div class="flex gap-x-5 mb-2">
            <img
              class="w-9 h-9 rounded-full bg-center bg-cover"
              :src="reply.author.avatar"
            />
            <div class="font-medium">
              <h3
                class="btn-md text-label-primary-dark px-[6px] border border-gray-3-dark rounded-md"
                :class="{
                  'bg-gray-7-dark': reply.author.profile.role.name === 'admin',
                }"
              >
                {{ fullName(reply.author.name) }}
              </h3>
              <h4 class="btn-md text-wheat">
                {{ formatDate(reply.createdAt) }}
              </h4>
            </div>
          </div>
          <div class="pl-14">
            <p>{{ reply.body }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseCommentItem',
  props: {
    comment: {
      type: Object,
      default: () => {},
    },
    date: undefined,
  },
  data() {
    return {
      showReplyInput: false,
      body: '',
    }
  },
  computed: {
    getDate() {
      return this.$dayjs(this.comment.createdAt).fromNow()
    },
  },
  methods: {
    fullName({ firstName, lastName, middleName }) {
      const first = firstName ? firstName + ' ' : ''
      const mid = middleName ? middleName + ' ' : ''
      const last = lastName ? lastName + ' ' : ''
      return first + mid + last
    },
    openReplyInput() {
      this.showReplyInput = true
    },
    closeReplyInput() {
      this.showReplyInput = false
      this.body = ''
    },
    addComment() {
      this.$emit('add-comment', this.body, this.comment.id)
    },
    keyUp() {
      this.addComment()
      this.body = ''
      this.showReplyInput = false
    },
    formatDate(dateString) {
      return this.$dayjs(dateString).fromNow()
    },
  },
}
</script>
