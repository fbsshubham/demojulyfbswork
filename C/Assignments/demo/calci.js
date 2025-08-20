        function calci(op)
        {
              no1=parseInt(document.getElementById("inp1").value)
            no2=parseInt(document.getElementById("inp2").value)
            operation=""
            if(op=='+')
            {
                res=no1+no2
                operation="addition"
            }
            else if(op=='-')
            {
                res=no1-no2
                operation="substraction"
            }
            else if(op=='*')
            {
                res=no1*no2
                operation="multiplication"
            }
            else
            {
                res=no1/no2
                operation="division"
            }
            document.getElementById("result").innerHTML=operation+" of "+no1+" and "+no2+" is "+res

        }

      
  