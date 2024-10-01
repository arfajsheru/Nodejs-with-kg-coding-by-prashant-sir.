const allTypesOfError = () => {


    let width = 100 , height = 5;
    
    function calulateArea(width,height){ // Syntax Error
    return width + height;
}

    let area = 202;

    if(area > 100){
        console.log('The area is large.');
    }else{
        console.log('The area is small');
    }


    if(width + height > 100){
        console.log("Area is greter than or equal to 100");
    }

    calulateArea();
}

module.exports=allTypesOfError;