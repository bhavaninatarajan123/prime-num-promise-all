
// let a=parseInt(prompt("Enter the first number"))
// let b=parseInt(prompt("Enter the second number"))
// let c=parseInt(prompt("Enter the third number"))

let d=new Promise((resolve,reject)=>{
let prime=true
if(prime){
    resolve(3)
}
else{
    reject()
}
})

let e =new Promise((resolve,reject)=>{
    let prime=true
    if(prime){
        resolve(6)
    }
    else{
        reject()
    }
    })

    let f=new Promise((resolve,reject)=>{
        let prime=true
        if(prime){
            resolve(1)
        }
        else{
            reject()
        }
        })
let v=Promise.all([3,6,1]).then((msg)=>{
    let prime=true
    for(y of msg){
        for(i=2;i<y;i++){
               let z= y%i
               
                    if(y%i==0){
                        prime=false 
                       break
                    }
                    
                }
                if(prime==true){
                    document.write("the given number  "+y+" is a prime number <br> <br>")
                    
                }
                else{
                    document.write("the given number  "+y+" is  not a prime number <br> <br>")
                }
    
    }
})
// .catch((msg)=>{
// document.write("not prime")
// })


