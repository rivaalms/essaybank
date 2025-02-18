export default async function () {
   const length = useState('questionLength', () => 0)
   if (length.value < 1) {
      length.value = await $questionApi().count().then((res) => res.data)
   }
   return length
}