function a_plus_b(form) {
a=eval(form.a.value)
b=eval(form.b.value)
c=a+b
form.ans.value = c
}
function a_minus_b(form) {
a=eval(form.a.value)
b=eval(form.b.value)
c=a-b
form.ans.value=c
}
function a_times_b(form) {
a=eval(form.a.value)
b=eval(form.b.value)
c=a*b
form.ans.value=c
}
function a_div_b(form) {
a=eval(form.a.value)
b=eval(form.b.value)
c=a/b
form.ans.value = c
}
function a_pow_b(form) {
a=eval(form.a.value)
b=eval(form.b.value)
c=Math.pow(a, b)
form.ans.value = c
}