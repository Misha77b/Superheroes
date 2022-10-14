const fileUploadReader = (e) => {
    const file  =  e.target.files[0];
    const reader = new FileReader();
    const imgTag = document.getElementById("myimage");
    reader.onload = function(e) {
      imgTag.src = e.target.result;
    };
    reader.readAsDataURL(file);
};

export default fileUploadReader