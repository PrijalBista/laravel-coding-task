(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{205:function(e,t,r){"use strict";r.r(t);var o={data:function(){return{data:{name:"",address:"",phone:"",email:""},errors:{}}},methods:{submit:function(){var e=this;this.$axios.post("/api/company",this.data).then((function(t){var data=t.data;console.log("sucess",data),e.$router.push("/admin/dashboard/company")})).catch((function(t){e.errors=t.response.data.errors,console.log(e.errors)}))}}},n=r(20),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container-fluid"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-12"},[r("h1",{staticClass:"mb-5"},[e._v("Company / Create "),r("small",[r("span",{staticClass:"badge badge-info",on:{click:function(t){return e.$router.back()}}},[r("i",{staticClass:"las la-arrow-left"}),e._v("Back")])])]),e._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-12 col-md-8"},[r("div",{staticClass:"card px-3 py-5"},[r("form",{on:{submit:function(t){return t.preventDefault(),e.submit(t)}}},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"name"}},[e._v("Company Name")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.data.name,expression:"data.name"}],staticClass:"form-control",class:{"is-invalid":e.errors.name},attrs:{type:"text",id:"name","aria-describedby":"name",placeholder:"Enter Company Name"},domProps:{value:e.data.name},on:{input:function(t){t.target.composing||e.$set(e.data,"name",t.target.value)}}}),e._v(" "),e.errors.name?r("div",{staticClass:"invalid-feedback"},[e._v(e._s(e.errors.name[0]))]):e._e()]),e._v(" "),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"address"}},[e._v("Company Address")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.data.address,expression:"data.address"}],staticClass:"form-control",class:{"is-invalid":e.errors.address},attrs:{type:"text",id:"address","aria-describedby":"address",placeholder:"Enter Company Address"},domProps:{value:e.data.address},on:{input:function(t){t.target.composing||e.$set(e.data,"address",t.target.value)}}}),e._v(" "),e.errors.address?r("div",{staticClass:"invalid-feedback"},[e._v(e._s(e.errors.address[0]))]):e._e()]),e._v(" "),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"phone"}},[e._v("Company Phone")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.data.phone,expression:"data.phone"}],staticClass:"form-control",class:{"is-invalid":e.errors.phone},attrs:{type:"text",id:"phone","aria-describedby":"phone",placeholder:"Enter Company Phone"},domProps:{value:e.data.phone},on:{input:function(t){t.target.composing||e.$set(e.data,"phone",t.target.value)}}}),e._v(" "),e.errors.phone?r("div",{staticClass:"invalid-feedback"},[e._v(e._s(e.errors.phone[0]))]):e._e()]),e._v(" "),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"email"}},[e._v("Company Email")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.data.email,expression:"data.email"}],staticClass:"form-control",class:{"is-invalid":e.errors.email},attrs:{type:"email",id:"email","aria-describedby":"email",placeholder:"Enter Company Email"},domProps:{value:e.data.email},on:{input:function(t){t.target.composing||e.$set(e.data,"email",t.target.value)}}}),e._v(" "),e.errors.email?r("div",{staticClass:"invalid-feedback"},[e._v(e._s(e.errors.email[0]))]):e._e()]),e._v(" "),r("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[e._v("Add Company")])])])])])])])])}),[],!1,null,null,null);t.default=component.exports}}]);