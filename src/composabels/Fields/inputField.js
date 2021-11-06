import { computed, getCurrentInstance, onMounted, ref } from "vue";

export default function (props) {
  const uid = getCurrentInstance().uid
  const { value } = props
  let id = ref(null)
  const model = computed({
    get() {
      return value
    },
    set(newValue) {
      this.$emit("input", newValue)
    }
  })
  onMounted(() => {
    id = uid
  })
  return {
    model, id
  }
}