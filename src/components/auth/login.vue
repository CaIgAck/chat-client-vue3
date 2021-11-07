<template>
  <div class="box">
    <div class="text-center">login</div>
    <form>
      <InputField label="email" />
      <InputField label="password" />
      <button type="button" class="btn">submit</button>
    </form>
  </div>
</template>

<script>
import InputField from "../Fields/InputField";
export default {
  name: "login",
  components: { InputField }
};
</script>

<style>
.text-center{
  color:#fff;
  text-transform:uppercase;
  font-size: 23px;
  margin: -50px 0 80px 0;
  display: block;
  text-align: center;
}
.box{
  position:absolute;
  left:50%;
  top:50%;
  transform: translate(-50%,-50%);
  background-color: rgba(0, 0, 0, 0.89);
  border-radius:3px;
  padding:70px 100px;
}
.btn{
  color:#fff;
  background-color:#e74c3c;
  outline: none;
  border: 0;
  padding:10px 20px;
  text-transform:uppercase;
  margin-top:50px;
  border-radius:2px;
  cursor:pointer;
  position:relative;
}
</style>