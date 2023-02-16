<template>
  <div class="space-y-8">
    <BaseCommentItem
      v-for="(comment, index) in comments"
      :key="index"
      :comment="comment"
      :reply="comment.replies"
      :role="role"
      @add-comment="createComment"
    />
  </div>
</template>
<script>
export default {
  name: 'BaseComments',
  props: {
    comments: {
      type: Array,
      default: () => [],
    },
    role: {
      type: String,
      default: undefined,
    },
  },
  mounted() {},
  methods: {
    getReply(commentId) {
      const replies = this.comments.filter(
        (comment) => comment.replyId === commentId
      )
      return {
        replies,
        count: replies.length,
      }
    },
    createComment(text, commentId) {
      this.$emit('add-comment', text, commentId)
    },
  },
}
</script>
