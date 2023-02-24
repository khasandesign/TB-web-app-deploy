// export default function ({ $axios }) {
//     $axios.setBaseURL(process.env.NODE_ENV === 'production' ? 'https://test.topbrains.uz/api' : 'api/');
// }

export default function ({ $axios }) {
    $axios.setBaseURL('api/');
}

