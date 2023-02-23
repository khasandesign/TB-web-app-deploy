import dayjs from 'dayjs'

import 'dayjs/locale/en'
import 'dayjs/locale/uz-latn'
import 'dayjs/locale/ru'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import relativeTime from 'dayjs/plugin/relativeTime'
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore'

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.extend(relativeTime)
dayjs.extend(isSameOrBefore)

dayjs.locale('uz-latn')

dayjs.tz.setDefault('Asia/Tashkent')

export default (context, inject) => {
  context.$dayjs = dayjs
  inject('dayjs', dayjs)
}
