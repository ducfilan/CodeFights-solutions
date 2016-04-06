f=(e,n)=>"-"!=e[0]?e[0]==n?1:parseInt(e):e[1]==n?-1:parseInt(e)

solveEquation=(e,n)=>{
    i=f(e,"x")
    l=f(e.split(/x\+*/)[1],"y")
    p=parseInt(e.split(/y\+*/)[1])
    x=f(n,n.indexOf("y")<0?"x":"y")
    c="x"==n[n.length-1]?"y":"x"
    u="x"==c?!0:!1
    y=-p*x
    if(a=x%(u?l:i)==0?x/(u?l:i):0,0!=a)t=-(u?i:l)*a,y=-p*a,r=''+t+c+(isNaN(p)?'':0>y?y:"+"+y)
    else{
        t=-(u?i:l)*x
        s=0>(u?l:i)
        o=u?l:i
        s&&(t=-t,o=-o)
        r="("+t+c+(isNaN(p)?"":0>y?s?"+"+-y:y:s?-y:"+"+y)+")/"+o
    }
    return r=r.replace(c+")",c).replace(/\(*^1[xy]/,c).replace("+1"+c,"+"+c).replace("-1"+c,"-"+c),r="("==r[0]&&r.indexOf(")")<0?r.substr(1,r.length-1):r
}
