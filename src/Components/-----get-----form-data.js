// access form data
// 1. e.target.inputFieldName.value
// 2. formData.get("inputFieldName")
// 3.controlled component one per each field useState onChange of the field.useful to dynamically handle error.
// 3.handle all controlled field in a single state with object
// const [FormData,setFormData]=useState({name:"",password:"",phone:""})
// 4. uncontrolled with  useRef hook
