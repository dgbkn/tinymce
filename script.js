/*
 * MIT
 *
 * VueMce github repository:
 * https://github.com/Eazymov/vue-mce#readme
 */

const config = {
  height: 500,
  inline: false,
  theme: 'modern',
  fontsize_formats: "8px 10px 12px 14px 16px 18px 20px 22px 24px 26px 28px 30px 34px 38px 42px 48px 54px 60px",
  plugins: 'print preview fullpage powerpaste searchreplace autolink directionality advcode visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists textcolor wordcount tinymcespellchecker a11ychecker imagetools mediaembed  linkchecker contextmenu colorpicker textpattern help',
  toolbar1: 'formatselect fontsizeselect | bold italic strikethrough forecolor backcolor | link | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent  | removeformat',
  image_advtab: true,
  templates: [
  { title: 'Test template 1', content: 'Test 1' },
  { title: 'Test template 2', content: 'Test 2' }],

  content_css: [
  '//fonts.googleapis.com/css?family=Lato:300,300i,400,400i',
  '//www.tinymce.com/css/codepen.min.css'] };



const app = new Vue({
  el: '#App',

  data: () => ({
    config,
    output: `<p style="text-align: center;"><span style="font-size: 30px;"><span style="color: #35495e;"><img style="margin: 0 10px -15px 0;" src="http://res.cloudinary.com/dbkd5ucah/image/upload/v1508394361/o541qRS_vhghcv.png" width="60" height="52"><span style="color: #1975d1;">tiny</span><span style="color: #a2c7ed;">mce</span> component for</span> <span style="color: #41b883;">Vue</span><span style="color: #35495e;">.js</span></span></p>
<p><img style="display: block; margin-left: auto; margin-right: auto;" src="https://vuejs.org/images/logo.png" alt="" width="400" height="400"></p>
<p style="text-align: center;"><strong><span style="font-size: 60px;"><span style="color: #41b883;">Vue</span><span style="color: #35495e;">-mce</span></span></strong></p>` }),


  methods: {
    handleInit(editor) {
      console.log('Initialized');
    },

    handleDestroy(editor) {
      console.log('Destroyed');
    },

    handleChange(value) {
      console.log('Changed');
    },

    handleInput(value) {
      console.log('Input');
    },

    handleError(err) {
      console.log('An error occurred');
    } } });