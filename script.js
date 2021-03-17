
function insert(number)
{
  document.form.textBar.value =  document.form.textBar.value + number; 


}
function op()
{
  document.form.textBar.value = eval(document.form.textBar.value );
}

function clean()
{
  document.form.textBar.value = "";
} 


