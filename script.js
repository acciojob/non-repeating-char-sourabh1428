function firstNonRepeatedChar(str) {
 // Write your code here
	for(let i=0;i<str.length;i++){
    if(map.has(str.charAt(i))){
        map.set(str.charAt(i),map.get(str.charAt(i))+1);
    }
    else{
        map.set(str.charAt(i),1);
    }
}

for(let i=0;i<str.length;i++){
    if(map.get(str.charAt(i))==1){
        return str.charAt(i);
    }
}
return null;

	
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
