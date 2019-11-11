function main(){
    var obj = {};
    $.ajax({
        url: "/api/students",
        type : "GET",
        contentType : "application/json",
        data : JSON.stringify(obj),
        success : (json) =>{
            json.forEach((item)=>{
                $("#studentList").append(`<li>${item.name}</li>`);
            });
        },
        error : (err) =>{
            $("h1").html(`${err.statusText}`);
        },
    });
}


main();
