var table = document.getElementById("table");
function lightmood (){
    table.setAttribute("style", "background-color: #fff;")
}
function darkmood (){
    table.setAttribute("style", "background-color: #000;")
}
function insert(num){
    var mystring = document.form.textview.value;
    var lastchar = mystring[mystring.length - 1];
    if (mystring.length < 30)
    {
        if(!isNaN(lastchar) || lastchar == null || !isNaN(num))
        {
            document.form.textview.value = mystring + num;
        }
        else if(num != lastchar)
        {
            document.form.textview.value = mystring.replace(lastchar, num)
        }
    }
}
function equal(){
    var sum = document.form.textview.value;
    if(sum){
        document.form.textview.value = eval(sum);
    }
}
function clean(){
    document.form.textview.value = '';
}
function back(){
    var exp = document.form.textview.value;
    document.form.textview.value = exp.substring(0,exp.length - 1);
}