
function isvalid(password)
{
    for(i=0;i<password.length;i++)
    {
        if(password.charAt(i)>='A' && password.charAt(i)<='Z')
            return true
    }
    return false
}
function validateUsername()
{
    username=document.getElementById("uname").value

    if(username.trim().length==0)
    {
       document.getElementById("unameerr").innerHTML="please enter username"
        return false
    }
    else
    {
       document.getElementById("unameerr").innerHTML="" 
       return true
    }
}
function validatePassword()
{
    password=document.getElementById("pass").value
    if(password.length==0)
    {
        document.getElementById("passerr").innerHTML="please enter password"
        return false
    }else if(password.length<15)
    {
      document.getElementById("passerr").innerHTML="please enter min 15 chars"
        return  false
    }else if(!isvalid(password))
    {
        document.getElementById("passerr").innerHTML="please enter atleast 1 uppercase"
        return  false
    }
    else
    {
        document.getElementById("passerr").innerHTML=""
        return true
    }

}
function validateCheckbox()
{
    console.log("ON LINE 50")
     subjects=document.getElementsByClassName("Subjects")
    count=0
    for(i=0;i<subjects.length;i++)
    {
       if(subjects[i].checked==true)
        count++
    }
    if(count<3)
    {
       alert("atleast 3 boxes must be checked")
        return false 
    }


    return true






}
function submitform()
{
    if(validateUsername()&&validatePassword()&&validateCheckbox())
         document.getElementById("regform").submit()
}