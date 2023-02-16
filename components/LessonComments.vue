<template>
  <div v-if="comments">
    <h5 class="h5 pt-4 border-t border-solid border-gray-4-dark">
      {{ comments.total }} {{ $t('feedback') }}
    </h5>
    <form @submit.prevent="handleSubmit">
      <section class="mt-[26px] flex space-x-5">
        <img
          class="w-[44px] h-[44px] rounded-full"
          src="@/assets/images/avatar.png"
          alt="Avatar"
        />
        <input
          v-model="comment"
          class="flex-1 bg-transparent text-label-primary-dark placeholder:text-label-secondary-dark outline-none border-b border-solid border-gray-4-dark"
          :placeholder="`${$t('comments.add')}...`"
        />
      </section>
      <section v-if="comment" class="mt-3 flex justify-end space-x-4">
        <button type="button" @click="cancel">{{ $t('cancel') }}</button>
        <BaseButton type="submit" :loading="loading">
          {{ $t('send') }}
        </BaseButton>
      </section>
    </form>
    <BaseComments
      class="mt-[42px]"
      role="user"
      :comments="comments.items"
      @add-comment="newComment"
    />
    <button v-if="isShowMoreBtn" class="btn-lg" @click="showMore">
      {{ $t('showMore') }}
    </button>
  </div>
</template>

<script>
import { POST_COMMENT } from '~/api/comments'
export default {
  name: 'LessonComments',
  props: {
    comments: {
      type: Object,
      default: null,
    },
    isShowMoreBtn: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      comment: '',
      loading: false,
    }
  },
  mounted() {},
  methods: {
    showMore() {
      this.$emit('show-more')
    },
    cancel() {
      this.comment = ''
    },
    newComment() {},
    async handleSubmit() {
      if (!this.comment) {
        return
      }
      try {
        this.loading = true
        await this.$axios.post(POST_COMMENT.url(this.lessonId), {
          comment: this.comment,
        })
      } catch (error) {
      } finally {
        this.comment = ''
        this.loading = false
      }
    },
    async sendComment() {
      try {
        this.loading = true
        await this.$axios.post(POST_COMMENT.url(this.lessonId), {
          comment: this.comment,
        })
      } catch (error) {
      } finally {
        this.comment = ''
        this.loading = false
      }
    },
  },
}
</script>
